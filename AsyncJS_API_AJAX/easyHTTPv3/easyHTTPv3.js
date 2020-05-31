/**
 * EasyHTTP Library
 * Library for making HTTP Request
 * 
 * @version 3.0.0
 * @author Achal
 * @license MIT
 * 
 **/

 class EasyHTTP {
  // Make a HTTP GET request 
  async get (url) {
    const response = await fetch (url);

    const resData = await response.json();
    return resData ;
   }

   // Make an HTTP Post request
   async  post (url, data) {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData ;
   }

   // Make an HTTP PUT Request
   async put (url, data) {
    const response = fetch(url, {
        method : 'PUT',
        headers : {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }) ;

      const resData = await response.json();
      return resData ;
   }

   // Make an HTTP DELETE Request
   async delete(url, data) {
    const response = fetch(url, {
        method : 'PUT',
        headers : {
          'Content-type': 'application/json'
        }
      });
      const resData = await 'Resource Deleted...' ;
      return resData ;
 }

}