/* 
* Get Open Data from Bordeaux Metropole
* @function getWCOpenData
* @autor : Romain
* @return {json} data
* @see https://opendata.bordeaux-metropole.fr/explore/dataset/bor_sigsanitaire/information/
*/

function getWCOpenData(){

    fetch('https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_sigsanitaire/records')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
             response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });

}

/* 
* Get Open Data amout by type from Bordeaux Metropole
* @function getWCDataTypeAmount
* @param {string} type
* @autor : Romain
* @return {integer} data.total_count
* @see https://opendata.bordeaux-metropole.fr/explore/dataset/bor_sigsanitaire/information/
*/

async function getWCDataTypeAmount(type) {
    let urlToFetch = 'https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_sigsanitaire/records?select="total_count"&refine=type%3A"' + type + '"';

    try {
        let response = await fetch(urlToFetch);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        return data["total_count"];
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

/* 
* Fetch data and manage fetch status
* @function fetchData
* @autor : Romain
*/

async function fetchData() {
    try {

        let urinalData = await getWCDataTypeAmount("URINOIR");
        let wCDataTypeAmount = await getWCDataTypeAmount("SANITAIRE_AUTOMATIQUE");
        let cottageData = await getWCDataTypeAmount("CHALET_DE_NECESSITE");

        let totalData = urinalData + wCDataTypeAmount + cottageData;

        updateCounter("urinalData", urinalData);
        updateCounter("wcAutoData", wCDataTypeAmount);
        updateCounter("cottageData", cottageData);
        updateCounter("totalData", totalData);

    } catch (error) {
        console.error('There was an error fetching data:', error);
    }
}

fetchData();

/* 
* Print data in HTML
* @function updateCounter
* @param {string} elementId
* @param {integer} finalAmount
* @autor : Romain
*/

async function updateCounter(elementId, finalAmount) {
    const element = document.getElementById(elementId);
    const duration = 2000; // 2 secondes
    const interval = 50; // 50 millisecondes
    const iterations = duration / interval;
    const increment = finalAmount / iterations;

    let currentAmount = 0;

    const counterInterval = setInterval(() => {
        currentAmount += increment;
        element.innerHTML = Math.round(currentAmount);

        if (currentAmount >= finalAmount) {
            clearInterval(counterInterval);
        }
    }, interval);
}