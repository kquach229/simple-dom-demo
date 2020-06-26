// Examine the document object
// console.dir(document)

 // Get the domain
//console.log(document.domain);

// Get the full URL
//console.log(document.URL);

// Name the title of the doc
// document.title = "Rename";
// console.log(document.title);

// Get the Doctype
//console.log(document.doctype);

// Get the head
// console.log(document.head);

// Get the body
// console.log(document.body);

// Get all elements of the doc
// console.log(document.all);

// Get the element in the document with an index of 10
// console.log(document.all[10]);

// Reassign the 10th index with a new text value
// document.all[10].textContent = "Kenny";

// Get all forms in the document
// console.log(document.forms);

// Get and change link text
// console.log(document.links);
// let link = document.links[0].innerText = "new";

// Get images in the doc
// console.log(document.images);






// GETELEMENTBYID //

// Get element using id selector
//console.log(document.getElementById("header-title"));

// Get specific items
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// console.log(header)

// Get header-title by id and change the text
// var headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "HELOOOO";


// Similar to the textContent above, however pays attention to styling
// var headerTitle = document.getElementById("header-title");
// headerTitle.innerText = "Hello"


// embeds innerhtml inside existing html tag
// var headerTitle = document.getElementById("header-title");
// headerTitle.innerHTML = "<h3>Hello</h3>";

// Select the main header by id and change the bottom border
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 3px black";

// GetELEMENTSBYCLASSNAME //

// Get pull out list items and list item by class
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[2]);

// var items = document.getElementsByClassName("list-group-item");
// items[2].textContent = "Hello 3";
// items[2].style.fontWeight = "bold";
// items[2].style.backgroundColor = "tomato";


// Use forloop  to iterate over a list of pulled out items and give a background color
// var items = document.getElementsByClassName("list-group-item");
// for(let i = 0; i < items.length; ++i) {
//     items[i].style.backgroundColor = "tomato";
    
// }





// GETELEMENTSBYTAGNAME //

// Get list items by tag name and extract the list item with index of 1
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[0]);




// QUERYSELECTOR //

// Get the main-header using query selector and change the bottom border style
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px gray";

// Get the input using tag name. This will select the first of the element type
// var input = document.querySelector("input");
// input.value = "Hello World";

// Get the specific input by specifying the type using attribute
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Submit Now";

// Get the last item by using psuedoclass of last-child and turn text blue
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// Get the 2nd child by using psuedo selector and change the text to red
// var secondItem = document.querySelector(".list-group-item:nth-child(2)")
// secondItem.style.color = "red";

// // Select all elements with a class of title and give the first title a new title
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Kenny Quach";