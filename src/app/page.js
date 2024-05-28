'use client'
import Header from "@/component/header";
import * as identifier from '@/component/auth/identifier'


export default function App() {

    async function submit(e) {
        pid = await identifier.Create();
    }


    return <>
        <Header/>
        <div>
            <form onSubmit={submit} className="w-1/4 gap-2">
                <label htmlFor="identifier">identifier</label>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
}