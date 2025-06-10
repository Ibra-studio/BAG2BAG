import { Download } from "lucide-react";
import PostRow from "./PostsRow";
import BtnPrimary from "../../../../components/ui/Btnprim";
import { useState } from "react";
export default function PostsTable({ posts }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(posts.length / rowsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold">Liste des Annonces de Voyage</h3>
        <BtnPrimary>
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </div>
        </BtnPrimary>
      </div>
      <div>
        {posts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucune annonce trouvée avec les filtres actuels
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    check
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Annonce
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Auteur
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Trajet
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Prix
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Statut
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts.map((post) => (
                  <PostRow key={post.id} post={post} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4">
          <button
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded bg-gray-200"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
