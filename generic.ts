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
console.log("objectItem.get", objectItem.getItems());
