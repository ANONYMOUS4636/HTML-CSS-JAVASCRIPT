class parent{
    hello(){
        console.log('hello');
        
    }
}

class child extends parent{}

child.hello;  //works


class person{
    constructor(name){
        console.log('constructor');
        this.name=name
        
    }
    eat(){
        console.log('eats');
        
    }
    sleeps(){
        console.log('sleeps');
        
    }
    work(){
        console.log('do nothing');
        
    }
}

class engineer extends person{
    constructor(name){
        super(name);//to invoke parent class constructor and to pass imp info to the parent class
        this.isHappy="y/n"
    }
    work(){
        super.eat();//call the parent eat method
        //we cannot acces parent method in the child class we have to use the super keyword
        //the object can call the parent class methods
        console.log('solve problems');
        
    }
}

let dattatraya=new engineer("dattatraya");






// class person{
//     constructor(){
//         console.log('enter parent constructor');
//         this.species="homo-sapiens"
//         console.log('exit parent constructor');
        
//     }
//     eat(){
//         console.log('eats');
        
//     }
//     sleeps(){
//         console.log('sleeps');
        
//     }
//     work(){
//         console.log('do nothing');
        
//     }
// }

// class engineer extends person{
//     constructor(){
    // console.log('enter child constructor');
    //         super();//to invoke parent class constructor
    //         this.isHappy="y/n"
    // console.log('exit child constructor');
//     }
//     work(){
//         console.log('solve problems');
        
//     }
// }

// let dattatraya=new engineer();