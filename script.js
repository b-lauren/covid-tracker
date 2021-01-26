fetch('https://disease.sh/v3/covid-19/countries')
  .then(res => res.json())
  .then(data => console.log(data))
