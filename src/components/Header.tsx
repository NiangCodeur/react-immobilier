import AirbnbSearchPage from './AirbnbSearchPage';
import airbnbLogo from '../assets/logo.png';
 import bg from '../assets/bg.avif';

export default function Header() {
  return (
    <>
    <header>
      <div className="container py-4 flex justify-between items-center">
        <img src={airbnbLogo} alt="Logo" />
        <div className="text-sm sm:text-base font-medium
         text-gray-800">Mettre mon logement sur Airbnb</div>
      </div>
    </header>
    {/* HERO SECTION PRINCIPALE */}
    {/* <section className="container py-4 flex justify-between items-center sm:reverse-row ">
                  {/* Carte blanche contenant le formulaire de recherche */}
                    <AirbnbSearchPage />
                  {/* ------------------ image de fond ------------------ *
                  <img src={bg} alt="Background" className="w-240 h-auto rounded-2xl" />
    </section> */}
    </>
  )
}
