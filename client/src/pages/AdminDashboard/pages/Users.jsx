import { useState, useMemo } from "react";
import UsersStats from "../components/Users/UsersStats";
import UsersFilters from "../components/Users/UsersFilters";
import UsersTable from "../components/Users/UsersTable";
import UsersVerificationTable from "../components/Users/UsersVerificationTable";

// Mock data remains here for now, to be passed as props
const mockUsersData = [
  {
    id: 1001,
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    status: "Vérifié",
    inscription: "15 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1002,
    name: "Jean Martin",
    email: "jean.martin@email.com",
    phone: "+33 6 98 76 54 32",
    status: "Non Vérifié",
    inscription: "14 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1003,
    name: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    phone: "+33 6 11 22 33 44",
    status: "Vérifié",
    inscription: "13 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1004,
    name: "Marc Dupont",
    email: "marc.dupont@email.com",
    phone: "+33 6 55 66 77 88",
    status: "En Attente",
    inscription: "12 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1005,
    name: "Emma Moreau",
    email: "emma.moreau@email.com",
    phone: "+33 6 44 55 66 77",
    status: "Non Vérifié",
    inscription: "11 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1006,
    name: "Lucas Bernard",
    email: "lucas.bernard@email.com",
    phone: "+33 6 23 45 67 89",
    status: "Vérifié",
    inscription: "10 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1007,
    name: "Chloé Petit",
    email: "chloe.petit@email.com",
    phone: "+33 6 34 56 78 90",
    status: "Non Vérifié",
    inscription: "09 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1008,
    name: "Thomas Lefevre",
    email: "thomas.lefevre@email.com",
    phone: "+33 6 45 67 89 01",
    status: "Vérifié",
    inscription: "08 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1009,
    name: "Camille Morel",
    email: "camille.morel@email.com",
    phone: "+33 6 56 78 90 12",
    status: "En Attente",
    inscription: "07 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1010,
    name: "Antoine Girard",
    email: "antoine.girard@email.com",
    phone: "+33 6 67 89 01 23",
    status: "Non Vérifié",
    inscription: "06 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1011,
    name: "Julie Lambert",
    email: "julie.lambert@email.com",
    phone: "+33 6 78 90 12 34",
    status: "Vérifié",
    inscription: "05 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1012,
    name: "Hugo Rousseau",
    email: "hugo.rousseau@email.com",
    phone: "+33 6 89 01 23 45",
    status: "Non Vérifié",
    inscription: "04 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1013,
    name: "Manon Faure",
    email: "manon.faure@email.com",
    phone: "+33 6 90 12 34 56",
    status: "Vérifié",
    inscription: "03 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1014,
    name: "Alexandre Henry",
    email: "alexandre.henry@email.com",
    phone: "+33 6 01 23 45 67",
    status: "En Attente",
    inscription: "02 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1015,
    name: "Laura Clement",
    email: "laura.clement@email.com",
    phone: "+33 6 12 34 56 79",
    status: "Non Vérifié",
    inscription: "01 Nov 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1016,
    name: "Baptiste Gauthier",
    email: "baptiste.gauthier@email.com",
    phone: "+33 6 23 45 67 80",
    status: "Vérifié",
    inscription: "31 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1017,
    name: "Clara Masson",
    email: "clara.masson@email.com",
    phone: "+33 6 34 56 78 91",
    status: "Non Vérifié",
    inscription: "30 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1018,
    name: "Gabriel Marchand",
    email: "gabriel.marchand@email.com",
    phone: "+33 6 45 67 89 02",
    status: "Vérifié",
    inscription: "29 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1019,
    name: "Léa Blanchard",
    email: "lea.blanchard@email.com",
    phone: "+33 6 56 78 90 13",
    status: "En Attente",
    inscription: "28 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1020,
    name: "Romain Perrin",
    email: "romain.perrin@email.com",
    phone: "+33 6 67 89 01 24",
    status: "Non Vérifié",
    inscription: "27 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1021,
    name: "Lucie Robin",
    email: "lucie.robin@email.com",
    phone: "+33 6 78 90 12 35",
    status: "Vérifié",
    inscription: "26 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1022,
    name: "Nathan Guerin",
    email: "nathan.guerin@email.com",
    phone: "+33 6 89 01 23 46",
    status: "Non Vérifié",
    inscription: "25 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1023,
    name: "Sarah Chevalier",
    email: "sarah.chevalier@email.com",
    phone: "+33 6 90 12 34 57",
    status: "Vérifié",
    inscription: "24 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1024,
    name: "Mathieu Roy",
    email: "mathieu.roy@email.com",
    phone: "+33 6 01 23 45 68",
    status: "En Attente",
    inscription: "23 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1025,
    name: "Anaïs Lefebvre",
    email: "anais.lefebvre@email.com",
    phone: "+33 6 12 34 56 80",
    status: "Non Vérifié",
    inscription: "22 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1026,
    name: "Quentin Fontaine",
    email: "quentin.fontaine@email.com",
    phone: "+33 6 23 45 67 81",
    status: "Vérifié",
    inscription: "21 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1027,
    name: "Elodie Caron",
    email: "elodie.caron@email.com",
    phone: "+33 6 34 56 78 92",
    status: "Non Vérifié",
    inscription: "20 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1028,
    name: "Vincent Lemoine",
    email: "vincent.lemoine@email.com",
    phone: "+33 6 45 67 89 03",
    status: "Vérifié",
    inscription: "19 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1029,
    name: "Pauline Renaud",
    email: "pauline.renaud@email.com",
    phone: "+33 6 56 78 90 14",
    status: "En Attente",
    inscription: "18 Oct 2024",
    avatar: "/placeholder.svg",
  },
  {
    id: 1030,
    name: "Julien Barbier",
    email: "julien.barbier@email.com",
    phone: "+33 6 67 89 01 25",
    status: "Non Vérifié",
    inscription: "17 Oct 2024",
    avatar: "/placeholder.svg",
  },
];

// Example data for verification requests, this might also come from a different source/state
const mockVerificationRequestsData = [
  {
    id: 1004, // User Marc Dupont is "En Attente"
    name: "Marc Dupont",
    email: "marc.dupont@email.com",
    date: "12 Nov 2024",
    avatar: "/placeholder.svg",
    avatarFallback: "MD",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  // TODO: Implement actual filtering logic for status and sorting
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filtering logic (simplified for now, can be expanded)
  const filteredUsers = useMemo(() => {
    let users = mockUsersData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // TODO: Add status filtering based on statusFilter
    // TODO: Add sorting based on sortBy (e.g., inscription date)

    return users;
  }, [searchTerm]); //TODO: Add statusFilter and sortBy to dependencies when implemented

  return (
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

      <UsersStats />

      <UsersFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <UsersTable users={filteredUsers} />

      <UsersVerificationTable
        verificationUsers={mockVerificationRequestsData}
      />
    </div>
  );
}
