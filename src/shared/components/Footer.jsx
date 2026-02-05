function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 border-t-4 border-yellow-400 shadow-2xl mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="text-5xl">🏰</span>

                    <div className="text-yellow-200">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-2">
                            Dataland Project
                        </h3>
                        <p className="text-sm font-semibold mb-1">
                            Proyecto educativo desarrollado con React & Tailwind CSS
                        </p>
                        <p className="text-xs text-yellow-300">
                            Consuming Disney API • 2026
                        </p>
                    </div>

                    <div className="border-t border-yellow-400/30 pt-4 w-full max-w-md">
                        <p className="text-yellow-200 text-sm font-semibold mb-3">
                            Desarrollado por Xavier Piñeiro
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs text-yellow-300">
                            <span>React</span>
                            <span>•</span>
                            <span>Tailwind CSS</span>
                            <span>•</span>
                            <span>Vite</span>
                            <span>•</span>
                            <span>Disney API</span>
                        </div>
                        <p className="text-xs text-yellow-300/70 mt-3">
                            Asistido por Claude AI & Cline
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer