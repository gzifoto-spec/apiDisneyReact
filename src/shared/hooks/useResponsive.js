import { useState, useEffect } from 'react'

export const useResponsive = () => {
    const getPageSize = () => {
        const width = window.innerWidth
        if (width <= 768) return 6
        if (width <= 1024) return 12
        return 24
    }

    const [pageSize, setPageSize] = useState(getPageSize())

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize())
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return pageSize
}