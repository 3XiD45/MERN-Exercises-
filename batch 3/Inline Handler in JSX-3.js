const List = ({ list, onRemoveItem }) => (
    <ul>
    {list.map((item) => (
    <Item
    key={item.objectID}
    item={item}
    onRemoveItem={onRemoveItem}
    />
    ))}
    </ul>
    );
    