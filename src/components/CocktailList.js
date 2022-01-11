import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2> No Matches. Try searching something different.</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return <Cocktail {...drink} key={drink.id} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
