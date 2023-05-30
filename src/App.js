import {useState} from "react";
import Input from "./Input";
import ShoppingList from "./ShoppingList";
function App(){
    const [items, setItems] = useState([]);

    const handleInput = (listItem) => {
        console.log(listItem);
        setItems([...items, listItem]);
    }

    return <div>
        <Input inputSubmitCallback={handleInput}/>
        <ShoppingList items={items} />
    </div>;
}

export default App;