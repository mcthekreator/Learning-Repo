//Declaring a Variable
var firstName;
let middleName;
//NB const variable without initialized is not allowed

// initializing a variable
var firstName = "paul";
let middleName = "Daniel";
const lastName = "Thomas"

// Primitive Data Types (String, Number, Boolean, undefined, null)
let name = "paul"; // (string literal)
let age = 30; // (Number literal)
let isApproved = false; // (Boolean literal)
let courseName  = undefined; // NB: by default a value of a declared variable is undefined but in cases you want to explicitly assign undefined.
let selectedColor = null;//

// Reference Types (Objects, Array, Function)

// OBJECTS (collection of key value pairs)

// Object syntax
let person = {
    name: "paul",
    age: 30,
};
// NB: name is the key and "paul" is the value, together they are known as property. i.e. name and age are properties of the object person

// reading and reassigning values of the properties in an object

// using DOT NOTATION
console.log(person.name);  //reading values
person.age = 50; // reassigning value of object

// using BRACKET NOTATION
person["name"] = "Derrick";
console.log(person["age"]);

//ARRAYS
let selectedColors = ["red", "blue"];

// FUNCTION  (set of statement that perform a specific task)

// function declaration
function greet(){
    console.log("Hello World");
}
greet();



circular dependancy happens when one class depends on another class and this can
happen between providers and modules, which can eventual make the dpendancy inject system fail
because the necessary metadata for the classess or modules wont be avaliable at the time of instabtiation

There are ways where circular depensancy can be resolve and its by using
1. uisng the forwardRef() ultility from the nestjs/common package
and how it work is that, by using the forwardRef(), it delays the resolution of a
provider until both sides of the depenancy relationships are avaliable. A forward
reference allows Nest to reference classes which arent yet defined using the
forwardRef() utility function. For example, if CatsService and CommonService depend
on each other, both sides of the relationship can use @Inject() and the forwardRef()
utility to resolve the circular dependency.

    2. Another way to resolve circular dependencies is by using the ModuleRef class,
which allows you to manually retrieve a provider instance from the Dependency Injection (DI) container.
    and it involves decoupling the direct injection of the service and using ModuleRef to get the instance
when needed. nest actually define this to be a bit more comeplex but provides more control over the DI process.



import { ModuleRef } from '@nestjs/core';

@Injectable()
export class CatsService {
    constructor(private moduleRef: ModuleRef) {}

private commonService: CommonService;

onModuleInit() {
    this.commonService = this.moduleRef.get(CommonService, { strict: false });
}
}
Explanation: Instead of injecting CommonService directly into CatsService,
    the ModuleRef is used to retrieve the instance manually. This allows NestJS to handle
the circular reference without having to use forwardRef(), but it's more explicit and can be useful ' +
'in complex scenarios where services have more specific initialization logic.

