import { useState, useMemo, useEffect } from "react";
import PostsHeader from "../components/Posts/PostsHeader";
import PostsStats from "../components/Posts/PostsStats";
import PostsFilters from "../components/Posts/PostsFilters";
import PostsTable from "../components/Posts/PostsTable";
import { getPosts } from "@/services/apiPosts";

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]); // This will hold the fetched posts data

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const data = await getPosts();

        setPosts(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Filtrage et tri des données
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    let filtered = posts.filter((post) => {
      // Filtre par terme de recherche
      const matchesSearch =
        searchTerm === "" ||
        post.paysDepart.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.paysArrivee.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtre par statut
      const matchesStatus =
        statusFilter === "all" ||
        post.status.toLowerCase() === statusFilter.toLowerCase();

      // Filtre par destination/région
      // const matchesDestination =
      //   destinationFilter === "all" ||
      //   (destinationFilter === "europe" &&
      //     ["Londres", "Rome", "Barcelona", "Madrid", "Milan"].includes(
      //       post.destination
      //     )) ||
      //   (destinationFilter === "france" &&
      //     ["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
      //       post.departure
      //     )) ||
      //   (destinationFilter === "international" &&
      //     !["Paris", "Nice", "Lyon", "Marseille", "Toulouse"].includes(
      //       post.destination
      //     ));

      return matchesSearch && matchesStatus;
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
  }, [posts, searchTerm, statusFilter, sortBy]);

  return (
    <div className="p-6 space-y-6">
      <PostsHeader />
      <PostsStats
        totalPosts={posts.length}
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
