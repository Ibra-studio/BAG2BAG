import { Users, FileText, Calendar, Edit } from "lucide-react";
import StatsCard from "../components/ui/StatCard";
import RecentUsers from "../components/dashboard/RecentUsers";
import RecentPosts from "../components/dashboard/RecentPosts";
import React from "react";
export default function Dashboard() {
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
          value="12,547"
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
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Utilisateurs par Mois
          </h4>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Graphique des utilisateurs par mois</p>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Nationalité des Utilisateurs
          </h4>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Graphique de répartition par nationalité
            </p>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentUsers />
        <RecentPosts />
      </div>
    </div>
  );
}
