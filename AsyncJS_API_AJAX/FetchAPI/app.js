document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);


// Get Local Text File Data
function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text(); 
    })
    .then (function (data) {
      //console.log(data);
      document.getElementById('output').innerHTML = data
    })
    .catch(function (err) {
      console.log(err);
    });
}


function getJson() {
  fetch('post.json')
    .then(function(res){
      return res.json(); 
    })
    .then (function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById()
    })
    .catch(function (err) {
      console.log(err);
    });
}