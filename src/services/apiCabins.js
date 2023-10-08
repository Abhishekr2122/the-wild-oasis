import supabase from "./supabase";

export async function apiCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins can not be loaded");
  }

  return data;
}
