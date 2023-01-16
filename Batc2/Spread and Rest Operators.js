const profile = {
    firstName: 'Robin',
    lastName: 'Wieruch',
    };
    const address = {
    country: 'Germany',
    city: 'Berlin',
    };
    const user = {
    ...profile,
    gender: 'male',
    ...address,
    };
    console.log(user);
    // {
    // firstName: "Robin",
    // lastName: "Wieruch",
    // gender: "male"
    // country: "Germany,
    // city: "Berlin",