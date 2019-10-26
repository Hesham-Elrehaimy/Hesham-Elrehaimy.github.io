window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printTemplate,false)
}

var printTemplate = function(event) {
  event.preventDefault()
  var code = this.aymanscode.value
  var outputDiv = document.querySelector('.output')
  
  var codes = ["0210089","021008C","021008F","021008W","0210093","0210098","0210099","021009C","021009F","021009W","02100A3","02100A8","02100A9","02100AC","02100AF","02100AW","02100J3","02100J8","02100J9","02100JC","02100JF","02100JW","02100K3","02100K8","02100K9","02100KC","02100KF","02100KW","02100Z3","02100Z8","02100Z9","02100ZC","02100ZF","0210344","02103D4","0210444","0210483","0210488","0210489","021048C","021048F","021048W","0210493","0210498","0210499","021049C","021049F","021049W","02104A3","02104A8","02104A9","02104AC","02104AF","02104AW","02104D4","02104J3","02104J8","02104J9","02104JC","02104JF","02104JW","02104K3","02104K8","02104K9","02104KC","02104KF","02104KW","02104Z3","02104Z8","02104Z9","02104ZC","02104ZF","0211083","0211088","0211089","021108C","021108F","021108W","0211093","0211098","0211099","021109C","021109F","021109W","02110A3","02110A8","02110A9","02110AC","02110AF","02110AW","02110J3","02110J8","02110J9","02110JC","02110JF","02110JW","02110K3","02110K8","02110K9","02110KC","02110KF","02110KW","02110Z3","02110Z8","02110Z9","02110ZC","02110ZF","0211344","02113D4","0211444","0211483","0211488","0211489","021148C","021148F","021148W","0211493","0211498","0211499","021149C","021149F","021149W","02114A3","02114A8","02114A9","02114AC","02114AF","02114AW","02114D4","02114J3","02114J8","02114J9","02114JC","02114JF","02114JW","02114K3","02114K8","02114K9","02114KC","02114KF","02114KW","02114Z3","02114Z8","02114Z9","02114ZC","02114ZF","0212083","0212088","0212089","021208C","021208F","021208W","0212093","0212098","0212099","021209C","021209F","021209W","02120A3","02120A8","02120A9","02120AC","02120AF","02120AW","02120J3","02120J8","02120J9","02120JC","02120JF","02120JW","02120K3","02120K8","02120K9","02120KC","02120KF","02120KW","02120Z3","02120Z8","02120Z9","02120ZC","02120ZF","0212344","02123D4","0212444","0212483","0212488","0212489","021248C","021248F","021248W","0212493","0212498","0212499","021249C","021249F","021249W","02124A3","02124A8","02124A9","02124AC","02124AF","02124AW","02124D4","02124J3","02124J8","02124J9","02124JC","02124JF","02124JW","02124K3","02124K8","02124K9","02124KC","02124KF","02124KW","02124Z3","02124Z8","02124Z9","02124ZC","02124ZF","0213083","0213088","0213089","021308C","021308F","021308W","0213093","0213098","0213099","021309C","021309F","021309W","02130A3","02130A8","02130A9","02130AC","02130AF","02130AW","02130J3","02130J8","02130J9","02130JC","02130JF","02130JW","02130K3","02130K8","02130K9","02130KC","02130KF","02130KW","02130Z3","02130Z8","02130Z9","02130ZC","02130ZF","0213344","02133D4","0213444","0213483","0213488","0213489","021348C","021348F","021348W","0213493","0213498","0213499","021349C","021349F","021349W","02134A3","02134A8","02134A9","02134AC","02134AF","02134AW","02134D4","02134J3","02134J8","02134J9","02134JC","02134JF","02134JW","02134K3","02134K8","02134K9","02134KC","02134KF","02134KW","02134Z3","02134Z8","02134Z9","02134ZC","02134ZF"];
  var bigTemplate = "\n"
  for(var jh=0; jh < codes.length; jh++) {
    var template = "\nCOMPUTE ECMODAY=0.";
    
    for(var h = 0; h <= 125; h++) {
      for(var j = 1; j <= 15; j++) {
        template += "\n\n";
        template += "IF ((PR" + j + " = " + code + ") & (PRDAY" + j + " =" + h + ")) ECMODAY=" + h + ".";
      }
    }

    for(var hj = 1; hj <= 15; hj++) {
      template += "\n\n";
      template += "IF ((PR" + hj + " = " + code + ") & (PRDAY" + hj + " >125)) ECMODAY=999.";
    }

    template += "\n\n";
    template += "EXECUTE.\n\n";
    template += "COMPUTE NO_ECMO_DAY_ZERO=ECMO = 0 & ECMODAY = 0.\n\n";
    template += "EXECUTE.\n\n";
    template += "COMPUTE ECMO_DAY_ZERO_REAL=ECMO = 1 & ECMODAY = 0.\n\n";
    template += "EXECUTE.\n\n";
    template += "COMPUTE LOS_AFTER_ECMO=LOS - ECMODAY.\n\n";
    template += "EXECUTE.\n\n";
    
    bigTemplate += template;
  } 
  
  outputDiv.innerText = bigTemplate;
}
