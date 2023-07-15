import CharacterList from "./components/CharactersList";
import StarshipsList from "./components/StarshipsList";
import { useGetCharactersByNameQuery } from "./store/apis/swapiApi";

function App() {

  const {data, isFetching, isError} = useGetCharactersByNameQuery("Bo");
  
  if(isFetching) {
    return <div>Loading...</div>
  }

  const { starships } = data.results[0];

  if(isError) {
    return <div>{JSON.stringify(isError)}</div>
  }

  return (
    <div className="App">
      <h1>Lifeway Demo App</h1>
      <CharacterList characters={data.results || []}/>
    </div>
  );
}

export default App;
