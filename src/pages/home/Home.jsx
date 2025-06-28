import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import AboutUs from "./homeComponents/aboutus/AboutUs";
import Banner from "./homeComponents/banner/Banner";
import Inspiration from "./homeComponents/inspiration/Inspiration";
import { useEffect, useState } from "react";
import Footer from "../../shared/footer/Footer";
import Contact from "../../components/contact/Contact";
import PetCategory from "./homeComponents/petCategory/PetCategory";

const Home = () => {
  const [petsCategory, setPetsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://serversite-pet-adoption.vercel.app/PetCategory");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPetsCategory(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching pets Category:", error);
        setError(error.message);
        // PetCategory component will use default data if petsCategory is empty
        setPetsCategory([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPetCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <PetCategory petsCategory={petsCategory} isLoading={isLoading} error={error} />
      <Inspiration />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;