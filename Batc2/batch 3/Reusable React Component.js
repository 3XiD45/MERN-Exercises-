const App = () => {
    ...
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <InputWithLabel
    id="search"
    label="Search"
    value={searchTerm}
    onInputChange={handleSearch}
    />
    ...
    </div>
    );
    };
    const InputWithLabel = ({ id, label, value, onInputChange }) => (
    <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input
    id={id}
    type="text"
    value={value}
    onChange={onInputChange}
    />
    </>
    );
