import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        profile: null,
        categories: [],
        instructors: [],
        training_classes: [],
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        })
        const resp = await fetch(url)
        const data = await resp.json();
        console.log(data.profile);

        setState({
            profile: data.profile,
            categories: data.categories,
            instructors: data.instructors,
            training_classes: data.training_classes,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        profile: state.profile,
        categories: state.categories,
        instructors: state.instructors,
        training_classes: state.training_classes,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
