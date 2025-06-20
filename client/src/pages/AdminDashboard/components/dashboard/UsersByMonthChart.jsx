import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UsersByMonthChart = ({ usersData }) => {
  if (!usersData || usersData.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Utilisateurs par Mois
        </h4>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Pas de données utilisateur disponibles pour afficher le graphique.</p>
        </div>
      </div>
    );
  }

  // Process user data to get counts per month
  const usersByMonth = usersData.reduce((acc, user) => {
    // Assuming user.created_at is a valid date string or timestamp
    // Supabase typically provides ISO 8601 strings like "2023-01-15T10:30:00.000Z"
    const date = new Date(user.created_at);
    if (isNaN(date.getTime())) {
      // console.warn("Invalid date for user:", user); // Optional: log invalid dates
      return acc; // Skip if date is invalid
    }
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; // Format as YYYY-MM

    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  const sortedMonths = Object.keys(usersByMonth).sort();

  const chartData = {
    labels: sortedMonths.map(monthYear => {
      const [year, month] = monthYear.split('-');
      // Optional: Format to a more readable label e.g., "Jan 2023"
      return new Date(Number(year), Number(month) - 1).toLocaleString('default', { month: 'short', year: 'numeric' });
    }),
    datasets: [
      {
        label: 'Nouveaux Utilisateurs',
        data: sortedMonths.map(month => usersByMonth[month]),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Croissance des Utilisateurs par Mois',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Nombre d\'utilisateurs'
        }
      },
      x: {
        title: {
            display: true,
            text: 'Mois'
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="h-64"> {/* Ensure this div has a defined height for the chart to render correctly */}
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default UsersByMonthChart;
