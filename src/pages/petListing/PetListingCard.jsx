/* eslint-disable react/prop-types */
const PetListingCard = ({ card, onClick }) => {
  const { image, name, age, location, category } = card;

  return (
    <div onClick={onClick} className="cursor-pointer transition hover:scale-105">
      <div className="card h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Age: {age}</p>
        </div>
      </div>
    </div>
  );
};

export default PetListingCard;
