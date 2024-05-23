'use client'
import Header from '../../component/header'
import WatchListItem from "../../component/watchListItem";
import { useState } from "react";
import {fetchWatchList} from "@/component/functions/fetchWatchList";


export default function App() {
    const [identifier, setIdentifier] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [username, setUsername] = useState('');

    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        const data = await fetchWatchList(identifier);
        setResult(data);
        setLoading(false);
    }

    function change(event) {
        setIdentifier(event.target.value);
    }
    function changeUsername(event) {
        setUsername(event.target.value);
    }

    function submitUsername(event) {
        event.preventDefault();
        window.location.href = `dashboard/profile?username=${username}`;
    }

    return (
        <>
            <Header />
            <div className="flex flex-row gap-2">
                <form onSubmit={submit} className="w-1/4 gap-2">
                    <label htmlFor="identifier">identifier</label>
                    <input onChange={change} className='bg-slate-700 text-slate-100' type="text" value={identifier}/>
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={submitUsername} className="w-1/4 gap-2">
                    <label htmlFor='username'>username</label>
                    <input name="username" onChange={changeUsername} value={username} type='text' className="bg-slate-700 text-slate-100" />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {loading ? (
                <h1>Loading...</h1>
            ) : result ? (
                Array.isArray(result) ? (
                    result.map(item => (
                        <WatchListItem key={item.id} {...item} />
                    ))
                ) : (
                    <WatchListItem key={result.id} {...result} />
                )
            ) : (
                <h1>No data available</h1>
            )}
        </>
    );
}
