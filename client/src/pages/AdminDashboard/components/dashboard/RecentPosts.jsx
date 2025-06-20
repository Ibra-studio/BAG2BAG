import React from 'react';
import { formatDate } from '../../../../utils/formatDate'; // Import the utility

// Placeholder for dynamic border color, can be expanded
const statusColors = {
  Actif: "border-l-green-500",
  Signalé: "border-l-red-500",
  // Add other statuses if necessary
  default: "border-l-gray-500",
};

export default function RecentPosts({ posts = [] }) {
  // Sort posts by date in descending order and take the top 5
  // Assuming 'date' field from postsData is suitable for sorting recent posts
  const displayedPosts = [...posts] // Create a shallow copy
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="rounded-lg bg-white text-black border-0 shadow-sm p-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">Derniers Posts</h4>
      </div>
      <div className="space-y-4 pt-6">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post) => (
            <div
              key={post.id}
              className={`border-l-4 ${statusColors[post.status] || statusColors.default} pl-4 py-2`} // Added py-2 for padding
            >
              <p className="text-base font-medium text-gray-900"> {/* Adjusted text size */}
                {post.title || 'Titre inconnu'}
              </p>
              <p className="text-sm text-gray-600">
                Par {post.users ? `${post.users.prenom || ''} ${post.users.nom || ''}`.trim() : 'Auteur inconnu'}
                • {formatDate(post.date)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun post récent à afficher.</p>
        )}
      </div>
    </div>
  );
}
