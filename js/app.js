//create all global variables
const studentList = document.getElementsByClassName('student-item');
let pageNum = 1;
let studentsPerPage = 10;

//determine which students should appear on which page using the amount of studentsPerPage and the page clicked by user.
function showPage (pageNum, studentList) {
  $('.student-list').css('display', 'none');
  for (let i = 0; i <= studentList.length; i += 1) {
    if (i < pageNum * studentsPerPage && i > (pageNum - 1) * studentsPerPage - 1) {
      studentList[i].style.display = 'block';
      console.log(i + ' will show the student');
    } 
  }
}

showPage(1, studentList);
