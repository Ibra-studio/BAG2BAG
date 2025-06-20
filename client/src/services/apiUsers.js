import supabase from "./supabase";

export async function getUsers() {
  let { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }

  return data;
}

export async function deleteUser(userId) {
  const { data, error } = await supabase
    .from("users")
    .delete()
    .match({ id: userId });

  if (error) {
    console.error("Error deleting user:", error);
    throw new Error("Could not delete user");
  }

  return data; // Or return true/a success message if data is not particularly useful
}
