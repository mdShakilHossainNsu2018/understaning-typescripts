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

// class Person {
//     name: string;
//     // private type: string;
//     // protected age: number;
//
//     constructor(name: string, public userName: string){
//         this.name = name;
//     }
//
//     info(){
//         return this.name + this.userName;
//     }
// }
//
//
// let person = new Person('shalil', 'shakilnsu2018');
// console.log(person);
//
// class Shakil extends Person{
//     constructor(userName: string){
//         super("Sh", userName)
//     }
//
// }
//
// let newInharit = new Shakil("got to s");
// console.log(newInharit);
//
// class Plants {
//     private _spacis: string = "Default";
//     get spacis(): string {
//         return this._spacis;
//     }
//
//     set spacis(value: string) {
//         if (value.length >= 3){
//             this._spacis = value;
//         }else {
//             this._spacis = "Default";
//         }
//
//     }
//
//
// }
//
// let plants = new Plants();
// console.log(plants.spacis);
// plants.spacis = "da";
// console.log(plants.spacis);
//
// plants.spacis = "dadssda";
// console.log(plants.spacis);

// Static mathod

// class Helper {
//     static PI = 3.14;
//     static cercumfarance(value: number): number {
//         return this.PI * value;
//     }
//
// }
//
// console.log(Helper.PI);
// console.log(Helper.cercumfarance(32));

//abstract class

// abstract class Project {
//     name: string = "Default";
//     budget: number = 1000;
//     abstract changeName(name: string): void;
//
//     calcBudget(){
//         return this.budget;
//     }
// }
//
// class ItPro extends Project{
//     changeName(name: string): void {
//         this.name = name;
//     }
// }
//
// let newp = new ItPro();
// console.log(newp);
// newp.changeName("not Default");
// console.log(newp);


// tsc app.ts --outFile app.js todo: console cmd

// ///<reference path="CircleCurcomf.ts"/>
// ///<reference path="rectangleArea.ts"/>
//
// console.log(MyMath.calculateCurcomfarance(32));
// console.log(MyMath.caluculateRect(32, 32));

//
// interfate
//

// interface NamedPerson {
//     firstName: string;
//     age?: number; // with the question mark the age is now optional
//     [porpName: string] : any;
//     greating(lastname: string): void;
// }
//
//
// function nameed(Person: NamedPerson) {
//     return Person.firstName;
// }
//
// function changeName(Person: NamedPerson) {
//     Person.firstName = "ok nul";
// }
//
// const Person: NamedPerson = {
//     firstName: "shkil",
//     age: 23,
//     propName: ["go adsa", "dskdfla"],
//     greating(lastname: string): void {
//         console.log(`first ${this.firstName} and last name ${lastname}`);
//     }
// };
//
// // console.log(nameed({firstName: "shakil", age: 23}));
// changeName(Person);
// console.log(nameed(Person));
// Person.greating("hossain")
//
//
// class myPerosn implements NamedPerson{
//     age: number;
//     firstName: string;
//     lastName: string;
//
//     greating(lastname: string): void {
//         console.log(`hello this is from class first ${this.firstName} and last name ${lastname}`);
//     }
//
// }
//
// let person = new myPerosn();
// person.firstName = "class";
// person.lastName = "anything";
// person.greating(person.lastName);

// funtion type inhatance

// interface Type {
//     (number1: number, number2: number): number;
// }
//
// let doublefuc: Type;
//
// doublefuc = function(number1: number, number2: number){
//   return (number1+number2)*2;
// };
//
// console.log(doublefuc(3,3));

//
// todo: Generic type
//

// sample generic type
//
// function sample(value: any) {
//     return value;
// }
//
// console.log(sample("jfldakf").length);
// // console.log(sample(23).length); undefine
// console.log(sample(23));
// console.log(sample({name:"jfldakf", age: 32 }));
//
// // sample better type
//
// function better<T>(value: T) {
//     return value;
// }
// console.log(better("jfldakf").length);
// // console.log(better(23).length); undefine
// console.log(better(23));
// console.log(better({name:"jfldakf", age: 32 }));
//
// // builtin type
//
// const butilt: Array<number>= [32, 32];
// butilt.push(-32);
// console.log(butilt);
//
// // Array
//
// function printAll<T>(args: T[]) {
//     args.forEach(el => console.log(el));
// }
//
// printAll<string>(["dsd", "dsd"]);

// class MyMap<T> {
//     private map: {[key: string]: T} = {};
//
//     setItem(key: string, item: T){
//         this.map[key] = item;
//     }
//
//     getItem(key:string){
//         return this.map[key];
//     }
//
//     clear(){
//         this.map = {}
//     }
//
//     print(){
//         for (let key in this.map){
//             console.log(key, this.map[key]);
//         }
//     }
// }
//
// const Mymap = new MyMap<number>();
// Mymap.setItem("app", 1);
// Mymap.setItem("afdaspp", 2);
// Mymap.setItem("appfadfafvg", 3);
// console.log(Mymap.getItem("app"))
// Mymap.print();

/*
//Decorator
*/

// function loged(constructorFnc: Function) {
//     console.log(constructorFnc);
// }
//
// @loged
// class Decorator {
//     constructor(){
//         console.log("hi");
//     }
// }
//
// function logging(value: boolean) {
//     return value ? loged : null;
// }
// @logging(true)
// class Car {
//
// }

// Advanced

// function printable(constructorFn: Function) {
//     constructorFn.prototype.print = function () {
//         console.log(this);
//     }
// }
//
// @printable
// class Car {
//     name = "shakil"
// }
//
// let obj = new Car();
// (<any>obj).print();

// method decorator
//
// function access(value: boolean) {
//     return function (tergat: any, propName: string, directior: PropertyDescriptor) {
//         directior.writable = value;
//     }
//
// }
//
// class Project {
//     projectName: string;
//     constructor(Name: string){
//         this.projectName = Name;
//     }
//     @access(false)
//     calcBudget(){
//         console.log(1000);
//     }
// }
//
//
// const pro = new Project("IT");
//
// pro.calcBudget();
// //
// // pro.calcBudget = function () {
// //     console.log(2000);
// // };
//
// pro.calcBudget();
//
// console.log("working");


// thirdParty Library

// import 'js';
//
//

$("#app").css({'background-color': 'blue'});
console.log("working");

