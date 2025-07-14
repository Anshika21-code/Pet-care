import React, { useState, useEffect } from "react";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import PetListingCard from "../petListing/PetListingCard";
import PetDetailsPopup from "../petListing/PetDetailsPopup"; // Add this import

const PetList = () => {
  const [allPets, setAllPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPet, setSelectedPet] = useState(null);

  const categories = ["All", "Dog", "Cat", "Bird", "Rabbit"];

  useEffect(() => {
    fetch("http://localhost:5000/api/pets")
      .then((res) => res.json())
      .then((data) => {
        setAllPets(data);
        setFilteredPets(data); // default show all
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPets(allPets);
    } else {
      const filtered = allPets.filter(
        (pet) => pet.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredPets(filtered);
    }
  }, [selectedCategory, allPets]);

  const openPopup = (pet) => {
    setSelectedPet(pet);
  };

  const closePopup = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <Navbar/>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Available Pets</h1>

        <div className="mb-6 flex gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedCategory === category
                  ? "bg-[#D52B5C] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <PetListingCard
              key={pet._id}
              card={pet}
              onClick={() => openPopup(pet)}
            />
          ))}
        </div>

        {selectedPet && (
          <PetDetailsPopup pet={selectedPet} onClose={closePopup} />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default PetList;