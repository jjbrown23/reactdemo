import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';
// import AppCss from '.App.css'

function App() {
  return (
    <>
    <h1>Hello, React!</h1>
    <h2>Jacob Brown - w23h769</h2>  
    <MyCounter incBy={1} decBy={1}/><hr />
    <MyCounter incBy={2} decBy={3}/><hr />

    <MyGitHub /><hr />
    <p>Class Dismissed</p>
    </>
  );
}

export default App;
