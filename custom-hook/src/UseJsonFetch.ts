import {useState} from "react";

export default function useJsonFetch(url: string): [{} | null, unknown | null, boolean] {
    const initialError: unknown | null = null;

    const [data, setData] = useState(null)
    const [error, setError] = useState(initialError)
    const [loading, setLoading] = useState(true)
    const [prevUrl, setPrevUrl] = useState("")

    const request = async () => {
        let response: Response

        try {
            response = await fetch(url)
        } catch (e) {
            setError("Network Error")
            setLoading(false);
            return
        }

        if (Math.floor(response.status / 100) !== 2) {
            setError("Request Error")
            setLoading(false);
            return
        }

        try {
            const json = await response.json()
            setData(json)
        } catch (e) {
            setError("Parsing error")
            return
        } finally {
            setLoading(false);
        }
    }

    if (url !== prevUrl) {
        setPrevUrl(url)
        request()
    }

    return [data, error, loading]
}