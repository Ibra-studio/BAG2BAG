import supabase from "../services/supabaseClient";

export async function GetCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
