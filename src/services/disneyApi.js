const BASE_URL = 'https://api.disneyapi.dev/character'

export const fetchCharacters = async (page = 1, pageSize = 24) => {
    try {
        const response = await fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        return {
            characters: data.data || [],
            totalPages: data.info?.totalPages || 1,
            currentPage: data.info?.page || page
        }
    } catch (error) {
        console.error('Error fetching Disney characters:', error)
        throw error
    }
}