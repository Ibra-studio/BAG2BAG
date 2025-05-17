import supabase from "../services/supabaseClient";
import { v4 as uuidv4 } from "uuid";
export async function uploadProfileImage(file, userId) {
  console.log("FICHIER À UPLOAD →", file);

  const filePath = "user/" + uuidv4();

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);
  if (data) {
    console.log("image upload avec succès");
  }
  if (error) {
    console.error("Erreur d'upload de l'image dans uploadProflle →", error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}
