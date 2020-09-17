// get the element by class name = accordian
var acc = document.getElementsByClassName("accordion");
var i;
// iterating each element in loop to find out number of element
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


    function validateform(){

      function testphone(phone1){
      var phoneno = /^\d{10}$/;
      return phoneno.test(phone1);
      }

      function dateval(date){
      var dtpattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
      return dtpattern.test(date);
      }

      function validateEmail(email){
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
        }

        var first_name = document.getElementById('first_name').value;
        var last_name = document.getElementById('last_name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var terms = document.getElementById('terms');
        var dob = document.getElementById('dob').value;

        if (first_name=='') {
              alert("Please Enter Your First Name");
              return false;
          }

          if (last_name =='') {
            alert("Please Enter Your Last Name");
            return false;
          }

          if (email=='') {
            alert("Please Enter your Email ");
            return false;
          }

          if (!validateEmail(email)) {
              alert("Please Enter Valid Email");
              return false;
          }

          if (phone=='') {
              alert("Please Enter Your Phone Number");
              return false;
          }

          if (phone.length!=10) {
              alert("Please Enter 10 Digit Mobile Number");
              return false;
          }

          if (!testphone(phone)) {
              alert("Please Enter Valid Mobile Number");
              return false;
          }

          if (dob=='') {
            alert("Please Enter Your Date of Birth");
            return false;
          }

        if (!dateval(dob)) {
              alert("Please Enter Date in DD/MM/YYYY format");
              return false;
        }

        if(city==''){
              alert("Please Enter Your City");
              return false;
          }
        if (state=='') {
            alert("Please Select State");
            return false;
        }

        if(!terms.checked)
          {
             alert('You must agree to the terms first.');
             return false;
          }
    }
