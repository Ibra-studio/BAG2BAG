import React from "react";
import "@/assets/global.css";
function Painsection() {
  return (
    <div className=" w-full bg-[#368f8b] mx-auto px-[15px] py-16 md:py-40 text-center  mt-[100px]">
      <h2 className="text-white   md:text-[55px] sm:text-[45px]    text-[30px] intersect-once intersect:motion-preset-slide-up motion-delay-600">
        Un etudiant veut recevoir un colis du pays{" "}
      </h2>
      <p className="max-w-xl text-white mx-auto text-lg opacity-80 leading-relaxed mb-12  pt-5 md:mb-20 intersect-once  intersect:motion-preset-slide-up motion-delay-700">
        Chaque jour, des étudiants veulent recevoir des colis.
        <br className="hidden sm:!inline" /> Mais entre les prix, les délais et
        la galère… <br className="hidden sm:!inline" />
        La plupart abandonnent. Le colis ne part jamais.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 ">
        <div className="w-full md:w-50 flex flex-col gap-2 items-center justify-center intersect-once  intersect:motion-preset-slide-up motion-delay-700">
          <span className="text-5xl">📦</span>
          <p className="text-white">
            il regarde les services de livraison… <br /> Trop chers. Trop longs.
            Trop compliqués.
          </p>
        </div>
        <svg
          className="shrink-0 w-12 fill-white opacity-70 max-md:-scale-x-100 md:-rotate-90 motion-translate-x-loop-[15%] motion-translate-y-loop-[0%] motion-ease-in-out"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
            ></path>
          </g>
        </svg>
        <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center intersect-once  intersect:motion-preset-slide-up motion-delay-800">
          <span className="text-5xl">🫤</span>
          <p className="text-white">
            Il renonce. <br /> Il attend un ami, un contact, un miracle.
          </p>
        </div>
        <svg
          className="shrink-0 w-12 fill-white opacity-70 md:-scale-x-100 md:-rotate-90 motion-translate-x-loop-[15%] motion-translate-y-loop-[0%] motion-ease-in-out"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
            ></path>
          </g>
        </svg>
        <div className="w-full md:w-50 flex flex-col gap-2 items-center justify-center intersect-once  intersect:motion-preset-slide-up motion-delay-900">
          <span className="text-5xl">✈️</span>
          <p className="text-white">
            Au même moment, un autre étudiant rentre au pays… <br /> Avec 12 kg
            de bagages inutilisés.
          </p>
        </div>
      </div>
      <p className="mt-[40px] text-lg text-white">
        {" "}
        Ces deux etudiants ne se croisent jamais
      </p>
      <p className="text-white text-[20px] pt-[50px] intersect-once  intersect:motion-preset-slide-up motion-delay-700">
        Bag2Bag,
        <br /> c’est l’uberisation des envois de colis
        <br className="hidden sm:!inline" />{" "}
        <u>
          sans intermédiaires, sans frais cachés, juste des étudiants qui
          s’entraident.
        </u>
      </p>
    </div>
  );
}

export default Painsection;
