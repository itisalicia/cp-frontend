import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useAddCountryMutation,
  useGetCountriesQuery,
} from "../../generated/graphql-types";
import "./Countries.css";

function Countries() {
  const { data, loading, error } = useGetCountriesQuery();
  const [addCountry] = useAddCountryMutation({
    refetchQueries: ["GetCountries"],
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: {
    name: string;
    code: string;
    emoji: string;
  }) => {
    try {
      await addCountry({ variables: { data } });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="all-countries-container">
      <h1 className="all-countries-title"> Liste des pays : </h1>
      <ul className="countries-list">
        {data?.countries.map((country) => (
          <li key={country.id} className="country-item">
            <Link to={`/country/${country.code}`} className="countries-link">
              <span className="country-emoji"> {country.emoji}</span>
              <span className="country-name"> {country.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h1>Ajouter un pays</h1>
      <form className="add-country-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className="input-add"
          placeholder="Nom"
        />
        <input
          {...register("code", { required: true })}
          className="input-add"
          placeholder="Code"
        />
        <input
          {...register("emoji", { required: true })}
          className="input-add"
          placeholder="Emoji"
        />
        <button type="submit" className="btn-add">Ajouter</button>
      </form>
    </section>
  );
}

export default Countries;
