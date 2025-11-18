1.What is the use of the keyof keyword in TypeScript? Provide an example.
Answer: keyof কোনো অবজেক্ট টাইপের সবগুলো key–এর নামকে একটি union টাইপে রূপান্তর করে।

type Book = {
  title: string;
  pages: number;
};

type BookKeys = keyof Book;

function getValue(book: Book, key: BookKeys) {
  return book[key];
}

getValue({ title: "TS Guide", pages: 120 }, "title");

2. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Answer: Enum হলো TypeScript এর বিশেষ ফিচার যা কিছু নামকৃত কনস্ট্যান্ট তৈরি করতে ব্যবহার করা হয়।

numeric:
enum Direction {
  Up = 1, 
  Down = 2,    
  Left = 3,    
  Right = 4,   
}

console.log(Direction.Left); 


string:
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
   



3. Provide an example of using union and intersection types in TypeScript.
Answer: নিচে  union type এবং  intersection type এর  উদাহরণ  দেওয়া হলো:
Union Type:

function printId(id: string | number) {
  console.log("Your ID is:", id);
}

printId(101);
printId("A-202");

intersection type:

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Karim",
  employeeId: 1001,
};


