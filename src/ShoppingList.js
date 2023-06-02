import Item from "./Item";
import './css/ShoppingList.css';

function ShoppingList( {items} ){

    const renderedItems = items.map((item, index) => {
       return <Item item={item} key={index} />;
    });

    return (
       <div className="container">
               { renderedItems.length > 0 ? (
                   <ul>
                       {renderedItems}
                   </ul>
               ) : (
                   <></>
               )
           }
       </div>
    );
}

export default ShoppingList;