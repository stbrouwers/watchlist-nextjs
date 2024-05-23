'use client'
import { useSearchParams } from "next/navigation";
import { fetchWatchList } from "@/component/functions/fetchWatchList";
import { useEffect, useState, useCallback } from "react";
import addVideo from "@/component/functions/addVideo"
import Link from "next/link";
import Header from "@/component/header";

export default function App() {
    const searchParams = useSearchParams();
    const watchListId = searchParams.get('watchListId');
    const [watchList, setWatchList] = useState({ name: '', videos: [] });
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const videos = watchList.videos;

    useEffect(() => {
        async function setList() {
            if (watchListId) {
                const result = await fetchWatchList(watchListId);
                setWatchList(result);
                setLoading(false);
            }
        }
        setList();
    }, [watchListId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addVideo(username, watchList.id, name, url);
        const updatedWatchList = await fetchWatchList(watchListId);
        setWatchList(updatedWatchList);
        setName('');
        setUrl('');
        setUsername('');
        window.location.reload();
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div>
            <Header/>
            <h1>{watchList.name}</h1>
            <form className="flex flex-col w-1/4 gap-2" onSubmit={handleSubmit}>
                <label htmlFor="videoName">Video Name</label>
                <input
                    onChange={handleInputChange(setName)}
                    name="videoName"
                    className="bg-slate-700 text-slate-100"
                    type="text"
                    value={name}
                />
                <label htmlFor="username">Username</label>
                <input
                    onChange={handleInputChange(setUsername)}
                    name="username"
                    className="bg-slate-700 text-slate-100"
                    type="text"
                    value={username}
                />
                <label htmlFor="url">URL</label>
                <input
                    onChange={handleInputChange(setUrl)}
                    name="url"
                    className="bg-slate-700 text-slate-100"
                    type="text"
                    value={url}
                />
                <input
                    className="bg-slate-700 text-slate-100 mt-2"
                    type="submit"
                    value="Submit"
                />
            </form>
            <div className="flex flex-col gap-2 mt-4">
                {loading ? (
                    <p>Loading...</p>
                ) : videos.length > 0 ? (
                    videos.map((video, index) => (
                        <Link key={index} href={video.url}>
                            {video.name}
                        </Link>
                    ))
                ) : (
                    <p>No videos available</p>
                )}
            </div>
        </div>
    );
}
