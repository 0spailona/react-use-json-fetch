import useJsonFetch from "./UseJsonFetch.ts";

export default function DataView() {
    const url = "http://localhost:7070/data"

    const [data, error, loading] = useJsonFetch(url);

    return (
        <div>
            <div>data: {JSON.stringify(data)}</div>
            <div>loading: {loading.toString()}</div>
            <div>error: {error ? error.toString() : "null"}</div>
        </div>

    )
}