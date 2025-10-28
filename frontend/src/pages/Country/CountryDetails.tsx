import { useParams } from "react-router-dom";
import { useGetCountryQuery } from "../../generated/graphql-types";
import "./CountryDetails.css";

function CountryDetails() {
  const { code } = useParams<{ code: string }>();

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code! },
  });

  if (loading) return <p> Loading....</p>;
  if (error) return <p> Error: {error.message}</p>;

  return (
    <section className="country-details-container">
      <h1> {data?.country.name} </h1>
      <ul>
        <li> Drapeau : {data?.country.emoji}</li>
        <li>{data?.country.code && <p> Code : {data.country.code} </p>}</li>
        <li>
          {" "}
          {data?.country.continent && (
            <p> Continent : {data.country.continent.name} </p>
          )}
        </li>
      </ul>
    </section>
  );
}

export default CountryDetails;
