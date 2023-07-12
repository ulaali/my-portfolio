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

