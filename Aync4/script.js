function getUserInfo(){
    return new Promise((res,rej)=>{
   setTimeout(function(){
    res({id:1,name:"harsh"});
   },1000)
 });
}

function getUserPics(id){
    return new Promise(function(res,rej){
        res(["pic1","pic2"])
    })
}



function getUserPics(id){
    return new Promise(function(res,rej){
        setTimeout(function(){
            res(["pic1","pic2"]);
        },1000)
    });
}

getUserInfo().then(function (data){
    console.log(data);
   return getUserpics(data.id)
}).then(function(data){
    console.log(data);
})  


//fetch

// document.querySelector("button").addEventListener("click",function(){
//     fetch("https://api.github.com/users/async")
//     .then((raw) => raw.json())
//     .then((data) =>{
//         console.log(data);
//     })
// })


