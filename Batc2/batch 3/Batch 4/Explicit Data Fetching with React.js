Explicit Data Fetching with React
Re-fetching all data each time someone types in the input field isn’t optimal. Since we’re using
a third-party API to fetch the data, its internals is out of our reach. Eventually, we will incur rate
limiting¹⁷⁷, which returns an error instead of data. To solve this problem, change the implementation
details from implicit to explicit data (re-)fetching. In other words, the application will refetch data
only if someone clicks a confirmation button.
First, add a button element for the confirmation to the JSX:
src/App.js
const App = () => {
...
return (
<div>
<h1>My Hacker Stories</h1>
<InputWithLabel
id="search"
value={searchTerm}
isFocused
onInputChange={handleSearchInput}
>
<strong>Search:</strong>
</InputWithLabel>
<button
type="button"
disabled={!searchTerm}
onClick={handleSearchSubmit}
>
Submit
</button>
...
</div>
);
};
Second, the handler, input, and button handler receive implementation logic to update the component’s state. The input field handler still updates the searchTerm; the button handler sets the url
¹⁷⁷https://bit.ly/2ZaJXI8
Fundamentals of React 119
derived from the current searchTerm and the static API URL as a new state:
src/App.js
const App = () => {
const [searchTerm, setSearchTerm] = useSemiPersistentState(
'search',
'React'
);
const [url, setUrl] = React.useState(
`${API_ENDPOINT}${searchTerm}`
);
...
const handleSearchInput = (event) => {
setSearchTerm(event.target.value);
};
const handleSearchSubmit = () => {
setUrl(`${API_ENDPOINT}${searchTerm}`);
};
...
};
Third, instead of running the data fetching side-effect on every searchTerm change – which would
happen each time the input field’s value changes – the url is used. The url is set explicitly by the
user when the search is confirmed via our new button:
src/App.js
const App = () => {
...
const handleFetchStories = React.useCallback(() => {
dispatchStories({ type: 'STORIES_FETCH_INIT' });
fetch(url)
.then((response) => response.json())
.then((result) => {
dispatchStories({
type: 'STORIES_FETCH_SUCCESS',
payload: result.hits,
Fundamentals of React 120
});
})
.catch(() =>
dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
);
}, [url]);
React.useEffect(() => {
handleFetchStories();
}, [handleFetchStories]);
...
};
Before the searchTerm was used for two cases: updating the input field’s state and activating the sideeffect for fetching data. One may consider this too many responsibilities for the searchTerm. Now
it’s only used for the former. A second state called url got introduced for triggering the side-effect
for fetching data which only happens when a user clicks the confirmation button.
Exercises:
• Confirm your source code¹⁷⁸.
– Confirm the changes¹⁷⁹.
• Why is useState instead of useSemiPersistentState used for the url state management?
• Why is there no check for an empty searchTerm in the handleFetchStories function anymore?
• Optional: Rate this section¹⁸⁰.
¹⁷⁸https://bit.ly/3n47Qcw
¹⁷⁹https://bit.ly/3AXZk3J
¹⁸⁰https://forms.gle/HuJDuVNZmEDbhGzU