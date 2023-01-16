const App = () => {
    const stories = [ ... ];
    const [searchTerm, setSearchTerm] = useSemiPersistentState('React');
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    };
    const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
    ...
    );
    };