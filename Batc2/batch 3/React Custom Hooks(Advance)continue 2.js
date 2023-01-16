const useSemiPersistentState = (initialState) => {
    const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || initialState
    );
    React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
    }, [searchTerm]);
    return [searchTerm, setSearchTerm];
    };
    