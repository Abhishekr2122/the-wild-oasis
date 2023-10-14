import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

// getting the cabin
export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Cabins can not be loaded");
  }

  return data;
}

// Deleting cabin
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

// creating cabin
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  console.log("This is the image Name", imageName);

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log("This is the image path", imagePath);

  // 1 create/edit cabin
  let query = supabase.from("Cabins");

  // A)Create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B)Edit cabin
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3 Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
