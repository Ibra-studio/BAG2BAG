import { Download, Trash2 } from "lucide-react";
import UserRow from "./UsersRow";
import BtnPrimary from "../../../../components/ui/Btnprim";
import React, { useState } from "react";

export default function UsersTable({ users }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  const [selected, setSelected] = useState([]);
  const paginatedUsers = users.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const isAllSelected =
    paginatedUsers.length > 0 &&
    paginatedUsers.every((user) => selected.includes(user.id));

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected([
        ...selected,
        ...paginatedUsers
          .map((user) => user.id)
          .filter((id) => !selected.includes(id)),
      ]);
    } else {
      setSelected(
        selected.filter((id) => !paginatedUsers.map((u) => u.id).includes(id))
      );
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // À adapter selon ta logique de suppression
  const handleUserSelectedDelete = async () => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer ${selected.length} utilisateur(s) ? Cette action est irréversible.`
    );
    if (confirmDelete) {
      try {
        // Ajoute ici ta logique de suppression groupée (ex: appel à deleteUser pour chaque id)
        setSelected([]);
        window.location.reload();
      } catch (error) {
        console.error(
          "Erreur lors de la suppression des utilisateurs :",
          error
        );
      }
    }
  };

  return (
    <div className="rounded-lg bg-white text-black border-0 shadow-sm p-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold">Liste des Utilisateurs</h3>
        <BtnPrimary>
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </div>
        </BtnPrimary>
      </div>
      <div>
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
                  Utilisateur
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                  Téléphone
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                  Statut
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  checked={selected.includes(user.id)}
                  onCheck={() => handleSelect(user.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination + sélection */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-2 mt-4">
          <div className="flex items-center gap-2">
            {selected.length > 0 && (
              <>
                <span className="text-sm text-gray-700">
                  {selected.length} sélectionné{selected.length > 1 ? "s" : ""}
                </span>
                <button
                  className="p-2 rounded hover:bg-red-100 text-red-600"
                  onClick={handleUserSelectedDelete}
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
