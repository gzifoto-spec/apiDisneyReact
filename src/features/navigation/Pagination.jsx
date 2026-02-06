function Pagination({ currentPage, totalPages, onPageChange }) {
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const handlePrevious = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-6 py-6">
            <button
                onClick={handlePrevious}
                disabled={isFirstPage}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${isFirstPage
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-110 hover:shadow-2xl active:scale-95'
                    }`}
            >
                <span className="text-2xl">🐶</span>
                <span>Anterior</span>
            </button>

            <div className="bg-white px-6 py-3 rounded-xl border-4 border-yellow-400 shadow-lg">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Página {currentPage} de {totalPages}
                </p>
            </div>

            <button
                onClick={handleNext}
                disabled={isLastPage}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${isLastPage
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-110 hover:shadow-2xl active:scale-95'
                    }`}
            >
                <span>Siguiente</span>
                <span className="text-2xl">🐕</span>
            </button>
        </div>
    )
}

export default Pagination