document.addEventListener('DOMContentLoaded', function () {

  var headerHTML = `
      <div class="w-full bg-[#181823] h-fit shadow-lg  px-8 py-8 flex justify-center"> <!-- Agrandissement du conteneur -->
        <nav>
          <ul class="flex space-x-6"> <!-- Agrandissement de l'espace entre les éléments -->
            <li>
              <a href="#data" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Data</a> <!-- Texte plus grand et padding augmenté -->
            </li>
            <li>
              <a href="#information" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Information</a>
            </li>
            <li>
              <a href="#autre" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Autre</a>
            </li>
          </ul>
        </nav>
      </div>`;

  // Trouver la div avec l'id mainContainer
  var mainContainer = document.getElementById('mainContainer');

  // Insérer le code HTML dans la div mainContainer
  if (mainContainer) {
      mainContainer.insertAdjacentHTML('afterbegin', headerHTML);
  } else {
      console.error("La div avec l'id mainContainer n'a pas été trouvée.");
  }
});
