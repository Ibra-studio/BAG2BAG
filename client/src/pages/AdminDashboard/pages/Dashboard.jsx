import { Users, FileText, Calendar, Edit } from "lucide-react"; // Assuming FileText, Calendar, Edit might be used later
import StatsCard from "../components/ui/StatCard";
import RecentUsers from "../components/dashboard/RecentUsers";
import RecentPosts from "../components/dashboard/RecentPosts";
import UsersByMonthChart from "../components/dashboard/UsersByMonthChart";
import UserNationalityChart from "../components/dashboard/UserNationalityChart"; // Import the new chart
import React, { useEffect, useState } from "react";
import { getUsers } from "../../../services/apiUsers";
import getPosts from "../../../services/apiPosts"; // Default export

export default function Dashboard() {
  const [usersData, setUsersData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [users, posts] = await Promise.all([getUsers(), getPosts()]);
        setUsersData(users || []);
        setPostsData(posts || []);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setError(
          err.message || "An error occurred while fetching dashboard data"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalUsers = usersData.length;
  const totalPosts = postsData.length;
  // Assuming user object has a 'status' field
  const usersPendingVerification = usersData.filter(
    (user) => user.status === "En Attente"
  ).length;
  // Placeholder for active users per month, using total users for now
  const activeUsersPerMonth = totalUsers;


  if (loading) {
    return <div className="p-6">Loading dashboard data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">Aperçu général de Bag2Bag</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Total Utilisateurs"
          value={totalUsers.toLocaleString()}
          Icon={Users}
          iconColor="text-blue-600"
          bgColor="bg-blue-100"
          className="border-blue-100"
        />
        <StatsCard
          title="Total Posts"
          value="8,923"
          Icon={Users}
          iconColor="text-green-600"
          bgColor="bg-green-100"
          className="border-green-100"
        />
        <StatsCard
          title="Utilisateurs Actifs par mois"
          value="3,245"
          Icon={Users}
          iconColor="text-purple-600"
          bgColor="bg-purple-100"
          className="border-purple-100"
        />
        <StatsCard
          title="En Attente de Vérification"
          value="156"
          Icon={Users}
          iconColor="text-orange-600"
          bgColor="bg-orange-100"
          className="border-orange-100"
        />
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsersByMonthChart usersData={usersData} />
        <UserNationalityChart usersData={usersData} />
      </div>
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentUsers users={usersData} />
        <RecentPosts posts={postsData} />
      </div>
    </div>
  );
}
