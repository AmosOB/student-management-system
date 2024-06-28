//Classroom class with interface from Student

import { Student } from "./Student";

class Classroom {
    private students: Student[] = [];

    //add students using Student interface 
    addStudent(student: Student): void {
        this.students.push(student);
    }

    //remove students using id
    removeStudent(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    }

    //lIST available students
    listStudent(): void {
        this.students.forEach(student => {
            console.log(`ID: ${student.id}, NAME: ${student.name}, GRADE: ${student.grade}, HAS PASSED: ${student.hasPassed}`)
        });
    }
}

//export the Classroom class
export default Classroom;