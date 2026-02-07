import { useState, useCallback } from 'react'

export const useTransitionEffect = () => {
    const [currentEffect, setCurrentEffect] = useState('animate-fadeIn')

    const effects = [
        'animate-slideInRight',
        'animate-slideInLeft',
        'animate-zoomIn',
        'animate-rotateIn',
        'animate-curtainOpen',
        'animate-sparkleIn'
    ]

    const sounds = [
        '/assets/sounds/magic1.wav',
        '/assets/sounds/magic2.wav',
        '/assets/sounds/magic3.wav'
    ]

    const playRandomEffect = useCallback(() => {
        const randomEffect = effects[Math.floor(Math.random() * effects.length)]
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]

        setCurrentEffect(randomEffect)

        const audio = new Audio(randomSound)
        audio.volume = 0.3
        audio.play().catch(err => console.log('Audio blocked:', err))
    }, [])

    return { currentEffect, playRandomEffect }
}