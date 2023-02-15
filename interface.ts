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

// const f = new MyFriend("bol");

// Intersection type=> combine type and make sure type contain the type require

type Employee = {
  name: string;
  privileges: string[] | [];
};

type Started = {
  startDate: Date;
};

type Combine = Employee & Started;

const employee: Combine = {
  name: "voila",
  privileges: [],
  startDate: new Date(),
};

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  groundSpeed: number;
}

type Animal = Bird | Horse;

const runningAnimal = (animal: Animal) => {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.groundSpeed;
      break;
  }
  console.log("speed", speed);
};

const userInput = document.getElementById("user-input");
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi There";
}

interface ErrorObject {
  [prop: string]: string;
}

const errorBag: ErrorObject = {
  email: "Not a Valid email",
};

const fetchedUser = {
  id: "u1",
  job: {
    title: "CEO",
    description: "Yes",
  },
};

console.log("fetchedUser", fetchedUser?.job?.title);
