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

console.log(val);

