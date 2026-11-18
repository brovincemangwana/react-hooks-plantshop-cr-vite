import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Holds every plant fetched from the backend
  const [plants, setPlants] = useState([]);

  // Fetch all plants once, when the component first mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantData) => setPlants(plantData));
  }, []);

  // Adds a newly created plant to state so it renders immediately
  function handleAddPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;