$(document).ready(function(){
  $("#form").hide();
  $("#message").hide();
  $("#message_").hide();
  $("#message-2").hide();
  $("#sn").hide();
  $("#sn_").hide();

  $("#btn_").click(function(){
      $("#sn").toggle();
  })

  $("#log").click(function(){
      $("#sn").hide();
      $("#sn_").toggle();
  })

  $("#signup").click(function (event) {
    let name = $("input#name").val();
    let email = $("input#email").val();
    let password = $("input#psw").val();

    if ($("input#name").val() && $("input#email").val() && $("input#psw").val()) {
      alert(
        "Hey " +
          name +
          ", Thank you for your signing up. Our team will get back to you soon"
      );
    } else {
      alert("Please provide your correct name,email and password!");
    }
  });

  $("#log_").click(function (event) {
    let name_ = $("input#name_").val();
    let password_ = $("input#psw_").val();

    if ($("input#name_").val() && $("input#psw_").val()) {
      alert(
        "Hey " +
          name_ +
          ", Welcome back. Feel free to browse through our recent projects."
      );
    } 
    else {
      alert("Please provide a correct name and password!");
    }
  });

})



