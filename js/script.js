// 1. oop

const PersonInfo = function (fname, byear) {
  console.log(this);
  this.fisrtName = fname;
  this.birthYear = byear;
};

// console.log(PersonInfo.prototype);

PersonInfo.prototype.printAge = function () {
  console.log(2025 - this.birthYear);
};

const infoObj = new PersonInfo("nini", 1990);
console.log(infoObj);

const infoObj2 = new PersonInfo("nika", 1993);
console.log(infoObj2);

infoObj.printAge();
infoObj2.printAge();

//
// class expression
// const Person = class {

// }

// class declaration
class PersonNew {
  constructor(fisrtName, birthYear) {
    this.userfName = fisrtName;
    this.userbYear = birthYear;
  }
  getAge() {
    console.log(2025 - this.userbYear);
  }
}

const infoNew3 = new PersonNew("anna", 2012);
console.log(infoNew3);

const infoNew4 = new PersonNew("luka", 2002);
console.log(infoNew4);

infoNew3.getAge();
infoNew4.getAge();

//npm

//axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // handle success
    console.log(response.data);
    let h2Title = document.createElement("h2");
    h2Title.textContent = response.data[0].name;
    document.getElementById("api").appendChild(h2Title);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
