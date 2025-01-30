interface Teacher {
    readonly firstName: string;
    readonly lastName: string;


    fullTimeEmployee: boolean;
    location: string;

    yearsOfExperience?: number;
    [key: string]: any;
}
const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    yearsOfExperience: 5,
    contract: true,
};
interface Directors extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(teacher1);
console.log(director1);
console.log("The scrit of Typescript is running !");
