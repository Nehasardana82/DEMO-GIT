let price:number;
price=100;
console.log(price);
var fullname:String;
fullname=`I have only ${price}.\n Only I can buy one chocolate`;
console.log(fullname);
let k:boolean=true;
console.log(k);
let nulltype=null;// assigning value we can define the type
console.log(typeof(nulltype));
let undefinedtype:undefined;
console.log(typeof(undefinedtype));
let neha:any;
neha="sardana";
neha=40;
let arr:string[]=[];
arr[0]="Node.js";
arr[1]="Angular";
arr[2]="React";
console.log( arr);
arr.push("neha");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("sardana");
console.log(arr);
arr.shift();
console.log(arr);
//interface for objects  used to define type in interface
interface animal{
    name:string;
    legs:number;
    eyes:number;
    habbit:string[];
}
let animal:animal;
animal={
    name:"dog",
    legs:4,
    eyes:2,
    habbit:["eating","dance"]

}
console.log(animal.habbit[0]);
console.log(animal.name);

