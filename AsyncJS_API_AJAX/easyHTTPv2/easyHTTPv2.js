/**
 * EasyHTTP Library
 * Library for making HTTP Request
 * 
 * @version 2.0.0
 * @author Achal
 * @license MIT
 * 
 **/

 class EasyHTTP {
  // Make a HTTP GET request 
  get (url) {
    return new Promise( (resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
   }

   // Make an HTTP Post request
   post (url, data) {
    return new Promise( (resolve,reject) => {
      fetch(url, {
        method : 'POST',
        headers : {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
   }

   // Make an HTTP PUT Request
   put (url, data) {
    return new Promise( (resolve,reject) => {
      fetch(url, {
        method : 'PUT',
        headers : {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
   }

   // Make an HTTP DELETE Request
   delete(url, data) {
    return new Promise( (resolve,reject) => {
      fetch(url, {
        method : 'PUT',
        headers : {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => resolve('Resource Deleted'))
      .catch(err => reject(err));
    });
   }
 }

 