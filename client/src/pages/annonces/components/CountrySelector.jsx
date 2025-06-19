import React, { useEffect, useState } from "react";
import Select from "react-select";
import supabase from "../../../services/supabaseClient";
function CountrySelector({ setFullLabel, label }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const { data, error } = await supabase
        .from("countries")
        .select("id, name, flag");

      if (error) {
        console.error("Erreur chargement pays :", error.message);
        return;
      }
      const formattedData = data.map((country) => ({
        value: `${country.id}`,
        name: `${country.name}`,
        label: `${country.flag} ${country.name}`,
      }));
      setCountries(formattedData);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;

    const fetchCities = async () => {
      const { data, error } = await supabase
        .from("cities")
        .select("name")
        .eq("country_id", `${selectedCountry?.value}`);
      if (error) {
        console.error("Erreur chargement ville :", error.message);
        return;
      }
      console.log(data);
      const formattedData = data.map((city) => ({
        value: `${city.name}`,
        label: `${selectedCountry?.label} - ${city.name}`,
      }));
      console.log(formattedData);
      setCities(formattedData);
    };

    fetchCities();
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      setFullLabel(`${selectedCity.label}`);
    }
  }, [selectedCity]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="block text-[20px]">pays {label}</label>
        <Select
          options={countries}
          onChange={(value) => {
            console.log(value);
            setSelectedCountry(value);
            setSelectedCity(null);
          }}
          value={selectedCountry}
          placeholder="Sélectionne un pays"
          styles={{
            control: (baseStyles, state, theme) => ({
              ...baseStyles,
              ...theme,
              backgroundColor: "#F7F7F7", // bg gris foncé
              color: "#fff",
              padding: "12px",
              border: state.isFocused ? "1px solid #aabbf8" : "black",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#aabbf850",
              primary: "#aabbf8",
            },
          })}
        />
      </div>
      {selectedCountry && (
        <div className="flex flex-col gap-2">
          <label className="block text-[20px]">Ville {label}</label>
          <Select
            options={cities}
            onChange={(value) => setSelectedCity(value)}
            value={selectedCity}
            placeholder="Sélectionne une ville"
            styles={{
              control: (baseStyles, state, theme) => ({
                ...baseStyles,
                ...theme,
                backgroundColor: "#F7F7F7", // bg gris foncé
                color: "#fff",
                padding: "12px",
                border: state.isFocused ? "1px solid #aabbf8" : "black",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#aabbf850",
                primary: "#aabbf8",
              },
            })}
          />
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
