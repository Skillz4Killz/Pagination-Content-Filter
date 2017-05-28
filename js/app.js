//create all global variables
let currentPage = 1;
let studentsPerPage = 10;
let studentList = $('.student-list').children(); 
const CreatePageList = '<div class = "pagination"><ul> </ul></div>';
const createPage = '<li></li>';
const createPageLink = '<a href="#"></a>
  
//allow user to decide how many students per page
function numStudentPage () {
  studentsPerPage = $('#numStudentsPage').value;
}

//determine which students should appear on which page using the amount of studentsPerPage and the page clicked by user.
function showPage (currentPage, studentList) {
  for (let i = 0; i < studentList.length; i += 1) {
    if (i >= (currentPage * studentsPerPage) && i <= ((currentPage * studentsPerPage) + (studentsPerPage - 1)) {
        studentList[i].show();
  } else if (i <= currentPage * studentsPerPage) {
    studentList[i].show();
  } else {
    studentList[i].hide();
  }
}
}

//function to allow page content updates when a user clicks a pagination link
function editPageLinks () {
  for (let i = 1; i < maxPages; i += 1) {
    //conditional to add the active class on the page that is clicked.
    if (i == currentPage) {
      createPageLink = <'a href="#" class="active"></a>'>
    }
    createPageLink.textContent = i;
    createPage = createPage.appendChild(createPageLink);
    createPageList.childNode.appendChild(createPage);    
    }
  }

//add HTML for page links based on max amount of students.
function appendPageLinks (studentList) {
  let maxPages = Math.ceil(studentList.length / studentsPerPage);
  editPageLinks();
}

  //call functions
  showPage(currentPage, studentList);
  appendPageLinks(studentList);
  //event listener to edit page links with the correct active class on the clicked page.
  $('.pagination ul li a').on('click', () => {
    currentPage = e().textContent();
    editPageLinks();
  }
