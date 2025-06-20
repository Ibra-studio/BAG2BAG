import React from 'react';
import { formatDate } from '../../../../utils/formatDate'; // Import the utility

export default function RecentUsers({ users = [] }) {
  // Sort users by created_at date in descending order and take the top 5
  const displayedUsers = [...users] // Create a shallow copy before sorting
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  return (
    <div className="rounded-lg bg-white text-black border-0 shadow-sm p-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          Derniers Utilisateurs Inscrits
        </h4>
      </div>
      <div className="space-y-4 pt-6">
        {displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-3">
              {/* Placeholder for avatar, actual avatar logic would go here if available */}
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-gray-900"> {/* Adjusted text size */}
                  {user.name || 'Nom inconnu'}
                </p>
                <p className="text-sm text-gray-500">
                  Inscrit le: {formatDate(user.created_at)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun utilisateur récent à afficher.</p>
        )}
      </div>
    </div>
  );
}
