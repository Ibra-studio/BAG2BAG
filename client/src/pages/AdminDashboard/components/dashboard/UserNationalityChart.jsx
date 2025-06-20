import React from 'react';
import { Pie } from 'react-chartjs-2'; // Or Bar, depending on preference
import {
  Chart as ChartJS,
  ArcElement, // For Pie/Doughnut
  BarElement, // For Bar
  CategoryScale, // For Bar
  LinearScale, // For Bar
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const UserNationalityChart = ({ usersData }) => {
  // console.log("User data for nationality chart:", usersData); // Removed console.log

  if (!usersData || usersData.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Nationalité des Utilisateurs
        </h4>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Pas de données utilisateur disponibles.</p>
        </div>
      </div>
    );
  }

  // Check for nationality field (e.g., user.nationality)
  // This is a placeholder check; actual field name might differ.
  const hasNationalityData = usersData.some(user => user.nationality !== undefined && user.nationality !== null && user.nationality !== '');

  if (!hasNationalityData) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Nationalité des Utilisateurs
        </h4>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Données de nationalité non disponibles dans les fiches utilisateurs.</p>
        </div>
      </div>
    );
  }

  // Process data: Group by nationality and count
  const nationalitiesCount = usersData.reduce((acc, user) => {
    const nationality = user.nationality || "Inconnue"; // Group undefined/empty as 'Inconnue'
    acc[nationality] = (acc[nationality] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(nationalitiesCount),
    datasets: [
      {
        label: 'Nombre d\'utilisateurs',
        data: Object.values(nationalitiesCount),
        backgroundColor: [ // Add more colors if more nationalities are expected
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(199, 199, 199, 0.7)',
          'rgba(83, 102, 255, 0.7)',
          'rgba(102, 255, 83, 0.7)',
          'rgba(255, 83, 102, 0.7)',
        ],
        borderColor: [ // Optional border colors
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(102, 255, 83, 1)',
          'rgba(255, 83, 102, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top', // Or 'right', 'bottom', 'left'
      },
      title: {
        display: true,
        text: 'Répartition des Utilisateurs par Nationalité',
      },
    },
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="h-64"> {/* Ensure height for chart */}
        <Pie data={chartData} options={options} />
        {/* Or <Bar data={chartData} options={options} /> */}
      </div>
    </div>
  );
};

export default UserNationalityChart;
