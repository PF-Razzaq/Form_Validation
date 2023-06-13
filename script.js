const userInfoForm = document.getElementById('myForm');

userInfoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const degree = document.getElementById('degree').value;
  const Duration = document.getElementById('duration').value;
  const Course = document.getElementById('course').value;

//   clearErrorMessages();

  if (validateForm(fullName, username, phoneNumber, email, password)) {
    submitForm(fullName, username, phoneNumber, email, password,degree,Duration,Course);
  }
});
   
   var form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            form.submit();
        }
    });

        function validateForm() {
                var fullName = document.getElementById("fullName").value;
                var username = document.getElementById("username").value;
                var phone = document.getElementById("phoneNumber").value;
                var password = document.getElementById("password").value;
                var email = document.getElementById("email").value;

  // Validate Full Name (minimum length of 5 characters)
  var fullNameRegex = /^[a-zA-Z]{5}$/;
         if(fullName.match(fullNameRegex)){
            if (fullName.length < 5) {
                 alert("Full Name must be at least 5 characters long");
                 return false;
             }
         }

  // Validate Username (minimum length of 6 characters)
             if (username.length < 6) {
                    alert("Username must be at least 6 characters long");
                    return false;
                }

            else if (username.includes(" ")) {
                 alert("Username cannot contain spaces");
                 return;
             }

    // Validate Phone (numeric value with 10 digits)
                var phoneRegex = /^[0-9]{10}$/;
                if (!phone.match(phoneRegex)) {
                    alert("Phone number must be a 10-digit numeric value");
                    return false;
                }
    // Validate Password (minimum length of 6 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

     // Validate Email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            alert("Invalid Email address");
            return false;
        }

    return true; // All validations passed
}
function change(){
      if (username.includes(" ")) {
        alert("Username cannot contain spaces");
        return;
    }
}
     ///////////// Select Degree ////////////////////////
    function populateDuration() {
        var degreeSelect = document.getElementById("degree");
        var durationSelect = document.getElementById("duration");
        var courseSelect = document.getElementById("course");

        durationSelect.innerHTML = "";
        courseSelect.innerHTML = "";

        var selectedValue = degreeSelect.value;
        if (selectedValue === "associate") {
            var option = document.createElement("option");
            option.value = "2 years";
            option.text = "2 Years";
            durationSelect.appendChild(option);
        } else if (selectedValue === "bachelor") {
            var option = document.createElement("option");
            option.value = "4 years";
            option.text = "4 Years";
            durationSelect.appendChild(option);
        }

        populateCourses(); // Populate the courses dropdown based on the selected duration
    }

    function populateCourses() {
        var durationSelect = document.getElementById("duration");
        var courseSelect = document.getElementById("course");

        courseSelect.innerHTML = "";

        var selectedValue = durationSelect.value;
        if (selectedValue === "2 years") {
            var associateDegrees = [
                "ADP Artificial Intelligence",
                "ADP Business Administration and Commerce",
                "ADP Computer Science",
                "ADP Computer Networking",
                "ADP Cyber Security",
                "ADP Food Science and Technology",
                "ADP Information Technology Management",
            ];

            associateDegrees.forEach(function (degree) {
                var option = document.createElement("option");
                option.value = degree;
                option.text = degree;
                courseSelect.appendChild(option);
            });
        } else if (selectedValue === "4 years") {
            var bachelorDegrees = [
                "Bachelor of Civil Engineering (B.C.E.)",
                "Bachelor of Science in Civil Engineering (B.S.C.E.)",
                "Bachelor of Science in Civil and Infrastructure Engineering (B.S.-C.I.E.)",
                "Bachelor of Computer Engineering (B.Comp.E.)",
                "Bachelor of Science in Computer Engineering (B.S.C.E./B.S.Cmp.E.)",
                "Bachelor of Science in Computer Science and Engineering (B.S.C.S.E.)",
                "Bachelor of Science in Electrical and Computer Engineering (B.S.E.C.E.)",
                "Bachelor of Electrical Engineering (B.E.E.)",
            ];

            bachelorDegrees.forEach(function (degree) {
                var option = document.createElement("option");
                option.value = degree;
                option.text = degree;
                courseSelect.appendChild(option);
            });
        }
    }

    function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function submitForm(fullName, username, phoneNumber, email, password,degree,duration,course) {
  // Perform form submission logic
  // You can use AJAX or send the data to a server
  console.log('Form submitted');
  console.log('Full Name:', fullName);
  console.log('Username:', username);
  console.log('Phone:', phoneNumber);
  console.log('Password:', password);
  console.log('Email:', email);
  console.log('degree:',degree);
  console.log('Duration:',duration);
  console.log('Course:',course);


  // Clear form inputs
  userInfoForm.reset();
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var degree = document.getElementById("degree").value;
    var duration = document.getElementById("duration").value;
    var field = document.getElementById("field").value;
  
    // Create user object
    var user = {
      fullName: fullName,
      username: username,
      phone: phone,
      email: email,
      password: password,
      degree: degree,
      duration: duration,
      field: field
    };
  
    // Perform validation or further processing
    console.log(user);
  });