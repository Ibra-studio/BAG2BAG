import Input from "@/components/form/Input";
import { Search } from "lucide-react";
import React from "react";
export default function PostsFilters({
  searchTerm,
  setSearchTerm,
  // statusFilter,
  // setStatusFilter,
  // destinationFilter,
  // setDestinationFilter,
  // sortBy,
  // setSortBy,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Rechercher une annonce..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <select
        // value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-full sm:w-48 px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="all">Tous les statuts</option>
        <option value="actif">Actif</option>
        <option value="signalé">Signalé</option>
        <option value="en attente">En Attente</option>
      </select>
      <select
        // value={sortBy}
        // onChange={(e) => setSortBy(e.target.value)}
        className="w-full sm:w-48 px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="newest">Plus récent</option>
        <option value="oldest">Plus ancien</option>
      </select>
    </div>
  );
}
