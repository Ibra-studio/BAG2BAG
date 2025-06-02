import supabase from "../services/supabaseClient";
import { v4 as uuidv4 } from "uuid";
export async function uploadProfileImage(file, userId) {
  if (!(file instanceof File)) {
    throw new Error("Le fichier n'est pas valide");
  }

  const extension = file.name.split(".").pop();
  const filePath = `${userId}/` + uuidv4();

  // Étape 2 : Uploader le nouveau fichier
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file); // Pas besoin de upsert

  if (error) {
    console.error("Erreur d'upload de l'image :", error);
    throw error;
  }

  // Étape 3 : Récupérer l'URL publique
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}
