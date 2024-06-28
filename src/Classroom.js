"use strict";
//Classroom class with interface from Student
Object.defineProperty(exports, "__esModule", { value: true });
class Classroom {
    constructor() {
        this.students = [];
    }
    //add students using Student interface 
    addStudent(student) {
        this.students.push(student);
    }
    //remove students using id
    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
    //lIST available students
    listStudent() {
        this.students.forEach(student => {
            console.log(`ID: ${student.id}, NAME: ${student.name}, GRADE: ${student.grade}, HAS PASSED: ${student.hasPassed}`);
        });
    }
}
//export the Classroom class
exports.default = Classroom;
