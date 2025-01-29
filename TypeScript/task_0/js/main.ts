// Définition de l'interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Création des étudiants
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Paris"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
};

// Création du tableau d'étudiants
const studentsList: Student[] = [student1, student2];

// Fonction pour créer et rendre le tableau HTML
function renderTable(): void {
    // Création des éléments du tableau
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Création de l'en-tête du tableau
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    const locationHeader = document.createElement('th');

    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableBody.appendChild(headerRow);

    // Ajout des données pour chaque étudiant
    studentsList.forEach((student: Student) => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

// Appel de la fonction une fois que le document est chargé
document.addEventListener('DOMContentLoaded', renderTable);
