import { useEffect, useState } from "react";

export const useFetchBlob = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });
    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.blob())
            .then(data => { setState({ loading: false, error: null, data: URL.createObjectURL(data) }); });
    },[url])

    return state;
}