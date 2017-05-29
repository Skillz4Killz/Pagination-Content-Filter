//create all global variables
let name, email;
const studentList = document.getElementsByClassName('student-item');
let pageNum = 1;
let studentsPerPage = 10;
let totalPages = Math.ceil(studentList.length/studentsPerPage);
let ul = '<ul>';
let studentNames = $('h3');
let studentEmails = $('.email');
let matchedStudents = [];

//add search bar and page links div
$('h2').after('<div class="student-search"> <input id="search" placeholder="Search for students..."> <button>Search</button> </div>');
$('ul').after('<div class="pagination"></div>');

//determine which students should appear on which page using the amount of studentsPerPage and the page clicked by user.
function showPage (pageNum, studentList) {
  $(studentList).hide();
  for (let i = 0; i <= studentList.length; i += 1) {
    if (i < pageNum * studentsPerPage && i > (pageNum - 1) * studentsPerPage - 1) {
      $(studentList[i]).show();
    } 
  }
}

// create Pagination links by checking the max amount of pages then creating the HTML elements for each page.
function appendPageLinks (studentList) {
  for (let i = 1; i <= totalPages; i += 1) {
    let tempVar ='<li><a href="#">' + i + '</a></li>';
    ul = ul + tempVar;
  }
  ul = ul + '</ul>';
  $('.pagination').append(ul);
//event listener to start showPage function when a link is clicked on.
  $("a").click(function(){
    pageNum = event.target.textContent;
    showPage(pageNum, studentList);
  });
}

//search function to search for student and filter all the lists and pagination based on search
function studentSearch () {
   let search = $('#search').val();
   search = search.toLowerCase();
   $('.pagination').empty();
   for (let i = 0; i <= studentList.length; i += 1) {
     name = studentNames[i].textContent;
      email = studentEmails[i].textContent;
     if (name.match(search) || email.match(search)) {
       matchedStudents.push(studentList[i]);
     } 
   }
   showPage(1, matchedStudents);
   appendPageLinks(matchedStudents);
}

showPage(1, studentList);
appendPageLinks(studentList);
$("button").click(studentSearch);
