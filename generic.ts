const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("voila")
//   }, 2000);
// }

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}
const mergeObj = merge({ name: "hi" }, { age: 30 });
console.log("mergeObj()", mergeObj);

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T) {
  let description = "got no length.";
  if (description.length === 1) {
    description = "Got 1 element";
  }
  return [element, description];
}

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

// interface Tra {
//   name: string;
//   age: number;
//   occupation: string;
// }
const objectItem = new DataStorage<string>();
// const indiv = {
//   name: "max",
//   age: 33,
//   occupation: "web dev",
// };
objectItem.addItem("Max");
objectItem.addItem("Manu");
objectItem.removeItem("Max");
// console.log("objectItem.get", objectItem.getItems());

// Decorators

function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log("target", target);
  };
}
function Display(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const element = document.getElementById(hookId);
        if (element) {
          element.innerHTML = template;
          element.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
@Display("<h1>My custom Decorator</h1>", "person")
class PridePerson {
  name = "Max";
  constructor() {
    console.log("first");
  }
}
// const pid = new PridePerson();

// console.log("pid", pid);
function Log(target: any, propertyName: string | Symbol) {
  console.log("target", target);
  // console.log("propertyName", propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(descriptor);
  // console.log("target2", target, name);
}

function Log3(target: any, name: string, position: number) {
  // console.log("Parameter Decorator");
  // console.log("target", target);
  // console.log("name", name);
  // console.log("position", position);
}
class Product {
  @Log
  @Log2
  set price(val: number) {
    if (this._price > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price");
    }
  }
  constructor(title: string, private _price: number) {}
  taxPrice(@Log3 tax: number) {
    return this._price * (1 + tax);
  }
}
