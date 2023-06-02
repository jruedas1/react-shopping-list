import {useState} from "react";
import './css/Input.css';

function Input( {inputSubmitCallback} ){
    const handleFormSubmit = (event) => {
        event.preventDefault();
        inputSubmitCallback(item);
        setItem('');
    }

    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    }

    return (
      <div className="container">
          <form onSubmit={handleFormSubmit} className="column align-center">
              <label htmlFor="itemInput">Enter a shopping item:</label>
              <input type="text" id="itemInput" onChange={handleChange} value={item}/>
          </form>
      </div>  
    );
}

export default Input;