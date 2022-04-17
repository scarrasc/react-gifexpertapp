export const getGifs = async(category) => {

    console.log(`buscar imagenes: ${ category }`)

    const url = `https://api.giphy.com/v1/gifs/search?api_key=D5uXTw2MKgOeXMAdD630e2aoAVKyge66&q=${ encodeURI( category ) }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

}