//just for a simple get req we write this much code AJAX

var xhr = new XMLHttpRequest();
xhr.open('GET','https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = function(){
console.log(xhr.response);
};

xhr.onerror = function(){
console.log('err');
};

xhr.send();
