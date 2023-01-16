function App() {
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
    </div>
    ); }
    function Search() {
    return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    </div>
    );
    }
    