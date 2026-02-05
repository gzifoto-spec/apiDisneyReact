import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import CharacterCard from './features/characters/CharacterCard'

function App() {
  const mockCharacter = {
    name: "Mickey Mouse",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_1.png",
    allies: ["Minnie Mouse", "Donald Duck", "Goofy", "Pluto"],
    enemies: ["Pete", "Mortimer Mouse"],
    films: ["Steamboat Willie", "Fantasia", "The Sorcerer's Apprentice"],
    shortFilms: ["Mickey's Trailer", "Brave Little Tailor"],
    tvShows: ["Mickey Mouse Clubhouse", "Mickey and the Roadster Racers"],
    videoGames: ["Kingdom Hearts", "Epic Mickey"],
    parkAttractions: ["Mickey's PhilharMagic", "Mickey & Minnie's Runaway Railway"]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-md mx-auto">
          <CharacterCard character={mockCharacter} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App