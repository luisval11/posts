import { useEffect, useState } from "react";

export function useAsyncFetch(url, method = 'GET', body) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        async function fetchAsync() {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
                const json = await response.json();
                setResult(json);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchAsync();
    }, [url, method, body]);

    return [result, loading];
}