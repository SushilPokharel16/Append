$(document).ready(function(){
$(".error").hide();
$("#plus").click(function(){
$("#emp").append($("#append").html());
});
$("#date").datepicker({
  format:('mm-dd-yyyy'),
  startDate: new Date()
});

$("#select_").change(function(){
  if($("#select_").val() == "np" ){
    $("#selectKtm").show();
    $("#selectIndian").hide();
    $("#selectNw").hide();
  }

    else if ($("#select_").val() == "ind"){
              $("#selectIndian").show();
              $("#selectKtm").hide();
              $("#selectNw").hide();
    }
    else if ($("#select_").val() == "new"){
      $("#selectNw").show();
      $("#selectKtm").hide();
      $("#selectIndian").hide();
}

});
});
