let hasStored;
if (localStorage.getItem('search')) {
hasStored = true;
} else {
hasStored = false;
}
const initialState = hasStored
? localStorage.getItem('search')
: 'React';