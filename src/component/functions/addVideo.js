export default function addVideo(identifier, watchListId, name, url) {
    fetch(`https://aminoclashgemsgenerator.shop/api/v1/videos?identifier=${identifier}&watchlist=${watchListId}&name=${name}&url=${url}`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e));

    console.log(identifier)
}