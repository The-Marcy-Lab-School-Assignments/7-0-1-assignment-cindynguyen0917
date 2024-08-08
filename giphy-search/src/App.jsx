import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';
import API_KEY from '../config'

function App() {

  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [gifs, setGifs] = useState([]);
  const giphyUrlWithQuery = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`

  useEffect(() => {
    const initialFetch = async () => {
      const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
      if (data) setGifs(data.data);
      if (error) setError(error);
    }
    initialFetch();
  }, []);
  console.log(`this is my state:`, gifs)
  console.log(`this is my query:`, query)

  useEffect(() => {
    if (!query) return
    const doFetch = async () => {
      const [data, error] = await handleFetch(giphyUrlWithQuery);
      if (data) setGifs(data.data);
      if (error) setError(error);
    }
    doFetch();
  }, [query])
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch query={query} setQuery={setQuery} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
