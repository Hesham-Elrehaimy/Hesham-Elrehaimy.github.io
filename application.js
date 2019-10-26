window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printTemplate,false)
}

var printTemplate = function(event) {
  event.preventDefault()
  var code = this.aymanscode.value
  var outputDiv = document.querySelector('.output')
  
  var template = "\nCOMPUTE ECMODAY=0.";
  
    for(var h = 0; h <= 125; h++) {
      for(var j = 1; j <= 15; j++) {
        template += "\n";
        template += "IF ((PR" + j + " = " + code + ") & (PRDAY" + j + " =" + h + ")) ECMODAY=" + h + ".";
      }
    }
  
    for(var hj = 1; hj <= 15; hj++) {
      template += "\n";
      template += "IF ((PR" + hj + " = " + code + ") & (PRDAY" + hj + " >125)) ECMODAY=999.";
    }
  
    template += "\n;
    template += "EXECUTE.\n";
    template += "COMPUTE NO_ECMO_DAY_ZERO=ECMO = 0 & ECMODAY = 0.\n";
    template += "EXECUTE.\n";
    template += "COMPUTE ECMO_DAY_ZERO_REAL=ECMO = 1 & ECMODAY = 0.\n";
    template += "EXECUTE.\n";
    template += "COMPUTE LOS_AFTER_ECMO=LOS - ECMODAY.\n";
    template += "EXECUTE.\n";
  
  outputDiv.innerText = template;
}
