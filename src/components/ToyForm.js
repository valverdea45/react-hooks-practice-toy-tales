import React, { useState } from "react";

function ToyForm({ handleNewToy }) {

  const [toyName, setToyName] = useState("")
  const [toyImage, setToyImage] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    const objToBeSent = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
    fetch("http://localhost:3001/toys/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToBeSent)
    })
    .then((data) => data.json())
    .then((newToy) => handleNewToy(newToy))

    setToyName("")
    setToyImage("")
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setToyName(e.target.value)}
          value={toyName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => setToyImage(e.target.value)}
          value={toyImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
