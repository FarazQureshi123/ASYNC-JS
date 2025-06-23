//coding do hissso mein ho skti hai, koi code synchrnous ho skta hai, koi code asynchronous ho skta hai 
//aapke code mein sbse pehle synchronous part chlta hai,synchronous code ko js chalati hai main thread pe,kyuki
//js single threaded hai, uska likha hua code chlna chaalu hota hai pahle and main thread occupy hojata hai, aur main thread pe hmesha sbse pehle synchronous code chlega,
//jb yeh pura code finish hoga tb jakr async code ki chlney ki bari ayegi
//js single threaded hai ->js ek operation hi ek time pr kar skti hai 

//thread matlab -> aapke processors mein cores hote hai and har core mein kai saree threads hote hai and har 
//threadek time par ek operation perform kr skta hai 



// console.log("hey");
// setTimeout(function(){
//     console.log("hey2");

// },1000);
// console.log("hey3")


console.log("hey");

setTimeout(function(){
    console.log("hey2");
},0);

Promise.resolve().then(function(){
    console.log("hey3");
});
console.log("hey4");


function abcd(cb){
    cb();
}
abcd(function () {
    console.log("hey2");
})


setTimeout(function(){
    console.log("hey9");
},1200)



