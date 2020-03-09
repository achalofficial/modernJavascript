// Block Scope with Let an const
//Global Scope
var a = 1 ;
let b = 2 ;
const c = 3 ;

console.log('Global Scope :' + a + b + c);

function test(){
  var a = 4 ;
  let b = 5 ;
  const c = 6 ;
  console.log('Local Scope :' + a + b + c);
  
}
test();

 if(true){
   //Block Scope
   var a  = 4;
   let b = 5;
   const c = 6;
   console.log('If Scope :' ,a,b,c);
  }

  console.log('Global Scope :' + a + b + c);

  /*
      +  Var value changes in it block scope
      +  let, and Const value remain unchanged
  */
