import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';
import './App.css';

function App() {
  return (
    <div id="main">
    <h1>Hello, React!</h1>
    <h2>Jacob Brown - w23h769</h2>  
    <MyCounter incBy={1} decBy={1}/><hr />
    <MyCounter incBy={2} decBy={3}/><hr />

    <MyGitHub /><hr />
    <p id="Go">Go Cats</p>
    </div>
  );
}

export default App;
