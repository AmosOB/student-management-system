"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classroom_1 = __importDefault(require("./Classroom"));
//create instance of the Classroom class
const classroom = new Classroom_1.default();
//add students on the classroom class
const student1 = { id: 1, name: "Josh Opondo", grade: "B-", hasPassed: true };
const student2 = { id: 2, name: "Kioko Mutua", grade: "D-", hasPassed: false };
const student3 = { id: 3, name: "Pheneaus Tong", grade: "A", hasPassed: true };
classroom.addStudent(student1);
classroom.addStudent(student2);
classroom.addStudent(student3);
console.log("List of students:");
classroom.listStudent();
classroom.removeStudent(2);
console.log("List of students after removal:");
classroom.listStudent();
