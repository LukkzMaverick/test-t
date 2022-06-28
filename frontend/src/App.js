import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState("")
  const [messageWritten, setMessageWritten] = useState('')
  async function doRequest(msg){
    const body = {message: messageWritten}
    console.log(body)
    const result = await axios.post('http://localhost:3000/data', body)
    setMessage(result.data.message)
  }

  function handleChange(e){
    setMessageWritten(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" id="message" name="message" value={messageWritten} onChange={(e) => handleChange(e)}>

      </input>
      <button onClick={() => doRequest()}>Send</button>
      <br></br>
      <label>{message}</label>
    </div>
  );
}

export default App;
