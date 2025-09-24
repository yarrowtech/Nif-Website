import React, { useState } from "react";

// Import all 57 images (adjust paths as per your assets folder)
import gallery1 from "../assets/Gallery/gallery1.jpg";
import gallery2 from "../assets/Gallery/gallery2.jpg";
import gallery3 from "../assets/Gallery/gallery3.jpg";
import gallery4 from "../assets/Gallery/gallery4.jpg";
import gallery5 from "../assets/Gallery/gallery5.jpg";
import gallery6 from "../assets/Gallery/gallery6.jpg";
import gallery7 from "../assets/Gallery/gallery7.jpg";
import gallery8 from "../assets/Gallery/gallery8.jpg";
import gallery9 from "../assets/Gallery/gallery9.jpg";
import gallery10 from "../assets/Gallery/gallery10.jpg";
import gallery11 from "../assets/Gallery/gallery11.jpg";
import gallery12 from "../assets/Gallery/gallery12.jpg";
import gallery13 from "../assets/Gallery/gallery13.jpg";
import gallery14 from "../assets/Gallery/gallery14.jpg";
import gallery15 from "../assets/Gallery/gallery15.jpg";
import gallery16 from "../assets/Gallery/gallery16.jpg";
import gallery17 from "../assets/Gallery/gallery17.jpg";
import gallery18 from "../assets/Gallery/gallery18.jpg";
import gallery19 from "../assets/Gallery/gallery19.jpg";
import gallery20 from "../assets/Gallery/gallery20.jpg";
import gallery21 from "../assets/Gallery/gallery21.jpg";
import gallery22 from "../assets/Gallery/gallery22.jpg";
import gallery23 from "../assets/Gallery/gallery23.jpg";
import gallery24 from "../assets/Gallery/gallery24.jpg";
import gallery25 from "../assets/Gallery/gallery25.jpg";
import gallery26 from "../assets/Gallery/gallery26.jpg";
import gallery27 from "../assets/Gallery/gallery27.jpg";
import gallery28 from "../assets/Gallery/gallery28.jpg";
import gallery29 from "../assets/Gallery/gallery29.jpg";
import gallery30 from "../assets/Gallery/gallery30.jpg";
import gallery31 from "../assets/Gallery/gallery31.jpg";
import gallery32 from "../assets/Gallery/gallery32.jpg";
import gallery33 from "../assets/Gallery/gallery33.jpg";
import gallery34 from "../assets/Gallery/gallery34.jpg";
import gallery35 from "../assets/Gallery/gallery35.jpg";
import gallery36 from "../assets/Gallery/gallery36.jpg";
import gallery37 from "../assets/Gallery/gallery37.jpg";
import gallery38 from "../assets/Gallery/gallery38.jpg";
import gallery39 from "../assets/Gallery/gallery39.jpg";
import gallery40 from "../assets/Gallery/gallery40.jpg";
import gallery41 from "../assets/Gallery/gallery41.jpg";
import gallery42 from "../assets/Gallery/gallery42.jpg";
import gallery43 from "../assets/Gallery/gallery43.jpg";
import gallery44 from "../assets/Gallery/gallery44.jpg";
import gallery45 from "../assets/Gallery/gallery45.jpg";
import gallery46 from "../assets/Gallery/gallery46.jpg";
import gallery47 from "../assets/Gallery/gallery47.jpg";
import gallery48 from "../assets/Gallery/gallery48.jpg";
import gallery49 from "../assets/Gallery/gallery49.jpg";
import gallery50 from "../assets/Gallery/gallery50.jpg";
import gallery51 from "../assets/Gallery/gallery51.jpg";
import gallery52 from "../assets/Gallery/gallery52.jpg";
import gallery53 from "../assets/Gallery/gallery53.jpg";
import gallery54 from "../assets/Gallery/gallery54.jpg";
import gallery55 from "../assets/Gallery/gallery55.jpg";
import gallery56 from "../assets/Gallery/gallery56.jpg";
import gallery57 from "../assets/Gallery/gallery57.jpg";





const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
    gallery32,
    gallery33,
    gallery34,
    gallery35,
    gallery36,
    gallery37,
    gallery38,
    gallery39,
    gallery40,
    gallery41,
    gallery42,
    gallery43,
    gallery44,
    gallery45,
    gallery46,
    gallery47,
    gallery48,
    gallery49,
    gallery50,
    gallery51,
    gallery52,
    gallery53,
    gallery54,
    gallery55,
    gallery56,
    gallery57,
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = showAll ? images : images.slice(0, 45);

  // Open modal with selected image
  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  // Close modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Next / Previous handlers
  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-52 bg-black flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
      </div>

      {/* Gallery Grid (column-wise layout) */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {visibleImages.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openImage(idx)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Load More button */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-[#ff4f45] text-white font-semibold rounded-md shadow hover:bg-[#e43d33] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

    {/* Modal for Fullscreen Image */}
{selectedImage && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
    {/* Close Button */}
    <button
      onClick={closeImage}
      className="absolute top-6 right-6 text-white text-3xl font-bold"
    >
      ✕
    </button>

    {/* Image Container with buttons closer */}
    <div className="relative flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={showPrev}
        className="absolute left-[-60px] text-white text-4xl px-3 py-2 rounded-full bg-black/40 hover:bg-black/70"
      >
        ‹
      </button>

      {/* Full Image */}
      <img
        src={selectedImage}
        alt="Full view"
        className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-lg"
      />

      {/* Right Button */}
      <button
        onClick={showNext}
        className="absolute right-[-60px] text-white text-4xl px-3 py-2 rounded-full bg-black/40 hover:bg-black/70"
      >
        ›
      </button>
    </div>
  </div>
)}

    </div>
  );
}