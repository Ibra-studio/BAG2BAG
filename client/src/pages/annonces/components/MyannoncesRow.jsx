import React from "react";
import { Search, Edit, Trash2, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import supabase from "@/services/supabaseClient";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function MyannoncesRow({ post }) {
  const navigate = useNavigate();
  const id = useParams();

  async function handleDelete() {
    const confirmation = confirm(
      "Êtes-vous sûr de vouloir supprimer cette annonce ?"
    );
    if (confirmation) {
      const { error } = await supabase.from("posts").delete().eq("id", post.id);
      if (error) {
        showErrorToast("Erreur lors de la suppression de l'annonce.");
      } else {
        showSuccessToast("Annonce supprimée avec succès.");
        location.reload();
      }
    }
  }

  return (
    <tr>
      <td className="py-8 px-4 border-b-1 border-gray-300">
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
      </td>
      <td className="py-8 px-4 border-b-1 border-gray-300">
        <div className="flex items-center gap-1 text-lg">
          <span>{post.dateDepart?.slice(0, 10)}</span>
        </div>
      </td>
      <td className="py-8 px-4 border-b-1 border-gray-300 flex justify-end">
        <div className="flex items-center gap-2">
          <Link
            to={`/app/myannonces/edit/${post.id}`}
            className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 size-sm"
          >
            <button className="h-8 w-8 p-0 size-sm">
              <Edit className="h-4 w-4" />
            </button>
          </Link>
          <button
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 size-sm"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MyannoncesRow;
