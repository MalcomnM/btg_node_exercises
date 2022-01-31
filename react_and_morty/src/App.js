import logo from './logo.svg';
import './App.css';

/**
 * Using the Rick and Morty API, create a React app that displays a random character from the show.
 *  1.) The app should display the character's image, name, species, and status.
 *  2.) The app should also display a button that when clicked, will fetch a new character from the API and display it. 
 *  3.) The app should show a loading status indicator, and display an error message if the API call fails.
 * */ 

// Rick and Morty Api: https://rickandmortyapi.com/api/character/{id}
// This api returns a single character by id.


function App() {
  return (
    <div className="App">
      <header className="App-header">React and Morty</header>
    </div>
  );
}

export default App;
