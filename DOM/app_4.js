// Traversing the DOM

let val ;

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');

val = list ;
val = listItems ;

// Get Child Nodes
/*
    + There will be two type of node returns
      + childs
      + text -> These are the line breaks that are involved in HTML doc.
*/

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

/*
    + Type of Node with Number Published
        ->  1 -> Element
        ->  2 -> Attribute ( depreciated )
        ->  3 -> Text Node
        ->  8 -> comment
        ->  9 -> document itself
        ->  10 -> Doctype
*/

// Get Children Node
val = list.children;
val = list.children[0];
list.children[0].textContent = 'hello';
// Get children of Children
list.children[3].children[0].id = 'del';
val = list.firstChild;
val = list.firstElementChild;
// Get last Child 
val = list.lastChild;
val = list.lastElementChild;
// Count Child Element
val = list.childElementCount;

//Get Parent Node
val = listItems.parentNode;
val = listItems.parentNode;

// Get parent of parent
val = listItems.parentElement.parentElement;

// Get next Siblings
val = listItems.nextSibling;
val = listItems.nextElementSibling;

// Get Previous Sibling
val = listItems.previousSibling;
val = listItems.previousElementSibling; 

/*
    + It returns NULL since we are dealing with first sibling
*/

console.log(val);

