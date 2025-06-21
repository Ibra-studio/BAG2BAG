import { Download } from "lucide-react";
import PostRow from "./PostsRow";
import BtnPrimary from "../../../../components/ui/Btnprim";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { deletePost } from "@/services/apiPosts";
export default function PostsTable({ posts }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(posts.length / rowsPerPage);

  const [selected, setSelected] = useState([]);
  const paginatedPosts = posts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const isAllSelected =
    paginatedPosts.length > 0 &&
    paginatedPosts.every((post) => selected.includes(post.id));

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected([
        ...selected,
        ...paginatedPosts
          .map((post) => post.id)
          .filter((id) => !selected.includes(id)),
      ]);
    } else {
      setSelected(
        selected.filter((id) => !paginatedPosts.map((p) => p.id).includes(id))
      );
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handlepostSelectedDelete = async () => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer ${selected.length} annonce(s) ? Cette action est irréversible.`
    );
    if (confirmDelete) {
      try {
        for (const id of selected) {
          await deletePost(id);
        }
        setSelected([]);
        window.location.reload();
      } catch (error) {
        console.error("Erreur lors de la suppression des annonces :", error);
      }
    }
  };
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
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                      aria-label="Tout sélectionner"
                    />
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Annonce
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Auteur
                  </th>

                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Prix
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Nombre kilo dispo
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts.map((post, index) => (
                  <PostRow
                    key={index}
                    post={post}
                    checked={selected.includes(post.id)}
                    onCheck={() => handleSelect(post.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Pagination */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-2 mt-4">
          <div className="flex items-center gap-2">
            {selected.length > 0 && (
              <>
                <span className="text-sm text-gray-700">
                  {selected.length} sélectionné{selected.length > 1 ? "s" : ""}
                </span>
                <button
                  className="p-2 rounded hover:bg-red-100 text-red-600"
                  onClick={handlepostSelectedDelete}
                  title="Supprimer la sélection"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
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
    </div>
  );
}
