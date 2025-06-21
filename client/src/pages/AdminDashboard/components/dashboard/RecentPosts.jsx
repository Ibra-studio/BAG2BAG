import { useEffect, useState } from "react";
import { getPosts } from "@/services/apiPosts";
const colorPost = [
  {
    color: "border-l-blue-500",
  },
  {
    color: "border-l-green-500",
  },
  {
    color: "border-l-purple-500",
  },
];
export default function RecentPosts() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const data = await getPosts();

        setPosts(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);
  const recentPosts = [...posts]
    .sort((a, b) => a.created_at - b.created_at)
    .slice(0, 3);
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">Derniers Posts</h4>
      </div>
      <div className="space-y-4 pt-6">
        {recentPosts.map((post) => (
          <div key={post.id} className={`border-l-4 ${colorPost.color} pl-4`}>
            <p className="text-[25px] font-medium text-gray-900">
              {post.paysDepart} {"->"} {post.paysArrivee}
            </p>{" "}
            <p className="text-sm text-gray-600">
              Par {post.users.prenom} • {post.users.nom}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
