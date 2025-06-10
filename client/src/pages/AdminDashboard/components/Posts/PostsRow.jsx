import Badge from "../ui/badge";

import { Search, Edit, Trash2, MapPin, Calendar } from "lucide-react";
export default function PostRow({ post }) {
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

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">check</td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={post.image}
            alt={post.title}
            className="h-12 w-12 rounded-lg object-cover bg-gray-100"
          />
          <div>
            <p className="font-medium text-gray-900">{post.title}</p>
            <p className="text-sm text-gray-500">ID: {post.id}</p>
            <p className="text-xs text-gray-400 mt-1">{post.description}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          avatar
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
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-gray-900">{post.departure}</span>
          </div>
          <span className="text-gray-400">→</span>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4 text-green-600" />
            <span className="text-gray-900">{post.destination}</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 font-medium text-gray-900">{post.price}</td>
      <td className="py-4 px-4">
        <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-1 text-gray-900">
          <Calendar className="h-4 w-4 text-gray-400" />
          {post.date}
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 p-0 size-sm ">
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
