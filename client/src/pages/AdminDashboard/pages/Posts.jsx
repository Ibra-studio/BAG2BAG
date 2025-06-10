import { useState, useMemo } from "react";
import PostsHeader from "../components/Posts/PostsHeader";
import PostsStats from "../components/Posts/PostsStats";
import PostsFilters from "../components/Posts/PostsFilters";
import PostsTable from "../components/Posts/PostsTable";

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Mock data pour les annonces
  const mockPosts = [
    {
      id: "A001",
      title: "Paris - Londres",
      image: "/placeholder.svg",
      author: "Marie Dubois",
      authorAvatar: "/placeholder.svg",
      departure: "Paris",
      destination: "Londres",
      price: "85€",
      status: "Actif",
      date: "2024-11-15",
      description: "Voyage d'affaires, recherche compagnon de voyage",
    },
    {
      id: "A002",
      title: "Nice - Rome",
      image: "/placeholder.svg",
      author: "Jean Martin",
      authorAvatar: "/placeholder.svg",
      departure: "Nice",
      destination: "Rome",
      price: "120€",
      status: "Signalé",
      date: "2024-11-14",
      description: "Weekend romantique, partage des frais",
    },
    {
      id: "A003",
      title: "Lyon - Barcelona",
      image: "/placeholder.svg",
      author: "Sophie Laurent",
      authorAvatar: "/placeholder.svg",
      departure: "Lyon",
      destination: "Barcelona",
      price: "95€",
      status: "Actif",
      date: "2024-11-13",
      description: "Vacances d'été, voyage en groupe",
    },
    {
      id: "A004",
      title: "Marseille - Madrid",
      image: "/placeholder.svg",
      author: "Marc Dupont",
      authorAvatar: "/placeholder.svg",
      departure: "Marseille",
      destination: "Madrid",
      price: "110€",
      status: "Actif",
      date: "2024-11-12",
      description: "Voyage culturel, partage voiture",
    },
    {
      id: "A005",
      title: "Toulouse - Milan",
      image: "/placeholder.svg",
      author: "Emma Moreau",
      authorAvatar: "/placeholder.svg",
      departure: "Toulouse",
      destination: "Milan",
      price: "140€",
      status: "Signalé",
      date: "2024-11-11",
      description: "Shopping trip, train haute vitesse",
    },
  ];

  // Filtrage et tri des données
  const filteredPosts = useMemo(() => {
    let filtered = mockPosts.filter((post) => {
      // Filtre par terme de recherche
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtre par statut
      const matchesStatus =
        statusFilter === "all" ||
        post.status.toLowerCase() === statusFilter.toLowerCase();

      // Filtre par destination/région
      const matchesDestination =
        destinationFilter === "all" ||
        (destinationFilter === "europe" &&
          ["Londres", "Rome", "Barcelona", "Madrid", "Milan"].includes(
            post.destination
          )) ||
        (destinationFilter === "france" &&
          ["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
            post.departure
          )) ||
        (destinationFilter === "international" &&
          !["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
            post.destination
          ));

      return matchesSearch && matchesStatus && matchesDestination;
    });

    // Tri par date
    if (sortBy === "newest") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "oldest") {
      filtered.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    return filtered;
  }, [mockPosts, searchTerm, statusFilter, destinationFilter, sortBy]);

  return (
    <div className="p-6 space-y-6">
      <PostsHeader />
      <PostsStats
        totalPosts={mockPosts.length}
        filteredPosts={filteredPosts.length}
      />
      <PostsFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        // statusFilter={statusFilter}
        // setStatusFilter={setStatusFilter}
        // destinationFilter={destinationFilter}
        // setDestinationFilter={setDestinationFilter}
        // sortBy={sortBy}
        // setSortBy={setSortBy}
      />
      <PostsTable posts={filteredPosts} />
    </div>
  );
}
