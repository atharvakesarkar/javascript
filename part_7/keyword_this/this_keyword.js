// "this" keyword refers to an object that is executing the current piece of code..

const student = {
  name: "Atharva",
  eng: 78,
  maths: 67,
  code: 24,
  getavg() {
    console.log(this);
    let avg = (this.eng + this.maths + this.code) / 3;
    console.log(avg);
  },
};

// console.log(student);
