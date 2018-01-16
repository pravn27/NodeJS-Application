var square = x => x * x;

console.log(square(9));

var user = {
  name: "Praveen S",
  sayHi: () => {
    console.log(`Hi i m ${this.name}`);
  },
  Hello() {
    console.log(`Hi i m ${this.name}`);
  }
};

user.sayHi();
user.Hello();
