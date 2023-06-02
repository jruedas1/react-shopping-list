import {useState} from "react";
import Input from "./Input";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import "./css/App.css";

function App(){
    const [items, setItems] = useState([]);

    const handleInput = (listItem) => {
        setItems([...items, listItem]);
    }

    return <div className="allContent">
        <Header  />
        <Input inputSubmitCallback={handleInput}/>
        <ShoppingList items={items} />
    </div>;
}

export default App;