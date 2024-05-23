'use client'

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {fetchWatchList} from "@/component/functions/fetchWatchList";
import Header from "@/component/header";
import Link from "next/link";

export default function App() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');
    const [watchList, setWatchList] = useState({ name: '', videos: [] });

    useEffect(() => {
        async function setList() {
            if (username) {
                const result = await fetchWatchList(username);
                setWatchList(result);
            }
        }
        setList();
    }, [username]);

    return <>
        <Header/>
        <Link className='
            bg-slate-700
            text-slate-100
            border-2
            border-slate-100
            rounded-2xl
            h-1
            p-2
            text-m'
        href={`./createWatchList?userid=${username}`}>Create WatchList</Link>
        <div className="profile-page">

            {watchList.length > 0 ? (watchList.map((watch) => {
                return <Link href={`/dashboard/watchList?watchListId=${watch.id}`} className='watchListItem' key={watch.id}>
                    <h1>{watch.name}</h1>
                    <p>{watch.videos_total}</p>
                </Link>
            })) : ""}
        </div>
    </>
}