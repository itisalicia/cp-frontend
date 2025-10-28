import { useGetCountriesQuery } from "../../generated/graphql-types";
import "./Countries.css";

function Countries() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="all-countries-container">
      <h1 className="all-countries-title"> Liste des pays : </h1>
      <ul className="countries-list">
        {data?.countries.map((country) => (
          <li key={country.id} className="country-item">
            <span className="country-emoji"> {country.emoji}</span>
            <span className="country-name"> {country.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Countries;
