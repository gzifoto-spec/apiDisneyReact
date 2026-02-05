function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 border-b-4 border-yellow-400 shadow-2xl">
            <div className="container mx-auto px-4 py-6 flex items-center justify-center gap-4">
                <span className="text-6xl">🏰</span>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                        Dataland
                    </h1>
                    <p className="text-yellow-200 text-sm md:text-base font-semibold tracking-wide">
                        Disney Characters Collection
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header