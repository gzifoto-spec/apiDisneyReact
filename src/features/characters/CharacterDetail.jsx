import { useState, useEffect } from 'react'

function CharacterDetail({ character, onBack }) {
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

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }, 100)
    }, [])

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
                className="mb-6 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
            >
                <img
                    src="/assets/images/previous.gif"
                    alt="Volver"
                    className="w-48 h-36 object-contain"
                />
                
            </button>

            <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl border-4 border-yellow-400 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                        <div className="relative bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl overflow-hidden">
                            <img
                                src={imageSrc}
                                alt={character.name}
                                className={`w-full h-auto ${isPlaceholder ? 'object-contain' : 'object-cover'}`}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />

                            {isPlaceholder && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-lg font-bold text-sm shadow-2xl border-4 border-white backdrop-blur-sm">
                                    Imagen no encontrada
                                </div>
                            )}
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

            <button
                onClick={onBack}
                className="mt-6 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
            >
                <img
                    src="/assets/images/previous.gif"
                    alt="Volver"
                    className="w-48 h-36 object-contain"
                />
                
            </button>
        </div>
    )
}

export default CharacterDetail