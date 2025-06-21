import StatCard from "../ui/StatCard";

export default function UsersStats({ users }) {
  // { totalPosts, filteredPosts }
  const stats = [
    {
      title: "Total Utilisateurs",
      value: users.length,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      borderColor: "border-blue-100",
    },
    {
      title: "Utilisateurs Vérifiés",
      value: users.length,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      borderColor: "border-green-100",
    },
    {
      title: "Non Vérifiés",
      value: 0,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      borderColor: "border-red-100",
    },
    {
      title: "Demandes en Attente",
      value: 0,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      borderColor: "border-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          type="user"
          className={`border-0 shadow-sm ${stat.borderColor}`}
          title={stat.title}
          value={stat.value}
          iconColor={stat.iconColor}
          bgColor={stat.iconBg}
        />
      ))}
    </div>
  );
}
