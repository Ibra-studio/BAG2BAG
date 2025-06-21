import StatCard from "../ui/StatCard";

export default function PostsStats({ totalPosts, filteredPosts }) {
  const stats = [
    {
      title: "Total Annonces",
      value: totalPosts,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      title: "Annonces Affichées",
      value: filteredPosts,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
    },
    {
      title: "Annonces Signalées",
      value: 0,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-100",
    },
    {
      title: "Annonces Aujourd'hui",
      value: 0,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          className={`border-0 shadow-sm ${stat.borderColor}`}
          title={stat.title}
          value={stat.value}
          iconColor={stat.iconColor}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
}
