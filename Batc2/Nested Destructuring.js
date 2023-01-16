const user = {
    firstName: 'Robin',
    pet: {
    name: 'Trixi',
    },
    };
    // without object destructuring
    const firstName = user.firstName;
    const name = user.pet.name;
    console.log(firstName + ' has a pet called ' + name);
    // "Robin has a pet called Trixi"
    // with nested object destructuring
    const {
    firstName,
    pet: {
    name,
    },
    } = user;
    console.log(firstName + ' has a pet called ' + name);