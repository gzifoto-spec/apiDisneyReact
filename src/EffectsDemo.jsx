import { useState } from 'react'

function EffectsDemo() {
    const [currentEffect, setCurrentEffect] = useState('fadeIn')
    const [key, setKey] = useState(0)

    const effects = [
        { name: 'fadeIn', label: 'Fade In (actual)', description: 'Aparición gradual' },
        { name: 'slideInRight', label: 'Slide Right →', description: 'Barrido de izquierda a derecha' },
        { name: 'slideInLeft', label: 'Slide Left ←', description: 'Barrido de derecha a izquierda' },
        { name: 'zoomIn', label: 'Zoom In', description: 'Acercamiento desde el centro' },
        { name: 'rotateIn', label: 'Rotate In', description: 'Rotación con entrada' },
        { name: 'curtainOpen', label: 'Curtain Open', description: 'Cortina que se abre' },
        { name: 'sparkleIn', label: 'Sparkle In ✨', description: 'Entrada brillante mágica' }
    ]

    const playEffect = (effectName) => {
        setCurrentEffect(effectName)
        setKey(prev => prev + 1)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    🎬 Preview de Efectos de Transición
                </h1>

                <div className="bg-white rounded-2xl p-6 shadow-2xl mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">Selecciona un efecto:</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {effects.map(effect => (
                            <button
                                key={effect.name}
                                onClick={() => playEffect(effect.name)}
                                className={`p-4 rounded-xl font-bold transition-all ${currentEffect === effect.name
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                            >
                                <div className="text-lg">{effect.label}</div>
                                <div className="text-xs mt-1 opacity-80">{effect.description}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">
                        Efecto actual: {effects.find(e => e.name === currentEffect)?.label}
                    </h3>

                    <div
                        key={key}
                        className={`bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl border-4 border-yellow-400 p-8 min-h-[400px] flex items-center justify-center animate-${currentEffect}`}
                    >
                        <div className="text-center">
                            <div className="text-6xl mb-4">🏰</div>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                                Dataland Magic
                            </h2>
                            <p className="text-lg text-gray-700">
                                Este es el contenido que aparecerá con el efecto seleccionado
                            </p>
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow">
                                    <div className="text-2xl mb-2">⭐</div>
                                    <div className="text-sm font-bold">Personaje 1</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow">
                                    <div className="text-2xl mb-2">✨</div>
                                    <div className="text-sm font-bold">Personaje 2</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow">
                                    <div className="text-2xl mb-2">🌟</div>
                                    <div className="text-sm font-bold">Personaje 3</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setKey(prev => prev + 1)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                        >
                            🔄 Repetir efecto
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">

                    <a href="/"
                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                    ← Volver a la aplicación
                </a>
            </div>
        </div>
    </div >
    )
}

export default EffectsDemo