const posts = [
  {title: 'Post One', body:'This is body one'},
  {title: 'Post Two', body:'This is body one'}
];

function createPost(post){

  return new Promise (function (resolve, reject) {
    setTimeout(function(){
      posts.push(post);
      resolve();
    },2000);
  });
}

function getPosts (){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
     });
    document.body.innerHTML = output ;
  },1000);
}

createPost({title: 'Post Three', body:'This is Post Three'}).then(getPosts);