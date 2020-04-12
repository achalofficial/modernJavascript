const http = new easyHTTP;

// Get Post
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Get Signle Post
// const posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Create the Data
const data = {
  title: 'Custome Post',
  body:'This is a Custome Post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post){
   if (err) {
        console.log(err);
  } else {
        console.log(post);
  } 
});