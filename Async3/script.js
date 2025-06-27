// function StepOne(){
//     return new Promise((res,rej)=>{
//         console.log("step1");
//         res();
//     })
// }

// function StepTwo(){
//     return new Promise((res,rej)=>{
//         console.log("step2");
//         res();
//     })
// }
// function StepThree(){
//     return new Promise((res,rej)=>{
//         console.log("step3");
//         res();
//     })
// }


// StepOne().then(StepTwo).then(StepThree).then(function(){
//     console.log("done all  steps");
// })



//Tasks 
// 1.Simulate a Food Delivery 
//Create a function orderFood that returns  a Promise. It should resolve after 
//seconds with "Pizza delivery!!!"..

//Bonus : Add a chance to reject with "Delivery Failed". 


// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let chance = Math.random()< 0.7;
//             if(chance) res();
//             else rej();
         
//         },2000)
//     })
// }

// orderFood().then(function(){
//     console.log("Pizza Deliverd!!!");
// }).catch(function(){
//     console.log("Delivery Failed!!!")
// })


// //Task 2.Chained Promises : User -> Posts -> Comments

// //1.Create getUser() -> resolves with {id : 1, name:"Harsh"}
// //2.getPosts(userId) -> resolves with list of post titles
// //3.getComments(postsId) -> resolves with Comments
// //chain them together using .then() and log the final output

// function getUser(){
//     return new Promise((res,rej)=>{
//         setTimeout(function(){
//             res({id:1,name:"Harsh"});
//         },1000);
//     });
// }



// function getPosts(userId){
//     return new Promise((res,rej)=>{
//         setTimeout(function (){
//            res(["title 1","title 2"]);
//         },1000)
     
//     });
// }

// function getComments(postId){
//     return new Promise((res,rej)=>{
//         setTimeout(function (){
//             res(["great post","amazing content","you rocked"]);
//         },1000)
//     })
// }


// getUser().then(function (data){
//     console.log(data);
//     return getPosts(data.id);
// })
// .then(function (cmts){
//     console.log(cmts);
// }).finally(function (){
//     console.log("all data fetched")
// });


function fakeApiCall(endpoint){
    const data = {
        users : ["harsh","shivam","raghav"],
        posts: ["hey champs","great going everyone","let's build this"],
    };
    let delay = Math.random() * 2000 + 1000;
    return new Promise(function(res,rej){
        setTimeout(function(){
            res(data[endpoint]);
        }, delay);
    });
}


fakeApiCall("users").then(function(data){
    console.log(data);
});








