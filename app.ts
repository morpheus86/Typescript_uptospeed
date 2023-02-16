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

abstract class Department {
  private employees: string[] = [];
  // protected employees: string[] = [];
  constructor(public name: string, private readonly id: string) {
    // this.name = name;
  }
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

// const accounting = new Department("Accounting", "retreat");
// accounting.addEmployee("voisin");
// console.log("accounting", accounting);

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
  describe() {
    console.log("It department");
  }
}

const ItDep = new It("bred", ["Max"]);
ItDep.addEmployee("Siri");
ItDep.addAdmins("Siri");
ItDep.departmentSetter = "karim";
// console.log("ItDep", ItDep);
function Autobind(
  target: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjDesc: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDesc;
}
class Printer {
  message = "This works!!";
  @Autobind
  showmessage() {
    console.log(this.message);
  }
}
const pde = new Printer();
const newButton = document.querySelector("button")!;
newButton.addEventListener("click", pde.showmessage);

interface ValidateConfig {
  [property: string]: {
    [validateProp: string]: string[];
  };
}
const registeredValidators: ValidateConfig = {};
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}
function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  let isValid = true;
  if (!objectValidatorConfig) {
    return true;
  }
  for (const key in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[key]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[key];
          break;
        case "positive":
          isValid = isValid && obj[key] > 0;
          break;
      }
    }
  }
  console.log("isValid", isValid);
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid Input, please Try again");
    return;
  }
  console.log("createdCourse", createdCourse);
});
