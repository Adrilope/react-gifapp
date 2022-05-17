import { useState } from "react"

export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffec(() => {
        getGifs(category)
            .then(setImages)
    }, [category])

    return state
}