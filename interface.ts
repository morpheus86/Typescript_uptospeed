interface Greet {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greet {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(p: string) {
    console.log("p", p);
  }
}
const p = new Person("All");
// console.log("first");
// console.log("users1.greet()", p);

interface Friends {
  readonly name?: string;
  friendLists?: string[];
  getFriends(): void;
}

class MyFriend implements Friends {
  name?: string;

  constructor(n?: string) {
    this.name = n;
  }
  getFriends() {
    console.log("My friends", this);
  }
}

const f = new MyFriend("bol");
console.log("f", f.getFriends());
