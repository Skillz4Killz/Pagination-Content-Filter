//create all global variables
const studentList = document.getElementsByClassName('student-item');
let pageNum = 1;
let studentsPerPage = 10;

//determine which students should appear on which page using the amount of studentsPerPage and the page clicked by user.
function showPage (pageNum, studentList) {
  $(studentList).hide();
  for (let i = 0; i <= studentList.length; i += 1) {
    if (i < pageNum * studentsPerPage && i > (pageNum - 1) * studentsPerPage - 1) {
      $(studentList[i]).show();
      console.log(i + ' will show the student');
    } 
  }
}

// create Pagination links by checking the max amount of pages then creating the HTML elements for each page.
function appendPageLinks (studentList) {
  totalPages = Math.ceil(studentList.length/studentsPerPage);
   $('ul').after('<div class="pagination"></div>');
   let ul = '<ul>';
  for (let i = 1; i <= totalPages; i += 1) {
    let tempVar ='<li><a href="#">' + i + '</a></li>';
    ul = ul + tempVar;
  }
  ul = ul + '</ul>';
  $('.pagination').append(ul);
  //event listener to start showPage function when a link is clicked on.
  
}

showPage(6, studentList);
appendPageLinks(studentList);