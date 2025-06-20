import StatCard from "../ui/StatCard";

export default function UsersStats({ usersData = [] }) {
  const totalUsers = usersData.length;
  const verifiedUsers = usersData.filter(user => user.status === "Vérifié").length;
  const nonVerifiedUsers = usersData.filter(user => user.status === "Non Vérifié").length;
  const pendingRequests = usersData.filter(user => user.status === "En Attente").length;

  const stats = [
    {
      title: "Total Utilisateurs",
      value: totalUsers.toLocaleString(),
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      borderColor: "border-blue-100",
    },
    {
      title: "Utilisateurs Vérifiés",
      value: verifiedUsers.toLocaleString(),
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      borderColor: "border-green-100",
    },
    {
      title: "Non Vérifiés",
      value: nonVerifiedUsers.toLocaleString(),
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      borderColor: "border-red-100",
    },
    {
      title: "Demandes en Attente",
      value: pendingRequests.toLocaleString(),
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
          type="user" // Assuming 'type' prop is still relevant for StatCard styling/icons
          className={`border-0 shadow-sm ${stat.borderColor}`}
          title={stat.title}
          value={stat.value}
          iconColor={stat.iconColor}
          bgColor={stat.iconBg}
          // If StatCard can take an icon component directly, that could be an option too
        />
      ))}
    </div>
  );
}
