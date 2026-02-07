import { useState, useEffect } from 'react'

function CharacterCard({ character, onClick }) {
    const [isPlaceholder, setIsPlaceholder] = useState(false)
    const [imageSrc, setImageSrc] = useState(character.imageUrl)

    useEffect(() => {
        setImageSrc(character.imageUrl)
        setIsPlaceholder(false)

        const timeout = setTimeout(() => {
            const img = new Image()
            img.onload = () => {
                if (img.naturalWidth === 200 && img.naturalHeight === 114) {
                    setImageSrc('/assets/images/castle.png')
                    setIsPlaceholder(true)
                }
            }
            img.onerror = () => {
                setImageSrc('/assets/images/castle.png')
                setIsPlaceholder(true)
            }
            img.src = character.imageUrl
        }, 100)

        return () => clearTimeout(timeout)
    }, [character.imageUrl])

    const handleImageError = () => {
        if (!isPlaceholder) {
            setImageSrc('/assets/images/castle.png')
            setIsPlaceholder(true)
        }
    }

    const handleImageLoad = (e) => {
        if (e.target.naturalWidth === 200 && e.target.naturalHeight === 114) {
            if (!isPlaceholder) {
                setImageSrc('/assets/images/castle.png')
                setIsPlaceholder(true)
            }
        }
    }

    const renderSection = (title, items) => {
        if (!items || items.length === 0) {
            return (
                <div className="mb-3">
                    <h4 className="text-sm font-bold text-pink-600 mb-1">{title}</h4>
                    <p className="text-xs text-gray-500 italic">Sin datos</p>
                </div>
            )
        }

        return (
            <div className="mb-3">
                <h4 className="text-sm font-bold text-pink-600 mb-1">{title}</h4>
                <ul className="text-xs text-gray-700 space-y-0.5">
                    {items.slice(0, 3).map((item, index) => (
                        <li key={index}>• {item}</li>
                    ))}
                    {items.length > 3 && (
                        <li className="text-gray-500 italic">+{items.length - 3} más...</li>
                    )}
                </ul>
            </div>
        )
    }

    return (
        <article
            onClick={onClick}
            className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl border-4 border-yellow-400 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
        >
            <div className="relative h-64 bg-gradient-to-br from-blue-200 to-purple-200">
                <img
                    src={imageSrc}
                    alt={character.name}
                    className={`w-full h-full ${isPlaceholder ? 'object-contain' : 'object-cover'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />

                {isPlaceholder && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-lg font-bold text-sm shadow-2xl border-4 border-white backdrop-blur-sm">
                        Imagen no encontrada
                    </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {character.name}
                    </h3>
                </div>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        {renderSection('Aliados', character.allies)}
                        {renderSection('Películas', character.films)}
                        {renderSection('Videojuegos', character.videoGames)}
                    </div>
                    <div>
                        {renderSection('Enemigos', character.enemies)}
                        {renderSection('Series TV', character.tvShows)}
                        {renderSection('Atracciones', character.parkAttractions)}
                    </div>
                </div>
                {renderSection('Cortos', character.shortFilms)}
            </div>
        </article>
    )
}

export default CharacterCard