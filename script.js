const cases = document.querySelector('.cases');

fetch('https://disease.sh/v3/covid-19/all')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const casesToday = data.cases;
    cases.innerHTML = casesToday;
  });
