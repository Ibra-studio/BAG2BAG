import { useState, useMemo, useEffect } from "react";
import getPosts from "../../../services/apiPosts";
import { exportTableToPDF } from "../../../utils/pdfExporter"; // Import PDF exporter
import PostsHeader from "../components/Posts/PostsHeader";
import PostsStats from "../components/Posts/PostsStats";
import PostsFilters from "../components/Posts/PostsFilters";
import PostsTable from "../components/Posts/PostsTable";

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [postsData, setPostsData] = useState([]); // State for fetched posts

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPostsData(data);
        // console.log("Fetched posts:", data); // Temporary log - REMOVED
      } catch (error) {
        console.error("Failed to load posts:", error);
        // TODO: Add user-facing error notification
      }
    }
    fetchPosts();
  }, []);

  // Mock data pour les annonces - REMOVED
  // const mockPosts = [
  //   {
  //     id: "A001",
  //     title: "Paris - Londres",
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
  //     description: "Shopping trip, train haute vitesse",
  //   },
  // ];

  // Filtrage et tri des données
  const filteredPosts = useMemo(() => {
    let filtered = postsData.filter((post) => { // Use postsData here
      // Filtre par terme de recherche
      // Ensure post.title, post.departure etc. exist and are strings before calling toLowerCase()
      const title = post.title || "";
      const departure = post.departure || "";
      const destination = post.destination || "";
      const description = post.description || "";
      // Assuming author information is nested in post.users as per apiPosts.js
      const authorName = post.users ? `${post.users.prenom} ${post.users.nom}` : "";

      const matchesSearch =
        searchTerm === "" ||
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        authorName.toLowerCase().includes(searchTerm.toLowerCase());
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // Filtre par statut
      const status = post.status || "";
      const matchesStatus =
        statusFilter === "all" ||
        status.toLowerCase() === statusFilter.toLowerCase();

      // Filtre par destination/région
      // This logic might need adjustment based on actual data structure for regions/countries
      const postDestination = post.destination || "";
      const postDeparture = post.departure || "";
      const matchesDestination =
        destinationFilter === "all" ||
        (destinationFilter === "europe" &&
          ["Londres", "Rome", "Barcelona", "Madrid", "Milan"].includes(
            postDestination
          )) ||
        (destinationFilter === "france" &&
          ["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
            postDeparture // Assuming departure city indicates France for this filter
          )) ||
        (destinationFilter === "international" && // This condition might need refinement
          !["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
            postDestination
          ));

      return matchesSearch && matchesStatus && matchesDestination;
    });

    // Tri par date
    if (sortBy === "newest") {
      filtered.sort(
        (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
      );
    } else if (sortBy === "oldest") {
      filtered.sort(
        (a, b) => new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
      );
    }

    return filtered;
  }, [postsData, searchTerm, statusFilter, destinationFilter, sortBy]); // Update dependencies

  const handleExportPDF = () => {
    const columns = [
      { header: 'Titre', dataKey: 'title' },
      { header: 'Auteur', dataKey: 'authorName' }, // We'll need to map this from users object
      { header: 'Départ', dataKey: 'departure' },
      { header: 'Destination', dataKey: 'destination' },
      { header: 'Prix', dataKey: 'price' },
      { header: 'Statut', dataKey: 'status' },
      { header: 'Date', dataKey: 'date' },
    ];

    // Prepare data, especially constructing authorName
    const dataForPDF = filteredPosts.map(post => ({
      ...post,
      authorName: post.users ? `${post.users.prenom} ${post.users.nom}` : 'N/A',
      // Ensure date is formatted nicely if it's a Date object, though it seems to be a string already
      date: post.date ? new Date(post.date).toLocaleDateString() : 'N/A',
    }));

    exportTableToPDF(columns, dataForPDF, "Liste des Annonces", "annonces.pdf");
  };

  return (
    <div className="p-6 space-y-6">
      <PostsHeader />
      <PostsStats
        totalPosts={postsData.length} // Use postsData.length
        filteredPostsCount={filteredPosts.length} // Pass filteredPosts.length
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
      <button
        onClick={handleExportPDF}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 self-start mb-4" // Added mb-4 for spacing
      >
        Exporter en PDF
      </button>
      <PostsTable posts={filteredPosts} />
    </div>
  );
}
