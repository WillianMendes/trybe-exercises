const professionalBoard = [
    {
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
    },
    {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
    },
    {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
    },
];

const searchEmployee = (id, detail) => {
    const professionalFind = professionalBoard.find((professional) => professional.id === id);
    if (professionalFind === undefined) return "ID não identificada";

    const professional = {};
    for (const detailElement of detail) {
        professional[detailElement] = professionalFind[detailElement];
        if (professional[detailElement] === undefined) return 'Informação indisponível';
    }

    return professional;
};

module.exports = searchEmployee;