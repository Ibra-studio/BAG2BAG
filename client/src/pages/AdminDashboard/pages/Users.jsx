import { useState, useMemo, use, useEffect } from "react";
import UsersStats from "../components/Users/UsersStats";
import UsersFilters from "../components/Users/UsersFilters";
import UsersTable from "../components/Users/UsersTable";
import UsersVerificationTable from "../components/Users/UsersVerificationTable";
import { getUsers } from "../../../services/apiUsers";

// Mock data remains here for now, to be passed as props

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  // TODO: Implement actual filtering logic for status and sorting
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]); // This will hold the fetched user data

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const data = await getUsers();

        setUserData(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Filtering logic (simplified for now, can be expanded)
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return userData;

    let users = userData.filter(
      (user) =>
        user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // TODO: Add status filtering based on statusFilter
    // TODO: Add sorting based on sortBy (e.g., inscription date)

    return users;
  }, [searchTerm, userData]); //TODO: Add statusFilter and sortBy to dependencies when implemented

  return (
    <>
      {!isLoading && (
        <div className="p-6 space-y-6 flex flex-col gap-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Gestion des Utilisateurs
            </h1>
            <p className="text-gray-600 mt-2">
              Gérez tous les utilisateurs de votre plateforme Bag2Bag
            </p>
          </div>

          <UsersStats users={userData} />

          <UsersFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <UsersTable users={filteredUsers} />

          {/* <UsersVerificationTable
          verificationUsers={mockVerificationRequestsData}
        /> */}
        </div>
      )}
    </>
  );
}
