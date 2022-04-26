const {getAllCountries, selectCountry} = require('../modules/countries.js');

// Read All : Get
const getCountries = (req, res) => {
  getAllCountries()
  .then(countries => {
    res.json(countries)
  })
  .catch(e=>{
    res.json({message:e.message})
  })
};

const getCountry = (req, res) => {
    const id = req.params.id;
    selectCountry(id)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json({message: err.message})
    })
};



module.exports = {
  getCountries,
  getCountry
};