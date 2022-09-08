import Item from "./Item";
const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((value) => {
                return (
                    <span key={value.id}>
                        <Item item={value}/>
                    </span>
                );
            })}
        </div>
    );
}
export default ItemList;
