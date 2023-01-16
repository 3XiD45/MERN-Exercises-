const user = {
    firstName: 'Robin',
    lastName: 'Wieruch',
    };
    // without object destructuring
    const firstName = user.firstName;
    const lastName = user.lastName;
    console.log(firstName + ' ' + lastName);
    // "Robin Wieruch"
    // with object destructuring
    const { firstName, lastName } = user;
    console.log(firstName + ' ' + lastName);
    // "Robin Wieruch"