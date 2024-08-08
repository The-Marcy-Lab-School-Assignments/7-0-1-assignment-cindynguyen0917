function GifSearch({ query, setQuery }) {
    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input onChange={event => setQuery(event.target.value)} type="text" className="form-control" id="searchInput" value={query} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
