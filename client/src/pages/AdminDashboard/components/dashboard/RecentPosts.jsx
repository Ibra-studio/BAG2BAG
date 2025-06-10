const recentPosts = [
  {
    id: 1,
    title: "Voyage à Paris - Sac Louis Vuitton",
    author: "Sophie Laurent",
    time: "Il y a 1 heure",
    color: "border-l-blue-500",
  },
  {
    id: 2,
    title: "Weekend à Nice - Sac Hermès",
    author: "Marc Dupont",
    time: "Il y a 3 heures",
    color: "border-l-green-500",
  },
  {
    id: 3,
    title: "Soirée élégante - Sac Chanel",
    author: "Emma Moreau",
    time: "Il y a 5 heures",
    color: "border-l-purple-500",
  },
];

export default function RecentPosts() {
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">Derniers Posts</h4>
      </div>
      <div className="space-y-4 pt-6">
        {recentPosts.map((post) => (
          <div key={post.id} className={`border-l-4 ${post.color} pl-4`}>
            <p className="text-[25px] font-medium text-gray-900">
              {post.title}
            </p>
            <p className="text-sm text-gray-600">
              Par {post.author} • {post.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
