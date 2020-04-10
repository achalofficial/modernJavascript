document.getElementById('button').addEventListener('click',loadData);

function loadData() {
  // Create an XHR Event
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  //console.log('READYSTATE', xhr.readyState);
  

  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  // Optional - Used for Spinner and Loader
  xhr.onprogress = function () {
    console.log(this.responseText);  
  }

  xhr.onload = function(){
    //console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request Error...');
  } 

  xhr.send();

    // readyState Values
    // 0 : Request Not Initialized
    // 1 : server Connection Establised
    // 2 : request recieved
    // 3 : processiong request
    // 4 : request finished and response is ready

  // HTTP Statuses
  // 200 : "OK"
  // 403 : "Forbidden"
  // 404 : "Not Found"
}