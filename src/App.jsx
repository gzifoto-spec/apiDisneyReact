import Header from './shared/components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <p className="text-center text-2xl text-purple-800">
          Contenido principal aquí 🎭
        </p>
      </main>
    </div>
  )
}

export default App