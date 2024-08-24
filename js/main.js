const student_id=document.querySelector('#student_id');
const student_name=document.querySelector('#student_name');
const dept=document.querySelector('#dept');
const subject=document.querySelector('#subject');
const book_author=document.querySelector('#book_author');
const booklist=document.querySelector('#book-list');
const btn=document.querySelector('.btn');


btn.addEventListener('click', function(e){
    e.preventDefault();

 if(student_id.value=='' && student_name.value=='' && dept.value=='' && subject.value=='' && book_author.value==''){
    alert('please fill up these field');
 }
 else{
    const newRow=document.createElement('tr');
     //creating New Name
    const newStudentName=document.createElement('th');
    newStudentName.innerHTML=student_name.value;
    newRow.appendChild(newStudentName);

    //creating student id
    const newStudentId=document.createElement('th');
    newStudentId.innerHTML=student_id.value;
    newRow.appendChild(newStudentId);

    //creating new dept

    const newDept=document.createElement('th');
    newDept.innerHTML=dept.value;
    newRow.appendChild(newDept);

     //creating new subject

    const newSub=document.createElement('th');
    newSub.innerHTML=subject.value;
    newRow.appendChild(newSub);

    //creating new subject

    const newAuthor=document.createElement('th');
    newAuthor.innerHTML=book_author.value;
    newRow.appendChild(newAuthor);


    booklist.appendChild(newRow);



 }



});






