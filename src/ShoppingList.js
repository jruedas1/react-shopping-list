import Item from "./Item";

function ShoppingList( {items} ){

    const renderedItems = items.map(item => {
       return <Item item={item} />;
    });

    return (
       <div>
           <p>Shopping list:</p>
           <ul>
               {renderedItems}
           </ul>
       </div>
    );
}

export default ShoppingList;