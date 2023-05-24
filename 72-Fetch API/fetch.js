// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
//fetch() has replaced XMLHttpRequest
//fetch() -global method for making HTTP Request
//2 ways to call - than, async await

//+ fetch() is easy to use compare to XMLHttpRequest
//+ fetch() reyurns a promise
//- returned promise can only handle network error
//- does not support all the older browser

// console.clear();
// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     header:{
//         "Content-type":"application/json; charset=UTF-8",
//     },
//     body : JSON.stringify({
//         id: 1,
//      title : "fooMA",
//      body: "barMA",
//      userId: 1,   
//     }),
// }).then((res) => {
//     if(!res.ok){
//         const message =`Error : ${res.status}`
//         throw new Error(message)
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err)=>console.log(err));



const makeRequest = async(URL,config) =>{
    const res = await fetch(URL,config);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}
const getData =() =>{
    makeRequest('https://kasonplaceholder.typeicode.com/posts')
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
getData();