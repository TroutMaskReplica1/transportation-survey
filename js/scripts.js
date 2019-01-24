$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warning-input]:checked").each(function(){
      var warningInputMode = $(this).val();
      $('#warning-responses').append(warningInputMode + "<br>");
    });
    $("#symptom-responses").show();
    $("input:checkbox[name=symptom-input]:checked").each(function(){
      var symptomInputMode = $(this).val();
      $('#symptom-responses').append(symptomInputMode + "<br>");
    });
    $("#coping-responses").show();
    $("input:checkbox[name=coping-input]:checked").each(function(){
      var copingInputMode = $(this).val();
      var copingInput = $(".form-group3 :checked").attr("checked");
      if (copingInput >= 2) {
        $('#coping-responses').append(copingInputMode + "<br>");
      } else {
        $('#coping-help').show();
        $('#warning-responses').hide();
        $('#symptom-responses').hide();
        $('#coping-responses').hide();
      }
    });
    $('#stress_survey').hide();

  });
});
