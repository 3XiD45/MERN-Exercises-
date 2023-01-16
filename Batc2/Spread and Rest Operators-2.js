const user = {
    id: '1',
    firstName: 'Robin',
    lastName: 'Wieruch',
    country: 'Germany',
    city: 'Berlin',
    };
    const { id, country, city, ...userWithoutAddress } = user;
    console.log(userWithoutAddress);
    // {
    // firstName: "Robin",
    // lastName: "Wieruch"
    // }
    console.log(id);
    // "1"
    console.log(city);
    // "Berlin"