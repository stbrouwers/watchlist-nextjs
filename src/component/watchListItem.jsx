import Link from "next/link";

export default function WatchListItem({id, name, is_private, is_hidden, reference, watchlist_identifier_id, videos_total, created_at, updated_at, videos}) {
    return<>
        <div className="watchList">
            <Link href={`../dashboard/watchList?watchListId=${id}`}>{name}</Link>
        </div>
    </>
}