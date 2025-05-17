import supabase from "./supabaseClient";
async function getPosts() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select("*,  users (  prenom,   nom,   photo_profil  )");
  if (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
  return posts;
}
export default getPosts;
