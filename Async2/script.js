//sync -> callstack -> mainthreadexecution
//async -> webAPI -> callback queue -> (callstackempty) -> callstack -> main thread

// function getDetails(username,cb){
//   setTimeout(function(){
//     console.log("sending the request to instagram")
//   },1000);

//   setTimeout(function(){
//     console.log("fetching data...")
//   },3000);
//   setTimeout(function(){
//     cb();

//   },6000);
// }

// getDetails("harshvandanasharma",function(){
//     console.log("data saved in gallery.  ")
// })



// function stepOne(cb){
//     console.log("step1");
//     cb();
// }
// function stepTwo(cb){
//     console.log("step2");
//     cb();
// }
// function stepThree(cb){
//  console.log("step3");
//  cb();
// }

// stepOne(()=>{
//  stepTwo(()=>{
//     stepThree(()=>{
//         console.log("all steps called")
//     })
//  })
// })


//server ka code jb bhi server ke liye hoga usually wo async nahi hoga par jab bhi request
//kahi aur jayeegi wo kab tk tak response layegi ka bharosa nhi hai 


const pr = new Promise(function(res,rej){
    console.log("instagram jao data lao");
    console.log("instagram mai data collect ho rha hai ");
    console.log("instagram mein data collect mein error  aya");
    console.log("instagram data");
        rej();
})

pr.then(function(){
    console.log("resolved")
}).catch(function(){
    console.log("rejectd");
});



function stepOne(cb){
    console.log("step1");
    cb();
}
function stepTwo(cb){
    console.log("step2");
    cb();
}
function stepThree(cb){
    console.log("step3");
    cb();
}

stepOne(()=>{
    stepTwo(()=>{
        stepThree(()=>{
            console.log("all steps completed");
        })
    })
})




