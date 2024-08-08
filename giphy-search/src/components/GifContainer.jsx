
function GifContainer({ gifs }) {
    return (
        <ul >
            {
                gifs.map((gif) => (
                    <li key={gif.id}>
                        <img src={gif.images.original.url} alt={`this is an image of: ${gif.id}`}></img>
                    </li>
                ))
            }
        </ul >
    )
}

export default GifContainer
