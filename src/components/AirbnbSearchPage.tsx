import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const AirbnbSearchPage = () => {
  const [address, setAddress] = useState('France');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 absolute top-8 rounded-3xl">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        {/* Titre */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          France : locations de vacances en chambre d'hôtes
        </h2>
        
        <p className="text-gray-600 mb-8 ">
          Trouvez et réservez des chambres d'hôtes uniques en location sur Airbnb
        </p>

        {/* Formulaire */}
        <div className="space-y-4">
          {/* Champ Adresse */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Adresse
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="France"
            />
          </div>

          {/* Champs Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Arrivée
              </label>
              <input
                type="text"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Quand ?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Départ
              </label>
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Quand ?"
              />
            </div>
          </div>

          {/* Bouton Rechercher */}
          <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md">
            <FaSearch className="w-5 h-5" />
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirbnbSearchPage;