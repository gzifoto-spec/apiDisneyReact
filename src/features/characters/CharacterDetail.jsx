function CharacterDetail({ character, onBack }) {
    const renderFullSection = (title, items) => {
        if (!items || items.length === 0) {
            return (
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-pink-600 mb-3">{title}</h3>
                    <p className="text-gray-500 italic">Sin datos</p>
                </div>
            )
        }

        return (
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-pink-600 mb-3">{title}</h3>
                <ul className="text-lg text-gray-700 space-y-2">
                    {items.map((item, index) => (
                        <li key={index}>• {item}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={onBack}
                className="mb-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
                <span className="text-2xl">←</span>
                <span>Volver</span>
            </button>

            <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl border-4 border-yellow-400 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                        <div className="relative bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl overflow-hidden">
                            <img
                                src={character.imageUrl}
                                alt={character.name}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
                            {character.name}
                        </h1>

                        {renderFullSection('Aliados', character.allies)}
                        {renderFullSection('Enemigos', character.enemies)}
                        {renderFullSection('Películas', character.films)}
                        {renderFullSection('Cortos', character.shortFilms)}
                        {renderFullSection('Series TV', character.tvShows)}
                        {renderFullSection('Videojuegos', character.videoGames)}
                        {renderFullSection('Atracciones', character.parkAttractions)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail