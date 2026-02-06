import CharacterCard from './CharacterCard'

function CharacterGrid({ characters }) {
    if (!characters || characters.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-2xl text-purple-600 font-bold">
                    No se encontraron personajes 😢
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character, index) => (
                <CharacterCard key={index} character={character} />
            ))}
        </div>
    )
}

export default CharacterGrid