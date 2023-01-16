const App = () => {
    ...
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <InputWithLabel
    id="search"
    value={searchTerm}
    onInputChange={handleSearch}
    >
    Search:
    </InputWithLabel>
    ...
    </div>
    );
    };