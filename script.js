const cases = document.querySelector('.cases');
const deaths = document.querySelector('.deaths');
const recovered = document.querySelector('.recovered');
const affectedCountries = document.querySelector('.affected-countries');

fetch('https://disease.sh/v3/covid-19/all')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const casesToday = data.cases;
    cases.innerHTML = casesToday;

    const death = data.deaths;
    deaths.innerHTML = death;

    const recover = data.recovered;
    recovered.innerHTML = recover;

    const affected = data.affectedCountries;
    affectedCountries.innerHTML = affected;
  });
