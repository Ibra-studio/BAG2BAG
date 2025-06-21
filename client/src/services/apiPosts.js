import supabase from "./supabaseClient";
export async function getPosts() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select("*,  users (  prenom,   nom,   photo_profil  )");
  if (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
  return posts;
}
export async function deletePost(postId) {
  console.log(postId);
  const { data, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", postId);

  if (error) {
    console.error("Error deleting user:", error);
    throw new Error("Could not delete user");
  }
}
