import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GetCurrentUser } from "@/utils/GetCurrentUser";
import getUserRole from "@/utils/GetUserRole";

export default function ProtectedAdminRoute({ children }) {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    async function check() {
      const user = await GetCurrentUser();
      console.log(user);
      if (!user) {
        navigate("/app");
        return;
      }
      const role = await getUserRole();
      console.log(role);
      if (role[0].role_user !== "admin") {
        navigate("/app");
        return;
      }
      setIsAllowed(true);
    }
    check();
  }, []);

  if (isAllowed) {
    return children;
  }
}
