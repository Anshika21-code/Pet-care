import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Heart, Info, Star } from 'lucide-react';

export default function AnimalsPageComponent() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate(); // Initialize navigate hook

  const animals = [
    {
      id: 1,
      name: 'Cat',
      emoji: '🐱',
      description: 'Independent and curious companions with playful personalities.',
      facts: ['Sleep 12-16 hours a day', 'Have excellent night vision', 'Can make over 100 vocal sounds'],
      color: 'from-purple-400 to-pink-400',
      category: 'cat' // Add category for navigation
    },
    {
      id: 2,
      name: 'Dog',
      emoji: '🐶',
      description: 'Loyal and energetic friends known for their unconditional love.',
      facts: ['Can learn over 150 words', 'Have unique nose prints', 'Come in over 340 breeds'],
      color: 'from-blue-400 to-cyan-400',
      category: 'dog'
    },
    {
      id: 3,
      name: 'Bird',
      emoji: '🐦',
      description: 'Graceful creatures that soar through the skies with beautiful songs.',
      facts: ['Some can live over 100 years', 'Have hollow bones for flight', 'Can see ultraviolet light'],
      color: 'from-green-400 to-emerald-400',
      category: 'bird'
    },
    {
      id: 4,
      name: 'Rabbit',
      emoji: '🐰',
      description: 'Gentle and quick animals with soft fur and twitching noses.',
      facts: ['Can jump 3 feet high', 'Teeth never stop growing', 'Can see almost 360 degrees'],
      color: 'from-orange-400 to-red-400',
      category: 'rabbit'
    }
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Navigation function
  const handleViewMore = (category) => {
    navigate(`/petlisting?category=${category}`);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#C599B6] via-[#E6B2BA] to-[#85677b] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4 bg-gradient-to-r from-black bg-clip-text text-transparent">
            Animal Kingdom
          </h1>
          <p className="text-xl text-black-300 max-w-2xl mx-auto">
            Discover the wonderful world of our favorite animal companions
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedAnimal(animal)}
            >
              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(animal.id);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(animal.id) ? 'fill-red-500 text-red-500' : 'text-black-300'
                  }`}
                />
              </button>

              {/* Animal Emoji */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {animal.emoji}
              </div>

              {/* Animal Name */}
              <h3 className="text-2xl font-bold text-black mb-2 text-center">
                {animal.name}
              </h3>

              {/* Description */}
              <p className="text-black-300 text-sm text-center mb-4">
                {animal.description}
              </p>

              {/* Learn More Button */}
              <div className="flex items-center justify-center text-black group-hover:text-purple-200">
                <Info className="w-4 h-4 mr-1" />
                <span className="text-sm">Learn More</span>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${animal.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-black">{animals.length}</div>
            <div className="text-black-300 text-sm">Animal Types</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-black">{favorites.size}</div>
            <div className="text-black-300 text-sm">Favorites</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-black">∞</div>
            <div className="text-black-300 text-sm">Love Given</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-black">100%</div>
            <div className="text-black-300 text-sm">Cuteness</div>
          </div>
        </div>
      </div>

      {/* Modal for Animal Details */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white/20">
            <div className="text-center">
              <div className="text-8xl mb-4">{selectedAnimal.emoji}</div>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedAnimal.name}</h2>
              <p className="text-gray-300 mb-6">{selectedAnimal.description}</p>
              
              <div className="text-left mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Fun Facts
                </h3>
                <ul className="space-y-2">
                  {selectedAnimal.facts.map((fact, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      • {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setSelectedAnimal(null)}
                  className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                >
                  Close
                </button>
                <button
                  onClick={() => handleViewMore(selectedAnimal.category)}
                  className="px-6 py-3 bg-gradient-to-r from-[#8c5178] to-[#8c5178] text-white rounded-lg hover:from-[#8c5178]-600 hover:to-[#8c5178]-600 transition-colors font-medium"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};