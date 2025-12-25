import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaAward } from 'react-icons/fa';
import { allRooms } from '../lib/data';
import TitleSection from '../title/Title';

export default function PremierSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(allRooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const chambres = allRooms.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  return (
    //<div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="py-50 sm:py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <TitleSection
          titre="France : chambres d'hôtes en location les mieux notées"
          description="Les voyageurs approuvent ! Ces chambres d'hôtes en location sont très bien notées pour leur emplacement, leur propreté et bien plus encore."
        />

        {/* control button slider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <span className="text-sm font-medium">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* chambres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chambres.map((chambre) => (
            <div
              key={chambre.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src={chambre.image}
                  alt={chambre.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {chambre.badge && (
                  <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                    <FaAward className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium">Coup de cœur voyageurs</span>
                  </div>
                )}
              </div>

              {/* chambre Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{chambre.type}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">★</span>
                    <span className="text-sm font-medium">
                      {chambre.rating} ({chambre.avis})
                    </span>
                  </div>
                </div>
                <h3 className="text-sm text-gray-900 font-medium line-clamp-1">
                  {chambre.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {chambre.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
