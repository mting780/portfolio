 //from nnnnnn on stackoverflow
    function GetElementInsideContainer(containerID, childID) {
      var elm = document.getElementById(childID);
      var parent = elm ? elm.parentNode : {};

      return (parent.id && parent.id === containerID) ? elm : {};
    };
    
    var home = GetElementInsideContainer("side_nav","home");
    var tesla = GetElementInsideContainer("side_nav","tesla");
    var visceral = GetElementInsideContainer("side_nav","visceral");
    var maxis = GetElementInsideContainer("side_nav","maxis");
    var collegebacker = GetElementInsideContainer("side_nav","collegebacker");
    var cabinet = GetElementInsideContainer("side_nav","cabinet");

      home.onclick = function () {
        home.style.fontWeight = 'bolder'
        location.href = "index.html";
      };
      visceral.onclick = function () {
        visceral.style.fontWeight = 'bolder'
        location.href = "visceral.html"
      };
      maxis.onclick = function () {
          maxis.style.fontWeight = 'bolder'
          location.href = "maxis.html";
      };
      collegebacker.onclick = function () {
        collegebacker.style.fontWeight = 'bolder'
        location.href = "collegebacker-protected.html";
      };
      tesla.onclick = function () {
        console.log('here')
        tesla.style.fontWeight = 'bolder'
        location.href = "tesla.html";
      };
      orai.onclick = function (){
        orai.style.fontWeight = 'bolder'
        location.href = "orai.html";
      };
      cabinet.onclick = function (){
        cabinet.style.fontWeight = 'bolder'
        location.href = "cabinet.html";
      }
      resume.onclick = function() {
        location.href ="resume.pdf"
      }


