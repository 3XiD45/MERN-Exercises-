const App = () => {
    ...
    const [stories, setStories] = React.useState([]);
    React.useEffect(() => {
    getAsyncStories().then(result => {
    setStories(result.data.stories);
    });
    }, []);
    ...
    };