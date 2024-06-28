import { Student } from "./Student";
import Classroom from "./Classroom";

//create instance of the Classroom class

const classroom = new Classroom();

//add students on the classroom class
const student1: Student = { id: 1, name: "Josh Opondo", grade: "B-", hasPassed: true };
const student2: Student = { id: 2, name: "Kioko Mutua", grade: "D-", hasPassed: false };
const student3: Student = { id: 3, name: "Pheneaus Tong", grade: "A", hasPassed: true };

classroom.addStudent(student1);
classroom.addStudent(student2);
classroom.addStudent(student3);

console.log("List of students:");
classroom.listStudent();

classroom.removeStudent(2);

console.log("List of students after removal:");
classroom.listStudent();