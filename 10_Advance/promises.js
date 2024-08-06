// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();

//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("Promise Consumed");
// })

//Promise 2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
// console.log("Async 2 resolved");
// })

// Promise 3

// const promiseThree = new Promise(function(resolve, reject){
// resolve({Name:"Harsh", Email:"harsh@yahoo.in"})
// },1000)

// promiseThree.then(function(user){
//     console.log(user);
// })

// Promise 4

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Vaibhav", password: "123" });
//         }
//         else {
//             console.log("Error: something went wrong");
//         }
//     })
// }, 1000)

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// })

//Promise 5

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// new ckzngzljgnxgljbz

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))   