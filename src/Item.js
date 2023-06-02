import './css/Item.css';

function Item( {item} ){
    return (
      <li className="row">{item}</li>
    );
}

export default Item;