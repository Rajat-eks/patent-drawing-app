import { Country } from "country-state-city";
import { serviceData } from "../data/servicesDetails";
import CountryList from "country-list-with-dial-code-and-flag";

export const findIndexOfService = (path: string) => {
  const actualPath = path.split("/")[2];
  const index = serviceData.find((item: {path:string}) => item.path === actualPath);
  if (index) {
    return index.id;
  } else {
    return 1;
  }
};

//GET COUNTRY

export const getCountry = () => {
  return Country.getAllCountries().map((country,index) => ({
    key:index,
    value: country.name,
    label: `${country.name} - ${country.isoCode}`,
  }));
};

export const getCountryCode = () =>
  CountryList.getAll()
    .map((country) => ({
      label: `${country.countryCode} - ${country.code}`,
      value: country.dial_code,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
