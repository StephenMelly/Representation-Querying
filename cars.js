//create class
class Vehicle
{
   //create constructor with 3 arguments 
 constructor(make, model, year){
   //3 arguments created  
    this.make = make;
    this.model = model;
    this.year = year;
 }   
//create method
 Information(){
//log arguments to console from method     
    console.log(`make: ${this.make}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
 }
}

//extends - brings in functionality into the class - imherits from Vehicle Class
class Cars extends Vehicle
//cars class constructor
{
    constructor(make, model, year, doors){
        //super used to call parents objects/arguments
        super(make, model, year);
        this.doors = doors;
    }
//call method
    Information(){
// retrieve parent methods data        
    super.Information();
    console.log(`Doors: ${this.doors}`);
}
}
//create instance of class, out put will display car details
let myCar = new Cars(`BMW`,`3series`,1998, 5);
myCar.Information();
