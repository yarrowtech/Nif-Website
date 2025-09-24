// src/pages/SuccessStories.jsx
import React from "react";

import aishee from "../assets/SuccessStories/nif_placement_AisheeSikder.jpg";
import ankita from "../assets/SuccessStories/nif_placement_AnjitaAdak.jpg";
import ausmita from "../assets/SuccessStories/nif_placement_AusnitaBhar.jpg";
import ayesha from "../assets/SuccessStories/nif_placement_AyeshaParveen.jpg";
import faiza from "../assets/SuccessStories/nif_placement_FaizaJawed.jpg";
import hriday from "../assets/SuccessStories/nif_placement_HridoyGhosh.jpg";
import oindrilla from "../assets/SuccessStories/nif_placement_OindeillaChatterjee.jpg";
import omshree from "../assets/SuccessStories/nif_placement_OmShreePatel.jpg";
import sharmin from "../assets/SuccessStories/nif_placement_SharminAshraf.jpg";
import vanlarokima from "../assets/SuccessStories/nif_placement_VanlarokimaAchi.jpg";

import devoir from "../assets/SuccessStories/placement_brands_decofur.jpg";
import sl from "../assets/SuccessStories/placement_brands_nanditathirani.jpg";
import aa from "../assets/SuccessStories/placement_brands_skkarma.jpg";
import kds from "../assets/SuccessStories/placement_brands_kds.jpg";
import skipper from "../assets/SuccessStories/placement_brands_skipper.jpg";
import di from "../assets/SuccessStories/placement_brands_charcholdesign.jpg";
import homelane from "../assets/SuccessStories/placement_brands_homelane.jpg";
import manyavar from "../assets/SuccessStories/placement_brands_manyavar.jpg";
import decofur from "../assets/SuccessStories/placement_brands_decofur.jpg";
import raphaaa from "../assets/SuccessStories/placement_brands_rapahaa.jpg";

const STUDENTS = [
  { name: "Aishee Sikder", photo: aishee, companyLogo: devoir },
  { name: "ANKITA ADAK", photo: ankita, companyLogo: sl },
  { name: "AUSMITA BHAR", photo: ausmita, companyLogo: aa },
  { name: "Ayesha Parveen", photo: ayesha, companyLogo: kds },
  { name: "FAIZA JAWED", photo: faiza, companyLogo: skipper },
  { name: "Hriday Ghosh", photo: hriday, companyLogo: di },
  { name: "OINDRILLA CHATTERJEE", photo: oindrilla, companyLogo: homelane },
  { name: "Om Shree Patel", photo: omshree, companyLogo: manyavar },
  { name: "Sharmin Ashraf", photo: sharmin, companyLogo: decofur },
  { name: "VANLAROKIMA ACHI", photo: vanlarokima, companyLogo: raphaaa },
];

export default function SuccessStories() {
  return (
    <div className="font-poppins text-gray-900">
      {/* ===== Hero ===== */}
      <header className="relative">
        <div className="h-[220px] md:h-[260px] w-full bg-[url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
          <div className="h-full w-full bg-black/60 flex items-end md:items-center justify-center">
            <h1 className="text-white text-[36px] md:text-[56px] font-extrabold tracking-tight drop-shadow-md md:drop-shadow-lg pb-6 md:pb-0">
              Success Stories
            </h1>
          </div>
        </div>
      </header>

      {/* ===== Grid ===== */}
      <main className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div
          className="
            grid gap-x-4 gap-y-10
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5
          "
        >
          {STUDENTS.map((s, idx) => (
          <article
  key={idx}
  className="
    bg-[#f3f4f6] border border-gray-200
    rounded-md
    shadow-[0_1px_2px_rgba(0,0,0,0.08)]
    overflow-hidden
    flex flex-col
  "
>
  {/* Photo inside a box */}
  <div className="aspect-[4/5] bg-white flex items-center justify-center">
    <div className="w-[90%] h-[85%] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
      <img
        src={s.photo}
        alt={s.name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Name */}
  <div className="px-4 pt-3">
    <p className="text-[13px] md:text-[15px] font-semibold tracking-wide uppercase text-center whitespace-normal break-words">
      {s.name}
    </p>
  </div>

  {/* Company Logo block */}
  <div className="px-4 pb-4 mt-auto">
    <div className="mt-3 bg-white border border-gray-200 h-[50px] w-[100px]  md:h-[50px]  flex flex-col items-center justify-center">
      <img
        src={s.companyLogo}
        alt={`${s.name} company`}
        className="max-h-[50px] md:max-h-[60px] max-w-[150%] object-cover md:ml-23 "
      />
    </div>
  </div>
</article>

          ))}
        </div>
      </main>
    </div>
  );
}
