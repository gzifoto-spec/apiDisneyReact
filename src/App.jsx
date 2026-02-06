import { useState, useEffect } from 'react'
import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import CharacterGrid from './features/characters/CharacterGrid'
import Pagination from './features/navigation/Pagination'
import { fetchCharacters } from './services/disneyApi'
import { useResponsive } from './shared/hooks/useResponsive'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const pageSize = useResponsive()

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const data = await fetchCharacters(currentPage, pageSize)
        setCharacters(data.characters)
        setTotalPages(data.totalPages)
      } catch (err) {
        setError('Error al cargar los personajes. Por favor, intenta de nuevo.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [currentPage, pageSize])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🏰</div>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Cargando magia de Disney...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl border-4 border-red-400 shadow-2xl max-w-md">
            <div className="text-6xl mb-4">😢</div>
            <p className="text-2xl font-bold text-red-600 mb-4">
              ¡Ups! Algo salió mal
            </p>
            <p className="text-gray-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Reintentar
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
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
        <CharacterGrid characters={characters} />
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