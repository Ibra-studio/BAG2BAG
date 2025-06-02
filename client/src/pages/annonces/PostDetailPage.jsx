import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import supabase from "../../services/supabaseClient";
import Avatar from "../../components/ui/Avatar";
import { ReactComponent as Plane } from "../../assets/icons/AvionIcon.svg";
import BtnPrimary from "../../components/ui/Btnprim";
// @ts-ignore
import BtnSecondary from "@/components/ui/Btnsec";
// @ts-ignore
import defaultUser from "@/assets/images/default-user.png";
function PostDetailPage() {
  const idPost = useParams();
  console.log(idPost.id);
  const navigate = useNavigate();
  const [post, setPost] = useState([
    // Example initial structure for type inference
    // Remove this object if you want to start with an empty array, but keep the type annotation
    {
      users: {
        id: "",
        nom: "",
        prenom: "",
        photo_profil: "",
        isVerified: false,
        profession: "",
      },
      dateDepart: "",
      paysDepart: "",
      paysArrivee: "",
      description: "",
    },
  ]);
  const [isloading, setIsLoading] = useState(false);
  const numero = "+2120675035830"; // Numéro du fournisseur
  const message =
    "J'ai vu votre annonce sur Bag2Bag, vous avez toujours des kilos disponibles ?";
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${numero}?text=${encodedMessage}`;
  useEffect(() => {
    async function GetPostInfo() {
      setIsLoading(true);
      let { data, error } = await supabase
        .from("posts")
        .select(
          "* , users (id, nom , prenom , photo_profil ,isVerified , profession )"
        )
        .eq("id", idPost.id);
      if (data) {
        console.log("voici le post ->", data);
        setPost(data);

        setIsLoading(false);
      }
      if (error) {
        console.log(error);
      }
    }
    GetPostInfo();
  }, []);

  return (
    <div className="2xl:mx-[150px] xl:mx-[50px]  md:mx-[40px]  sm:mx-[20px] pt-[50px]">
      {isloading && (
        <div className="w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      {!isloading && post[0] && (
        <>
          <div className="px-3 flex flex-col gap-5 mb-4">
            <div onClick={() => navigate(-1)}>
              <BtnSecondary>Retournez à la recherche de post</BtnSecondary>
            </div>
            <h2 className=" md:text-[55px] sm:text-[45px] text-[30px] ">
              {new Date(post[0].dateDepart).toLocaleDateString("fr-FR", {
                weekday: "long",
              })}{" "}
              ,{post[0].dateDepart.slice(0, 10)}
            </h2>
          </div>
          <div className="grid lg:grid-cols-[2fr_1fr]  sm:gap-12  sm:grid-rows-[2fr_1fr] gap-12 grid-rows-[1fr_1fr] grid-cols-1 px-3">
            <div className="flex flex-col gap-12 ">
              <div className=" bg-white p-5 rounded-[30px] ">
                <div className="flex flex-row  gap-4 ">
                  <div className="flex flex-col  items-center  gap-0">
                    <div className="rounded-[50%] border-[2px] border-black w-[15px] h-[15px] "></div>
                    <div className="w-[2px]  h-[100px] bg-black  relative">
                      <Plane className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                    </div>

                    <div className="rounded-[100%] border-[2px] border-black w-[15px] h-[15px] "></div>
                  </div>
                  <div className="flex flex-col  justify-between items-center gap-[15px] ">
                    <p className="text-[16px]"> {post[0].paysDepart}</p>
                    <p className="text-[16px]"> {post[0].paysArrivee}</p>
                  </div>
                </div>
              </div>

              <div className="flex  flex-col gap-10 bg-white p-5 rounded-[30px]">
                <div className="flex flex-row  gap-5">
                  <Avatar isVerified={post[0].users.isVerified}>
                    <img
                      src={
                        post[0].users.photo_profil
                          ? post[0].users.photo_profil
                          : defaultUser
                      }
                    />
                  </Avatar>
                  <div className="flex flex-col gap-[1px]">
                    <p>{post[0].users.prenom + " " + post[0].users.nom}</p>
                    <p className="text-secondary">{post[0].users.profession}</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <p>
                    {post[0].users.isVerified
                      ? " profil verifié"
                      : "profil non verifié"}
                  </p>
                  <p>{post[0].description}</p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <BtnPrimary>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    Contacter sur WhatsApp
                  </BtnPrimary>
                </a>
              </div>
            </div>
            <div className="bg-[#FDB700] p-5 flex  flex-col gap-4 items-center justify-center rounded-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h2 className="text-center text-[25px]">
                {" "}
                Avant de contacter un transporteur essayer de choisir un
                transporteur verifié garder en tête que{" "}
                <u>
                  {" "}
                  bag2bag n'est qu'une plateforme de mise en relation nous ne
                  connaissons pas les transporteurs{" "}
                </u>
                donc prenez vos precautions
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostDetailPage;
