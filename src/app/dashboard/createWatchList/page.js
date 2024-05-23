import Header from "@/component/header";

export default function page() {
    return <>
        <Header/>
        <div>
            <h1>Create a watchList</h1>
            <form>
                <label htmlFor="username" className={'w-1/4'}>Username</label>
                <input name="username" className={'bg-slate-700 text-slate-100 w-1/4'} type="text"/>
                <label htmlFor="name">name</label>
                <input name="name" className={'bg-slate-700 text-slate-100 w-1/4'} type="text"/>
                <label htmlFor="private">private</label>
                <input type="checkbox" name="private" className='w-1/4'/>
                <label htmlFor="hidden">hidden</label>
                <input type="checkbox" className="w-1/4" name="hidden"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
}