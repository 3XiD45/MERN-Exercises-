const App = () => {
    ...
    const [stories, setStories] = React.useState(initialStories);
    const handleRemoveStory = (item) => {
    const newStories = stories.filter(
    (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
    };
    ...
    return (
    <div>
    <h1>My Hacker Stories</h1>
    ...
    <hr />
    <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
    );
    };
    