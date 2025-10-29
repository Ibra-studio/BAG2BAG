import Badge from "../ui/Badge";
import { deletePost } from "@/services/apiPosts";
import { Search, Edit, Trash2, MapPin, Calendar } from "lucide-react";
import defaultUser from "@/assets/images/default-user.png";
export default function PostRow({ post, checked, onCheck }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800";
      case "Signalé":
        return "bg-red-100 text-red-800";
      case "En Attente":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  function handleRemovePost() {
    const confirm = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est irréversible."
    );
    if (confirm) {
      try {
        deletePost(post.id);
        window.location.reload();
      } catch (error) {
        console.error("Erreur lors de la suppression de l'annonce :", error);
      }
    }
  }

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(post.id)}
        />
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-gray-900">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-lg">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-900">{post.paysDepart}</span>
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex items-center gap-1 text-lg">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-gray-900">{post.paysArrivee}</span>
                </div>
              </div>
            </p>

            <p className="text-xs text-gray-400 mt-1">{post.description}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-15 rounded-full ">
            <img
              alt="Profile picture"
              className="rounded-full w-full h-full object-cover"
              src={
                post.users.photo_profil ? post.users.photo_profil : defaultUser
              }
            />
          </div>
          {/* <Avatar className="h-8 w-8">
            <AvatarImage src={post.authorAvatar} />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar> */}
          <span className="text-gray-900">{post.author}</span>
        </div>
      </td>

      <td className="py-4 px-4 font-medium text-gray-900">
        {post.prixParKilo}
      </td>
      <td className="py-4 px-4">
        <Badge className={getStatusColor(post.status)}>
          {post.nombreKiloDispo}
        </Badge>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-1 text-gray-900">
          <Calendar className="h-4 w-4 text-gray-400" />
          {post.dateDepart.slice(0, 10)}
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 size-sm"
            onClick={handleRemovePost}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
