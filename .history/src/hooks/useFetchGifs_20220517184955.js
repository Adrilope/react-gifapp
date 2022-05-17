import { useEffect, useState } from "react"

export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [])

    return state
}