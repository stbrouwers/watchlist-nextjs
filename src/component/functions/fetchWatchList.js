export async function fetchWatchList(identifier) {
    try {
        const response = await fetch(`https://aminoclashgemsgenerator.shop/api/v1/watchlists?identifier=${identifier}&limit=&offset=`);
        if (!response.ok) {
            console.error("Error: Network response was not ok", response.statusText);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching watchlist:", error);
        return null;
    }
}