import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins can not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from("Cabins").insert([newCabin]);

  if (error) {
    throw new Error("Cabin could not be created");
  }

  return data;
}
