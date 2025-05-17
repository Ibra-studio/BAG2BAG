import supabase from "../services/supabaseClient";
export async function uploadProfileImage(file, userId) {
  console.log("FICHIER À UPLOAD →", file);
  const fileExt = file.name.split(".").pop();
  const filePath = `${userId}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("userpicture")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Erreur d'upload de l'image →", error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from("userpicture")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}
