const Item = ({ item, onRemoveItem }) => (
    <li>
    ...
    <span>
    <button
    type="button"
    onClick={() => {
    // do something else
    // note: avoid using complex logic in JSX
    onRemoveItem(item);
    }}
    >
    Dismiss
    </button>
    </span>
    Fundamentals of React 95
    </li>
    );
    