// let myName = "shakil";
// let no: number;
// no = 1;
//
// // array
// let hi = "ok";
// let hobbies: any = ['play', 'pro'];
//
// console.log(hobbies[0]);
// console.log(typeof hobbies);
// hobbies = [32];

// tuples

// let tuples: [string, number] = ["shakil", 1812966642];

// enum
// enum Collor {
//     RED,
//     GREEN,
//     YEOLLOW =100,
//     WHITE
// }
//
// let collor: Collor = Collor.WHITE;
// console.log(collor);

// anyType
//
// let car: any = "bmw";
// console.log(car);
//
// // object
// car = {Model: "bmw", Serise: 20};
// console.log(car);

// let userDate = {
//   name: "shakil",
//   age: 23
// };

// wrong
// userDate = {
//   a: "ns",
//   b: 23,
// };

// userDate = {
//     name: "rakib",
//     age: 23
// };

// // complex object
// type Complex = {date: number[], output: (all: boolean) => number[]};
//
// let complex: Complex = {
//   date: [100, 3.99, 10];
//
//     output: function a (all: boolean): number[] {
//       return this.date
//   }
// };
//
// let complex2: Complex = {
//     date: [100, 3.99, 10];
//
// output: function (all: boolean): number[] {
//     return this.date
// }

// };

// union
//
// let nameInfo: number | string = "shakil";
// nameInfo = 32;
//
// // type chack
//
// let str = "hello";
// if (typeof str === "number"){
//     console.log(str);
// }
//  challange

// type banck = {money: number, diposit: (value: number) => void};
//
// let BankAccount: banck = {
//     money: 200,
//     diposit(value: number): void {
//     this.money += value;
// }
// };
//
// let mySelf: {name: string, BankAccount: banck , hobbis: string[]} = {
//   name: "shakil",
//     BankAccount: BankAccount,
//     hobbis: ["hfal", 'fdafa']
// };
//
// mySelf.BankAccount.diposit(32)

// object orientad programming

class Person {
    name: string;
    // private type: string;
    // protected age: number;

    constructor(name: string, public userName: string){
        this.name = name;
    }

    info(){
        return this.name + this.userName;
    }
}


let person = new Person('shalil', 'shakilnsu2018');
console.log(person);

class Shakil extends Person{
    constructor(userName: string){
        super("Sh", userName)
    }

}

let newInharit = new Shakil("got to s");
console.log(newInharit);

class Plants {
    private _spacis: string = "Default";
    get spacis(): string {
        return this._spacis;
    }

    set spacis(value: string) {
        if (value.length >= 3){
            this._spacis = value;
        }else {
            this._spacis = "Default";
        }

    }


}

let plants = new Plants();
console.log(plants.spacis);
plants.spacis = "da";
console.log(plants.spacis);

plants.spacis = "dadssda";
console.log(plants.spacis);
