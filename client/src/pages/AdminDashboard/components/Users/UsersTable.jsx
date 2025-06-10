import { Download } from "lucide-react";
import UserRow from "./UsersRow";
import BtnPrimary from "../../../../components/ui/Btnprim";
import React, { useState } from "react";
export default function UsersTable({ users }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  const paginatedUsers = users.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
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
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  check
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Utilisateur
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Téléphone
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Statut
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Inscription
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-xs">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
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
