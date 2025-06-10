import Badge from "../ui/badge";
import { Search, Edit, Trash2 } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "Vérifié":
      return "bg-green-100 text-green-800";
    case "Non Vérifié":
      return "bg-red-100 text-red-800";
    case "En Attente":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function UserRow({ user }) {
  return (
    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">check</td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          avatar
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-900">{user.email}</td>
      <td className="py-4 px-4 text-gray-900">{user.phone}</td>
      <td className="py-4 px-4">
        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
      </td>
      <td className="py-4 px-4 text-gray-900">{user.inscription}</td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 p-0 size-sm">
            <Search className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 p-0 size-sm">
            <Edit className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 p-0 text-red-600 hover:text-red-700 size-sm">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
