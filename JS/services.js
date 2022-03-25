
$(document).ready(function() {
    $("#form").hide();
    $("#message").hide();
    $("#message_").hide();
    $("#message-2").hide();
    $("#sn").hide();
    $("#sn_").hide();

    $("#btn_").click(function() {
        $("#sn").toggle();
    })

    $("#log").click(function() {
        $("#sn").hide();
        $("#sn_").toggle();
    })

    // $("#signup").click(function(event) {
    //     let name = $("input#name").val();
    //     let email = $("input#email").val();
    //     let password = $("input#psw").val();

    //     if ($("input#name").val() && $("input#email").val() && $("input#psw").val()) {
    //         alert(
    //             "Hey " +
    //             name +
    //             ", Thank you for your signing up. Our team will get back to you soon"
    //         );
    //     } else {
    //         alert("Please provide your correct name,email and password!");
    //     }
    // });

    // $("#log_").click(function(event) {
    //     let name_ = $("input#name_").val();
    //     let password_ = $("input#psw_").val();

    //     if ($("input#name_").val() && $("input#psw_").val()) {
    //         alert(
    //             "Hey " +
    //             name_ +
    //             ", Welcome back. Feel free to browse through our recent projects."
    //         );
    //     } else {
    //         alert("Please provide a correct name and password!");
    //     }
    // });
    $("#signup").click(function(event) {
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let password = $("input#psw").val();
        let password1 = $("input#psw1").val();
        if ($("input#psw1").val() !== $("input#psw").val()) {
            alert(
                "Hey " +
                name +
                ", Kindly match your password."
            );
        }
        if ($("input#name").val() && $("input#email").val() && $("input#psw1").val() === $("input#psw").val()) {
            alert(
                "Hey " +
                name +
                ", Thank you for your signing up. Our team will get back to you soon"
            );
        } else {
            alert("Please provide your correct name,email and password!");
        }
    });
    $("#log_").click(function(event) {
        let name_ = $("input#name_").val();
        let password_ = $("input#psw_").val();
        if ($("input#name_").val() && $("input#psw_").val()) {
            alert(
                "Hey " +
                name_ +
                ", Welcome back. Feel free to browse through our recent projects."
            );
        } else {
            alert("Please provide a correct name and password!");
        }
    });
});

$(document).ready(function () {
  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");

  // When the user clicks on the password field, show the message box
  myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
  };

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
  };

  // When the user starts to type something inside the password field
  myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
});

$(document).ready(function () {
  $("#signupFrm").hide();
  $("#signupFrm_").hide();

  $("#btn").click(function(){
    $("#signupFrm").show();
  })
});


