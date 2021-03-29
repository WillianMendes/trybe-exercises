const newEmployees = (createEmployee) => {
    return {
        id1: createEmployee('Pedro Guerra'),
        id2: createEmployee('Luiza Drummond'),
        id3: createEmployee('Carla Paiva')
    };
};

const createEmployee = (nameEmployee) => {
    return {
        fullName: nameEmployee,
        email: createEmail(nameEmployee)
    };
}

const createEmail = (fullName) => {
    const mailName = fullName.toLowerCase().replace(' ', '_');
    return mailName + '@trybe.com'
}

console.log(newEmployees(createEmployee));