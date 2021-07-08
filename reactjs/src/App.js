import logo from './logo.svg';
import './App.css';


function Message(props){
    return <p className="Props-example">P.S. А также {props.text} {props.text1}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p className="App-header-text">
          {/*Edit <code>src/App.js</code> and save to reload.*/}
           И да начнётся обучение ReactJS!
        </p>
          <Message text={"связанные с ним фичи."} text1={"И не только..."}/>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
