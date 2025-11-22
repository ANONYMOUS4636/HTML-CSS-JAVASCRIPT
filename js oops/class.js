class fortunerCar{ // it is basically a template or precisely a form where different person can fill the form and the different persons are the objects
    //when a constuctor is not created the js automatically creates it

    constructor(brand,milage){
        console.log('initializing constructor in object');
        this.brand=brand;
        this.milage=milage;
        
    }
    start(){
        console.log('start');
    }

    stop(){
        console.log('stop');
        
    }

    // setBrand(brand){
    //     this.brandName=brand;// this refers to the object which calls it
    // }
}// type of fortunerCar is function


let fortuner=new fortunerCar("fortuner",10);//here new keyword is used to create a object through class
// fortuner.start()
// fortuner.stop()
// fortuner.setBrand("fortuner") //this basically sets the property of the object fortuner
let lexus=new fortunerCar("lexus",12);
// lexus.setBrand("lexus😒")

//type of fortuner is object

//so the properties and methord of the class are stored in the object fortuner and lexus