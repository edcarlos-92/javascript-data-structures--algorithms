//Data Structures ES2015 Class Syntax
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your Fullname is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'You are Expelled !!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    //let sum this.scores += this.scores / this.scores.length;
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return `The Total Score is ${Math.floor(sum / this.scores.length)}`;
  }

  static EnrollStudents() {
    return 'ENROLLING STUDENTS!';
  }
}

let firstStudent = new Student('Kofi', 'Mensah', 3);
let secondStudent = new Student('Akua', 'Fosu', 5);

//firstStudent.fullName();
firstStudent.markLate();
//firstStudent.addScore(94);
//Student.EnrollStudents();
