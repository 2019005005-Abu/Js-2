
console.log("I am a full stack web application developer");
var  students=[
    {id:101,name:"Abu Al Shahriar Rifat"},
    {id:102,name:"Abu Al Nesar Rahman"},
    {id:103,name:"Rahim Rahman"},
    {id:104,name:"Karim Khan"},
    {id:105,name:"Rahim Khan"},
]

function studentsName(){
 return students.filter(function(x){
    return x.id>102;
 }).map(function(y){
    return(
        y.name
    )
 })
}
console.log(studentsName());

//using arraowFunction
const student2=()=>students.filter((x)=>x.id>101).map((y)=>y.name);
const student3=()=>students.filter((x)=>x.id>102).map((y)=>y.id);

console.log(student2());
console.log(student3());

//Es6
let numbers=[10,20,30,40,50,60];
let [num1,num2,...z]=numbers;
console.log(num1);
console.log(z);
//array destructure

//swap variables
// let a=10,b=20,temp=0;
// temp=a;
// a=b;
// b=temp;
// console.log("A=",a);
// console.log("B",b);
// [a,b]=[b,a];
// console.log(a,b);
//second method of swapping
// [a,b]=[b,a];
// console.log(a);
// console.log(b);
//object destructure
// const studentsInfo={
//  id:101,
//  fullName:"Anishul Islam",
//  gpa:3.92,
//  language:{
//     native:'Bangla',
//     beginner:'english'
//  }
// }
// console.log(studentsInfo.id);
// console.log(studentsInfo.fullName);
// console.log(studentsInfo.gpa);
// const {id,fullName,gpa,language}=studentsInfo;
// console.log(id);
// console.log(fullName);
// console.log(gpa);
// console.log(language);
//nested object destructure
const biographyInfo={
    id:101,
    fullname:"Abu Al shahriar Rifat",
    gpa:4.00,
    fontEnd_Language:{
        markuplanguage:"HTML",
        stylesheetLanguage:"CSS",
        langaue:"Javascript",
        fontendFramewok_Langauge:"React Js"
    },
    BackEnd_Language:{
        backendeFramework:"Node Js",
        DatabaseManagementSystem:"MongoDB",
    }
    
} 
const {id,fullname,gpa,fontEnd_Language,backendeFramework}=biographyInfo;
console.log(biographyInfo)
//destructuring function parameter
const  ProgrammerProfile={
    ProgrammerID:"2019005005",
    ProgrammerName:"Abu Al Shahriar Rifat"
}

const MyInformation=(ProgrammerProfile)=>{
   console.log(`My Programming-ID=${ProgrammerProfile.ProgrammerID} 
   and MyProgramming-Profile Name =${ProgrammerProfile.ProgrammerName}`)
}
console.log(MyInformation(ProgrammerProfile));
//Array method
var  number=[5,55,14,5,78];
var n1=[34,23,15,45,45,67];
//=>1.Find method
console.log(number);
//=>2.find index method
const firstEventNumber=number.find((x)=>x%2==0);
console.log(firstEventNumber)
const eventNumber=(value,index,array)=>{
   if(value%2==0){
    return value;
   }
}
var firstNumber=n1.find(eventNumber);
console.log(firstNumber)
//find method
const findingODD=(x)=>{
    if(x%2==1){
        return x;
    }
}
const oddNumberIs=n1.find(findingODD);
console.log(oddNumberIs);
//find index method
const findIndexOfOddNumber=(x)=>{
    if(x%2==1){
        return x;
    }
}
const oddIndex=n1.findIndex(findIndexOfOddNumber);
console.log(oddIndex);
//
var  students=[
    {id:101,name:"Abu Al Shahriar Rifat",gpa:3.81},
    {id:102,name:"Abu Al Nesar Rahman",gpa:4.00},
    {id:103,name:"Rahim Rahman",gpa:3.56},
    {id:104,name:"Karim Khan",gpa:3.50},
    {id:105,name:"Rahim Khan",gpa:3.41},
]

console.log(students.find(x=>x.gpa>3.50));
console.log(students.find((x)=>x.gpa>3.50));
//string section
//starts with=>returns true or false=>chack a string ens with another string
const message="Today is friday";
console.log(message.startsWith("Today",0));
//ends with=>returns true or false=>check if a string contaims another string
console.log(message.endsWith("friday",10));
//include  method=>returns true or false
//all string are case sensative
console.log(message.includes("Today"));

//ES6 Modules
// import {text} from './index2.js'
// import {myName,setText,name,MyInfo as myBio} from './index2.js';
// console.log(text);
// console.log(myName);
// console.log(setText());
// console.log(name);
// console.log(myBio());
//=>1.Class
class Students{
   constructor(studentId,StudentName){
      this.studentId=studentId;
      this.studentsName=studentsName;
   } 
   //set function
   set  studentName(name){
     this.name=name;
    }
    set studentSystemId(s_id){
        this.s_id=s_id;
    }
    //get function
    get studentInfo(){
        console.log("My Ssytem-Id is"+this.studentId);
        console.log("My name is "+this.studentName);
    }
}


//=>2.Construtor

//=>3.Object
var s1=new Students(2010995005,"Abu Al Shahriar Rifat");
console.log(s1);
console.log(s1.studentId);
console.log(s1.studentsName);
//=>4.Set
s1.studentName="Abu Al Musrad Rifat";
s1.s_id=2016534439836;
console.log(s1.name)
console.log(s1.s_id);
//=>5.Get
 var s2=new Students(73534242,"Bangladesh");
 console.log(s2.studentInfo);
//Es6 Classes

//Promise ans Async
//1.Synchronous vs Asynchronous
const taskOne=(callback)=>{
    console.log("Task-1");
    callback();
}
const dataLoading=()=>{
    console.log('Task2 .Data Loading');
}
const taskTwo=(callBack)=>{
    setTimeout(()=>{
      console.log("Task 2 Data Loading");
      callBack()
    },3000);
}
const taskThree=(callback)=>{
    callback();
    console.log("Task-3");
}
const taskFour=(callaback)=>{
     callaback();
    console.log("Task-4");
}

const taskFive=()=>{
    console.log("Task-5");
}
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
             taskFour(()=>{
                taskFive();
             })
        })
    });
})
console.log("Hi");
document.querySelector("button").addEventListener("click",()=>{
  console.log("Buttin is clicked");
})
console.log("Thanks for calling");
//2.Callback ,higher-order function
function square(x){
  console.log(`The square of ${x} is = ${x*x}`);
}
const y=square;
console.log(y(5));
function HigherOrderFunction(number,callBack){
     callBack(number);
}
HigherOrderFunction(6,square)
console.log("Hi");
document.querySelector("button").addEventListener("click",()=>{
  console.log("Buttin is clicked");
})
console.log("Thanks for calling");
//3.Promise
console.log("Welcome to the the Javascript Programming");
//how to create a promise pending
const promise1=new Promise((resolve,reject)=>{
  let completedPromsie=false;
   if(completedPromsie){
    resolve("The task is completed-1");
   }else{
    reject(new Error("The task is not  completed-1"));
   }
})
console.log(promise1);


// promise1.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err.message);
// })
console.log("Promise is ending");

const promise2=new Promise((resolve,reject)=>{
    resolve('completed promise');
})

// promise2.then((response)=>{
//    console.log(response);
// }).catch((err)=>{
//     console.log(err.message);
// })
Promise.all([promise1,promise2]).then(([response1,response2])=>{
     console.log(response1,response2);
}).catch((err)=>{console.log(err.message)});


//using  setTimeOut Function


 const promise3=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("Promise 3 is calling");
   },3000)
 })

 Promise.race([promise1,promise2]).then((response1,response2)=>{
    console.log(response1,response2);
 }).catch((err)=>{
    console.log(err.message)
 })
///////////////////////////////////////
console.log("Task-1 is stating from here");
const task1=()=>{
    return new Promise((resolve,reject)=>{
        resolve("T-1 is completed")
    })
}
const task2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("T-2 is completed")
        },1000)
    })
}
const task3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("T-3 is completed");
        },2000)
       
    })
}
const task4=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("T-4 is completed")
        },3000);
        
    })
}
const task5=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("T-5 is completed")
        },4000);
        
    })
}
//async wait

task1().then((response)=>{console.log(response)})
.then(task2)
.then((response)=>{console.log(response)})
.then(task3)
.then((response)=>console.log(response))
.then(task4)
.then((response)=>{console.log(response)})
.then(task5)
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err.message)});
console.log('Task-5 is ending from here');



