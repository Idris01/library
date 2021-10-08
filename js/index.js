document.addEventListener("DOMContentLoaded", ()=>{
  
  // represents the book library
  const Library = [];
  
  /* class Book, 
  @param (title)str - Book title
  @param(author)str- Book author
  @param(pages)str- No of Book pages
  @param(read)bool - Read or not
  */
  function Book(title,author,pages,read){
    const isRead =()=>{
      if (read) return true;
      return false;
    }
    return {title,author, pages, isRead} 
  }
  
  //clear input form
  function clearForm(){
    document.getElementById("author").value="";
    document.getElementById("title").value="";
    document.getElementById("page").value="";
  }
  
  /* toggles the display of the form
   * book */
  function toggleForm(){
    let form=document.querySelector(".form-container");
    form.classList.toggle("display");
  }
  
  // Displays the Book Form
  document.getElementById("new-book").onclick=toggleForm;
  
  // hide the form 
  document.getElementById("cancel").onclick=toggleForm;
  
  
  function addBook(book){
    Library.push(book);
  }
  
  function displayBooks(){
    let screen = document.getElementById("book-container");
    let content='';
    
    if(Library){
      Library.forEach(book=>{
        content+=`
        <div class="book"
        <h3 class="title"> ${book.title} </h3>
        <h4 class="author"> ${book.author} </h4>
        <h4> ${book.pages}</h4>
        <h4> ${book.isRead() ? "Read" : "Not Read"}
        </div>
        `
      });
      screen.innerHTML=content;
    }
  }
  
  document.getElementById("book-form").onsubmit=function(evt){
    evt.preventDefault();
    let data = new FormData(this);
    let author = data.get("author");
    let title = data.get("title");
    let page = data.get("page");
    let read = data.get("read");
    
   let newBook = Book(title, author, page, read);
   
   // Add New book
   addBook(newBook);
   
   // Hide form 
   clearForm();
    toggleForm();
    
    // Display Books in library
    displayBooks();
  }
});