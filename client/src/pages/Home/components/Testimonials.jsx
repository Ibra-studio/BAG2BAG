import React from "react";
import "@/assets/global.css";
// @ts-ignore
import Avatar from "@/components/ui/Avatar";
export default function Testimonials() {
  return (
    <section className="flex flex-col pt-[100px] items-center justify-center relative testimonials-section mb-[100px]">
      <h2 className="md:text-[55px] sm:text-[45px] text-[30px] text-center">
        Découvrez ce que les <br />
        <span className="bg-green px-2">étudiants etrangers</span> <br />
        au maroc disent de nous
      </h2>
      <div className="absolute w-[400px] h-[200px] bg-[#368f8b] rounded-[100%] blur-[200px] z-[-1] top-[300px] left-[200px] hidden lg:!block"></div>
      {/* 3xl > testimonials */}
      <div className="hidden grid-cols-[0.5fr_1.5fr_0.5fr] max-w-[2200px] gap-[50px] 3xl:!grid  px-[150px] pt-[50px] ">
        <div className="left-grid grid grid-cols-[360px] gap-[50px] auto-rows-min">
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "J’ai transporté deux colis pour des Togolais qui m’ont bien
              remercié. On devrait tous utiliser Bag2Bag au lieu de laisser nos
              valises à moitié vides."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> George </h5>
                <p className="text-[15px]"> SG TOGO kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Les transporteurs classiques prennent des semaines. Bag2Bag m’a
              permis de recevoir mes colis du Cameroun en moins d’une semaine.
              C’est fluide et rassurant."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Lumière </h5>
                <p className="text-[15px]"> SG Congo brazza Rabat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="central-grid grid grid-rows-[2fr_auto_1px_auto_5px] grid-cols-[1fr_1fr] gap-[50px] ">
          <div className="testimonials flex flex-col justify-between bg-white p-[50px] rounded-[30px] shadow-lg gap-[10px] col-span-2 border-black border-1">
            <h2 className="text-[40px] text-center text-secondary">
              “J’ai utilisé Bag2Bag pour envoyer un colis à ma famille au pays.
              Le processus a été simple, rapide et sans stress. On se sent en
              confiance du début à la fin, et surtout, on a l’impression d’aider
              et d’être aidé. C’est vraiment un service pensé pour nous, par
              nous.”
            </h2>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center justify-center ">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Alidji </h5>
                <p className="text-[15px]"> SG MALI kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] justify-between row-span-2 rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[25px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] row-span-2 rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "J’ai envoyé un colis à ma grand-mère au Gabon grâce à une
              étudiante. C’était simple, rapide, et beaucoup moins cher que
              DHL."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Anicet </h5>
                <p className="text-[15px]"> SG Gabon Mèknes</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] row-span-2 rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-grid grid grid-cols-[360px] gap-[50px]   auto-rows-min">
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[20px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3xl <  testimonials */}
      <div className="grid-cols-[1fr] max-w-[1000px] gap-[50px] px-[15px] pt-[50px] md:max-3xl:!grid hidden">
        <div className="central-grid grid  grid-cols-[1fr_1fr] gap-[50px] ">
          <div className="testimonials flex flex-col justify-between bg-white p-[50px] rounded-[30px] shadow-lg gap-[10px] col-span-2 border-black border-1">
            <h2 className="text-[40px] text-center text-secondary">
              “Integer id nunc sit semper purus. Bibendum at lacus ut arcu
              blandit montes vitae auctor libero. Hac condimentum dignissim nibh
              vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et
              proin. Non hendrerit in vel ac diam.”
            </h2>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center justify-center ">
              <Avatar>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </Avatar>
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="left-grid grid grid-cols-[1fr] gap-[50px] auto-rows-min">
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
                <Avatar>
                  i
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </Avatar>
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-grid grid grid-cols-[1fr] gap-[50px]   auto-rows-min">
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
              <p className="text-[20px] text-center text-secondary">
                "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
                fortune. Maintenant, je trouve toujours un étudiant qui rentre.
                C’est rapide, humain et moins cher."
              </p>
              <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h5 className="text-[20px]"> Amadou </h5>
                  <p className="text-[15px]"> SG GUINÉE kenitra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile testimonials */}
      <div className="grid-cols-[1fr] grid-rowa-[2fr_auto]  gap-[50px] px-[15px] pt-[50px]  md:hidden">
        <div className="central-grid grid  grid-cols-[1fr] gap-[50px] ">
          <div className="testimonials flex flex-col justify-between bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <h2 className="text-[20px] text-center ">
              “Integer id nunc sit semper purus. Bibendum at lacus ut arcu
              blandit montes vitae auctor libero. Hac condimentum dignissim
              nibhgit vulputate ut nunc. Amet nibh orci mi venenatis blandit vel
              vouerbuibreb et proin. Non hendrerit in vel ac diam.”
            </h2>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center justify-center ">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              J’ai transporté deux colis pour des Togolais qui m’ont bien
              remercié. On devrait tous utiliser Bag2Bag au lieu de laisser nos
              valises à moitié vides."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG TOGO kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] col-start-1 shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] 5 p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
          <div className="testimonials flex flex-col bg-white p-[20px] rounded-[30px] shadow-lg gap-[10px] border-black border-1">
            <p className="text-[18px] text-center text-secondary">
              "Avant Bag2Bag, envoyer un simple colis à Dakar coûtait une
              fortune. Maintenant, je trouve toujours un étudiant qui rentre.
              C’est rapide, humain et moins cher."
            </p>
            <div className="border-t-1 border-{#00000080] flex flex-row gap-[10px] p-[10px] items-center">
              <Avatar />
              <div className="flex flex-col">
                <h5 className="text-[20px]"> Amadou </h5>
                <p className="text-[15px]"> SG GUINÉE kenitra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[400px] h-[200px] bg-[#368f8b] rounded-[100%] blur-[200px]  z-[-1] bottom-[300px] right-[400px] hidden lg:!block"></div>
    </section>
  );
}
