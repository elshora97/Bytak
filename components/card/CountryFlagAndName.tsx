import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countyCode }: { countyCode: string }) {
  const validCountry = findCountryByCode(countyCode)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : "validCountry";

  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {validCountry.flag} {countryName}
    </span>
  );
}

export default CountryFlagAndName;
