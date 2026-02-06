import { useState } from 'react'
import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import CharacterGrid from './features/characters/CharacterGrid'
import Pagination from './features/navigation/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const mockCharacters = [
    {
      name: "Mickey Mouse",
      imageUrl: "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_1.png",
      allies: ["Minnie Mouse", "Donald Duck", "Goofy", "Pluto"],
      enemies: ["Pete", "Mortimer Mouse"],
      films: ["Steamboat Willie", "Fantasia", "The Sorcerer's Apprentice"],
      shortFilms: ["Mickey's Trailer", "Brave Little Tailor"],
      tvShows: ["Mickey Mouse Clubhouse"],
      videoGames: ["Kingdom Hearts", "Epic Mickey"],
      parkAttractions: ["Mickey's PhilharMagic"]
    },
    {
      name: "Donald Duck",
      imageUrl: "https://static.wikia.nocookie.net/disney/images/d/db/Donald_Duck.png",
      allies: ["Mickey Mouse", "Goofy", "Daisy Duck"],
      enemies: ["Chip and Dale"],
      films: ["The Three Caballeros", "Saludos Amigos"],
      shortFilms: ["Der Fuehrer's Face", "Donald's Diary"],
      tvShows: ["DuckTales", "Quack Pack"],
      videoGames: ["Kingdom Hearts", "QuackShot"],
      parkAttractions: ["Gran Fiesta Tour"]
    },
    {
      name: "Goofy",
      imageUrl: "https://static.wikia.nocookie.net/disney/images/c/c0/Goofy_Disney.png",
      allies: ["Mickey Mouse", "Donald Duck", "Max Goof"],
      enemies: [],
      films: ["A Goofy Movie", "An Extremely Goofy Movie"],
      shortFilms: ["How to Play Baseball", "Motor Mania"],
      tvShows: ["Goof Troop", "House of Mouse"],
      videoGames: ["Goof Troop", "Kingdom Hearts"],
      parkAttractions: ["Goofy's Sky School"]
    },
    {
      name: "Minnie Mouse",
      imageUrl: "https://static.wikia.nocookie.net/disney/images/e/e0/Minnie_Mouse.png",
      allies: ["Mickey Mouse", "Daisy Duck", "Clarabelle Cow"],
      enemies: ["Mortimer Mouse"],
      films: ["Steamboat Willie", "Plane Crazy"],
      shortFilms: ["Minnie's Yoo Hoo", "Mickey's Rival"],
      tvShows: ["Mickey Mouse Clubhouse", "Minnie's Bow-Toons"],
      videoGames: ["Kingdom Hearts", "Disney Magical World"],
      parkAttractions: ["Minnie's House"]
    }
  ]

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <CharacterGrid characters={mockCharacters} />
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App