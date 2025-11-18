function formatValue (value : any){

    if (typeof value === 'number') {
        return value*10;
    }
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'boolean') {
        return !value;
    }
}



function getLength (input : string | any[]) : number {
    return input.length;
}



class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}




interface Books {
    title: string;
    rating: number;
}

function filterByRating(books: Books[]): Books[] {

    const min = 4.0;
    return books.filter(movie => movie.rating >= min);
}





interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[]{
    return users.filter(user => user.isActive);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
     console.log(`Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${book.isAvailable?'Yes':'No'}`);
    ;
}





function getUniqueValues(arr1: number[], arr2: number[] ): number[] {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
}





interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number{
    const total = products.reduce((total, product) => {
        const discount = product.discount ? (product.price * product.discount) / 100 : 0;
        const finalPrice = product.price - discount;
         const result = total + finalPrice * product.quantity;

         return result;
    }, 0);

    return total;   
}





