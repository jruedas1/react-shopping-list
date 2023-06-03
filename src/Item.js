import './css/Item.css';

function Item( {item} ){
    return (
      <li className="row full-width">{item}</li>
    );
}

export default Item;