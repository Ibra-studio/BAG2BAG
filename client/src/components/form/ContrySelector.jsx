import React, { useEffect, useState } from "react";

function CreateAnnonce() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  // Charger les pays au montage du composant
  let { data, error } = await supabase
  .from('countries')
  .select('name')
  if(data) {
    console.log(data)
    setCountries(data.countries)
  }
  // Quand un pays est sélectionné, charger ses villes
  let { data: cityData, error : errorcityData } = await supabase
  .from('cities')
  .select('name')
  return (
    <form>
      {/* Sélecteur pays */}
      <label>Pays de départ</label>
      <select
        onChange={(e) => {
          const country = countries.find(
            (c) => c.id === Number(e.target.value)
          );
          setSelectedCountry(country);
          setSelectedCity(null); // reset ville si pays changé
        }}
      >
        <option value="">-- Choisir un pays --</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>

      {/* Sélecteur ville, visible seulement si un pays est choisi */}
      {selectedCountry && (
        <>
          <label>Ville / Région</label>
          <select
            onChange={(e) =>
              setSelectedCity(
                cities.find((c) => c.id === Number(e.target.value))
              )
            }
            value={selectedCity ? selectedCity.id : ""}
          >
            <option value="">-- Choisir une ville --</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {selectedCountry.name} - {city.name}
              </option>
            ))}
          </select>
        </>
      )}
    </form>
  );
}
