import CharacterCard from './CharacterCard'

function CharacterGrid({ characters, onCharacterClick }) {
    if (!characters || characters.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-2xl text-gray-500">No se encontraron personajes</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {characters.map((character) => (
                <CharacterCard
                    key={character._id}
                    character={character}
                    onClick={() => onCharacterClick(character)}
                />
            ))}
        </div>
    )
}

export default CharacterGrid