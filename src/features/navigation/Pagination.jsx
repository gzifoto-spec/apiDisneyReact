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
        <div className="flex items-center justify-center gap-8 py-8">
            <button
                onClick={handlePrevious}
                disabled={isFirstPage}
                className={`p-4 rounded-2xl transition-all duration-300 ${isFirstPage
                        ? 'bg-gray-300 cursor-not-allowed opacity-50'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110 hover:shadow-2xl active:scale-95'
                    }`}
                aria-label="Página anterior"
            >
                <img
                    src="/assets/images/previous.gif"
                    alt="Anterior"
                    className="w-32 h-32 object-contain"
                />
            </button>

            <div className="bg-white px-8 py-4 rounded-2xl border-4 border-yellow-400 shadow-lg">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Página {currentPage} de {totalPages}
                </p>
            </div>

            <button
                onClick={handleNext}
                disabled={isLastPage}
                className={`p-4 rounded-2xl transition-all duration-300 ${isLastPage
                        ? 'bg-gray-300 cursor-not-allowed opacity-50'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-110 hover:shadow-2xl active:scale-95'
                    }`}
                aria-label="Página siguiente"
            >
                <img
                    src="/assets/images/next.gif"
                    alt="Siguiente"
                    className="w-32 h-32 object-contain"
                />
            </button>
        </div>
    )
}

export default Pagination