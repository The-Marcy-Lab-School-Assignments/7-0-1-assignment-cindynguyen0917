
function GifContainer({ gifs }) {
    return (
        <ul>
            {
                gifs.map((gif) => (
                    <li key={gif.id}>
                        <img src={gif.images.original.url}></img>
                    </li>
                ))
            }
        </ul >
    )
}

export default GifContainer
