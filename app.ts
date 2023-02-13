const add = (num1: number, num2: number) => {
  return num1 + num2;
};
const n1 = 5,
  n2 = 8;
// console.log("add", add(n1, n2));

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "T",
  age: 20,
  hobbies: ["Sports"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("ADMIN", Role.ADMIN);
}

// function type that return a number variable that holds a function
let combineValue: (a: number, b: number) => number;
combineValue = (a, b) => a + b;
// console.log("here", combineValue(33, 33));

class Department {
  private employees: string[] = [];
  // protected employees: string[] = [];
  constructor(public name: string, private readonly id: string) {
    // this.name = name;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department("Accounting", "retreat");
accounting.addEmployee("voisin");
console.log("accounting", accounting);

class It extends Department {
  get departmentIt() {
    if (this.admins) {
      return this.admins;
    }
    throw new Error("No IT");
  }
  set departmentSetter(value: string) {
    if (value) {
      this.admins.push(value);
    }
  }
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  addAdmins(admin: string) {
    this.admins.push(admin);
  }
}

const ItDep = new It("bred", ["Max"]);
ItDep.addEmployee("Siri");
ItDep.addAdmins("Siri");
ItDep.departmentSetter = "karim";
console.log("ItDep", ItDep);
