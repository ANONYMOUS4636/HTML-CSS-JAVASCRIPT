const student={
    name:"Dattatraya",
    marks:94.5,
    printMarks:function(){
        console.log('marks=',this.marks);//this keyword is used to refer to this object, this means student.marks
        
    }
}
// const student={
//     name:"Dattatraya",
//     marks:94.5,
//     printMarks(){ //this can also be true
//         console.log('marks=',this.marks);//this keyword is used to refer to this object, this means student.marks
        
//     }
// }


let arr=["apple","mango","banana"]
arr.push("lichi")//every array has its prototype object. .push()we didnt defint the function push but it is availablr in the array prototype object and these are  built in. the current array is inheriting these rrays
console.log(arr);

let employee={
    salary(){
        console.log('salary');
        
    }
}

let arjun={
    salary(){
        console.log('salary2');//here when object has same method as prototype then it will use its own method then the prototype method
        
    }
}

arjun.__proto__=employee;