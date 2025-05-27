import supabase from "../services/supabaseClient";
async function getUserRole() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
    return;
  }
  let { data: role, error } = await supabase
    .from("users")
    .select("role_user")
    .eq("id", user.id);
  return role;
}

export default getUserRole;
