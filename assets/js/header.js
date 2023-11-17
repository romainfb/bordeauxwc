document.addEventListener('DOMContentLoaded', function () {
    var headerHTML = `
      <header class="bg-[#181823] shadow-lg">
        <div class="container mx-auto px-8 py-8 flex justify-center scale-110"> <!-- Agrandissement du conteneur -->
          <nav>
            <ul class="flex space-x-6"> <!-- Agrandissement de l'espace entre les éléments -->
              <li>
                <a href="C:/dev/Wcbordeaux/bordeauxwc/index.html" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Data</a> <!-- Texte plus grand et padding augmenté -->
              </li>
              <li>
                <a href="C:/dev/Wcbordeaux/bordeauxwc/assets/html/informations.html" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Information</a>
              </li>
              <li>
                <a href="#autre" class="text-xl px-5 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">Autre</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  });