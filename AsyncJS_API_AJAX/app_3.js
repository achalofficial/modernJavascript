// The JS Script File

const posts = [
  {title: 'Post One', body:'This is body one'},
  {title: 'Post Two', body:'This is body one'}
];

// function createPost(post){
//     setTimeout(function(){
//       posts.push(post);
//     },2000);
// }

// function getPost (post){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output ;
//   },1000);
// }

// createPost({title: 'Post Three', body:'This is Post Three'});
// getPost();

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
  },2000);
}

function getPost (post){
setTimeout(function(){
  let output = '';
  posts.forEach(function(post){
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output ;
},1000);
}

createPost({title: 'Post Three', body:'This is Post Three'}, getPost);