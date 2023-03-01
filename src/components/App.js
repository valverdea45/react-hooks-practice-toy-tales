import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((data) => data.json())
    .then((allToys) => setToys(allToys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleToyRemoval(toy){
    const newArrayOfToys = toys.filter((individualToy) => {
      return individualToy.id !== toy.id
    })
    setToys(newArrayOfToys)
  }

  function handleUpdatedToy(updatedToy) {
    const newArrayOfToys = toys.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(newArrayOfToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleToyRemoval={handleToyRemoval} handleUpdatedToy={handleUpdatedToy} />
    </>
  );
}

export default App;
