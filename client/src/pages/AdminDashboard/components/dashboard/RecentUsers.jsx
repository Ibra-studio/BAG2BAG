const recentUsers = [
  {
    id: 1,
    name: "Marie Dubois",
    time: "Il y a 2 heures",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Jean Martin",
    time: "Il y a 4 heures",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Pierre Leroy",
    time: "Il y a 6 heures",
    avatar: "/placeholder.svg",
  },
];

export default function RecentUsers() {
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          Derniers Utilisateurs Inscrits
        </h4>
      </div>
      <div className="space-y-4 pt-6">
        {recentUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-3 ">
            avatar
            <div className="flex-1">
              <p className="text-[25px] font-medium text-gray-900">
                {user.name}
              </p>
              <p className="text-sm text-gray-500">{user.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
