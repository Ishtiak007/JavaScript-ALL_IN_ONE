//onload(), onerror()  -event
//property - response, responseText, responseType, responseURL, status, ststusText
//function - open(), send(), setRequentHeader()

const makeRequest =(method,url,data) =>{
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('content-Type','application/json')
    xhr.onload =()=>{
        let data = xhr.response;
        console.log(JSON.parse(data))
    }
    xhr.onerror = () =>{
        console.log('error is here');
    }
    xhr,send(JSON.stringify(data));
    })
}
const getData = ()=> {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
}
const sendData = ()=> {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title : 'foo',
        body : 'bar',
        useID : 1,
    });
}
const updateData = ()=> {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts/1',{
        id : 1,
        title : 'fooMA',
        body : 'barMA',
        useerId : 1,
    });
}
const updateSingleData = ()=> {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{        
        title : 'This is change',
        
    });
}
const deleteData = ()=> {
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}
deleteData();
