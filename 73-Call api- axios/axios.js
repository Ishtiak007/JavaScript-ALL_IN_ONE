//4 ways to call api - XMLttpRequest, fetch, axios, jquery
//axios is a js library
//it helps to make request from browser(plain js/Vue/React/Angular),node.js


// + very easy to use
// + it supports all modern browser includinf IE
// + throws error brilliantly
// + No need to set header cause axios is intelligent


//axios(config)
//axios(url [,config])
//axios.get(url [,config])
//axios.post(url [,config])
//axios.patch(url [,config])
//axios.delete(url [,config])

//axios returns response object - data, status, statusText, headers, config

console.clear();



//post method
axios.post("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        title : "foo",
        body:"bar",
        userId:1,
    }),
})



//put method
axios.put("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",
    body:JSON.stringify({
        id:1,
        title : "fooMA",
        body:"barMA",
        userId:1,
    }),
})



//patch method
axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
    
    body:JSON.stringify({
        
        body:"barMAsdfewfew",
        
    }),
})




//delete method
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=> console.log(res.data))
.catch((err)=> console.log(err));
