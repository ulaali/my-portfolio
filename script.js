function validation() {
    let name = document.forms["myform"]["name"].value;
    let feedback=document.forms["myform"]["note"].value;
    if (name == "") {
      window.alert("Please Enter Your name");
      return false;
    }
    if(feedback == ""){
        window.alert("please Write your feedback")
        return false
    }
  }


  // let myear=1999;
  // let d=new Date();
  // let year=d.getFullYear();
  // let age=year-myear;
  // document.getElementById("demoo").innerHTML=`MY name is ula ali and Im ${age} Years old,gratuated from al-nahrain university ,IT engineering 1 year experience<br> in electronics sales and admirer of programming
  // `;

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
    

let myVar;

function myFunction() {

  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}