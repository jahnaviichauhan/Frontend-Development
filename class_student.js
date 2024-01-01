class Student {
  constructor(name, roll_no, grade) {
    this.name = name;
    this.roll_no = roll_no;
    this.grade = grade;
  }
}

// Create objects of the Student class
const student1 = new Student("vanshika", 88, "o");
const student2 = new Student("manya", 77, "A");
const student3 = new Student("vansh", 103, "C");
const student4 = new Student("David", 104, "A");
const student5 = new Student("Eve", 105, "B");

// Access object properties
console.log(student1.name, student1.roll_no, student1.grade);
console.log(student2.name, student2.roll_no, student2.grade);
console.log(student3.name, student3.roll_no, student3.grade);
console.log(student4.name, student4.roll_no, student4.grade);
console.log(student5.name, student5.roll_no, student5.grade);
