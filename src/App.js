import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const AUTHOR={
    BOT:'Bot',
    ME:'Me'

}

function Message(props){
    return <p className="Props-example"> {props.author} :{props.text} </p>
}

function App() {

    const [messageList,setMessageList]=React.useState([])
    const [inputValue,setInputValue]=React.useState("")

    const handleMessageChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleMessageSubmit=(e)=>{
        e.preventDefault()
        setMessageList(currentMessageList=>([...currentMessageList,{author:AUTHOR.ME,text:inputValue}]))
        setInputValue('')
    }

    React.useEffect(()=>{
        if(messageList.length && messageList[messageList.length-1].author ==AUTHOR.ME){
            setTimeout(()=>{
                setMessageList((currentMessageList)=>([...currentMessageList,{author:AUTHOR.BOT,text:"Hello"}]))
                setInputValue('')
            },1500)
        }
    })





  return (
    <div className="App">
      <header className="App-header">

        <p className="App-header-text">

           И да начнётся обучение ReactJS!
        </p>

        <div className='Message-css'>

            {messageList.map((message,index)=>(<Message key={index} text={message.text} author={message.author}/>))}
        </div>
          <form className='App-form' onSubmit={handleMessageSubmit}>
              <input className='App-form-input' placeholder='write your message' onChange={handleMessageChange} value={inputValue}/>
              <button className='App-form-button'>
                  Send
              </button>
          </form>

      </header>
    </div>
  );
}

export default App;
