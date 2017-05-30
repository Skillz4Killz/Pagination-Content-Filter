//create all global variables
let name, email;
const studentList = document.getElementsByClassName('student-item');
let pageNum = 1;
let studentsPerPage = 10;
let ul = '<ul>';
let studentNames = $('h3');
let studentEmails = $('.email');
let matchedStudents = [];

//add search bar
$('h2').after('<div class="student-search"> <input id="search" placeholder="Search for students..."> <button>Search</button> </div>');

//determine which students should appear on which page using the amount of studentsPerPage and the page clicked by user.
function showPage (x, y) {
  $(studentList).hide();
  for (let i = 0; i <= y.length; i++) {
    if (i < x * studentsPerPage && i > (x - 1) * studentsPerPage - 1) {
      $(y[i]).show();
    } 
  }
}

// create Pagination links by checking the max amount of pages then creating the HTML elements for each page.
function appendPageLinks (x) {
  let totalPages = Math.ceil(x.length/studentsPerPage);
  $('ul').after('<div class="pagination"></div>');
  ul = '<ul>';
  for (let i = 1; i <= totalPages; i++) {
    let tempVar ='<li><a href="#">' + i + '</a></li>';
    ul = ul + tempVar;
  }
  ul = ul + '</ul>';
  $('.pagination').append(ul);
//event listener to start showPage function when a link is clicked on.
  $("a").click(function(){
    pageNum = event.target.textContent;
    showPage(pageNum, x);
  });
}

//search function to search for student and filter all the lists and pagination based on search
function studentSearch () {
   let search = document.getElementById('search').value.toLowerCase();
   $('.pagination').remove();
   document.getElementById('search').value = '';
   matchedStudents = [];
   for (var i = 0; i < studentList.length; i++) {
     name = studentNames[i].textContent;
      email = studentEmails[i].textContent;
     if (name.search(search) != -1  || email.search(search) != -1) {
       matchedStudents.push(studentList[i]);
     } 
   }
   
   console.log(matchedStudents);
   if (matchedStudents.length == 0) {
     $(studentList).hide();
     $('.error').remove();
     $('.student-list').after('<h4 class="error"> Error: Search Not Found! </h4><p class="error">Either the student searched for does not exist in the database or the search criteria was misspelled. Please try again.</p>');
  } else if (matchedStudents.length < 10 && matchedStudents.length > 0) {
     showPage(1, matchedStudents);
     $('.error').remove();
 } else {
   $('.error').remove();
   showPage(1, matchedStudents);
   appendPageLinks(matchedStudents);
 }
}

showPage(1, studentList);
appendPageLinks(studentList);
$("button").click(studentSearch);