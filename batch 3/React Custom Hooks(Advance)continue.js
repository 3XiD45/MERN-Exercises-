const useSemiPersistentState = () => {
    const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
    );
    React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
    }, [searchTerm]);
    };
    const App = () => {
    ...
    };