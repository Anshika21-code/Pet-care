/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PetDetailsPopup = ({ pet, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold"
        >
          ×
        </button>
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{pet.name}</h2>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Location:</strong> {pet.location}</p>
        <p><strong>Category:</strong> {pet.category}</p>
        <p className="mt-4">{pet.description || "No description provided."}</p>
       
      </div>
    </div>
  );
};

export default PetDetailsPopup;
