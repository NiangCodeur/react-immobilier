import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import backgroundImage from '../assets/bg.avif';

const AirbnbSearchPage = () => {
  const [address, setAddress] = useState('France');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');

  return (
    <section className='container mx-auto px-4 py-8 max-w-7xl'>
      <div className='relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-0 '>
        {/* Formulaire - s'affiche en bas sur mobile, à gauche sur desktop */}
        <div className="relative my-20 z-10 bg-white rounded-2xl shadow-2xl w-full lg:w-[400px] xl:w-[440px] p-6 sm:p-8 order-2 lg:order-1 flex-shrink-0">
          {/* Titre */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            France : locations de vacances en chambre d'hôtes
          </h1>
          
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Trouvez et réservez des chambres d'hôtes uniques en location sur Airbnb
          </p>

          {/* Formulaire */}
          <div className="space-y-4">
            {/* Champ Adresse */}
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                placeholder="France"
              />
            </div>

            {/* Champs Date - Côte à côte */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Arrivée
                </label>
                <input
                  type="text"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                  placeholder="Quand ?"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Départ
                </label>
                <input
                  type="text"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                  placeholder="Quand ?"
                />
              </div>
            </div>

            {/* Bouton Rechercher */}
            <button className="w-full bg-gradient-to-r from-[#E61E4D] to-[#E31C5F] hover:from-[#D70466] hover:to-[#BD1E59] text-white font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-5">
              <FaSearch className="w-4 h-4" />
              Rechercher
            </button>
          </div>
        </div>

        {/* Image de fond - s'affiche en haut sur mobile, à droite sur desktop */}
        <div className="w-full order-1 lg:order-2 flex-1 lg:-ml-8 ">
          <img 
            src={backgroundImage} 
            alt="Street view in France" 
            className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[600px] xl:min-h-[650px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AirbnbSearchPage;