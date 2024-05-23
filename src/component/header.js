import Link from "next/link";

export default function Header() {
    return <>
        <ul className="header bg-slate-700 text-slate-100">
            <li><Link href='/'>Home</Link></li>
            <li><Link href={'/dashboard'}>dashboard</Link></li>
        </ul>
    </>
}