import {useState} from "react";
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
      <div>
          <form onSubmit={handleFormSubmit}>
              <label htmlFor="itemInput">Enter a shopping item:</label>
              <input type="text" id="itemInput" onChange={handleChange} value={item}/>
          </form>
      </div>  
    );
}

export default Input;