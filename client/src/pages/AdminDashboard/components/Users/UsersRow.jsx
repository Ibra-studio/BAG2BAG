import Badge from "../ui/Badge";
import { Search, Edit, Trash2 } from "lucide-react";
import defaultUser from "@/assets/images/default-user.png";
import { deleteUser } from "@/services/apiUsers";
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

export default function UserRow({ user, checked, onCheck }) {
  function handleRemoveUsers() {
    const confirm = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible."
    );
    if (confirm) {
      deleteUser(user.id)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la suppression de l'utilisateur :",
            error
          );
        });
    }
  }

  return (
    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">
        {" "}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(user.id)}
        />
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-15 rounded-full ">
            <img
              alt="Profile picture"
              className="rounded-full w-full h-full object-cover"
              src={user.photo_profil ? user.photo_profil : defaultUser}
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {user.prenom} {user.nom}
            </p>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-900">{user.email}</td>
      <td className="py-4 px-4 text-gray-900">{user.numero_tel}</td>
      <td className="py-4 px-4">
        <Badge className={getStatusColor(user.status)}>{user.role_user}</Badge>
      </td>

      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 size-sm"
            onClick={handleRemoveUsers}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
