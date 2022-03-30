import logo from './logo.svg';
import './App.css';
import Regist from './registration/Regist.js'
import Login from './login/Login';

function App() {
  /* the const */
    const users = [{username: 'hadaseshel', password: '12ha', nikename: 'doosa'},
                    {username: 'hailzanbar', password: '34ha', nikename: 'hailosh'}]

  return (
    <div className="App">
      <Login users={users}/>
    </div>
  );
}

export default App;

/*
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >*/