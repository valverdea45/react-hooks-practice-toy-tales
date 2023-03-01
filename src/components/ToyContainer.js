import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleToyRemoval, handleUpdatedToy }) {

  const toyCards = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} handleToyRemoval={handleToyRemoval} handleUpdatedToy={handleUpdatedToy}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
