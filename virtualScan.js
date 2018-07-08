$( document ).ready(function(){
  const element = $("input#rtsPackageSearchInput");
  const buttonPlacement = $('#searchByContainer');
  let key = jQuery.Event("keypress");
  key.which = 13;

  buttonPlacement.before(
    optionButton("virtualScanButton", "Virtual Scan", "#FFFFFF", "#5DADE2", "3px")
  );

  $("#virtualScanButton").click(function(e){
    let tbas = prompt("Input TBA(s)", "Insert Tbas here");
    let tbasArray = tbas.split("\n");
    element.focus();
    loopTbas(tbasArray, 0, key);
  });

  function loopTbas(array, start, key){
    let index = start;
    let end = array.length - 1;

    setTimeout(function(){
      if(index < end){
        element.val(array[index]).trigger(key);
        index++;

        element.focus();
        loopTbas(array, index, key);
      }
    }, 2500)
  }

  function optionButton(id, value, color, bgColor, padding){
       var id = id;
       var value = value;
       var color = color;
       var bgColor = bgColor;
       var padding = padding;
       var string;

       string = "<input id='" + id + "' type='button' value='" + value +
         "' style='" +"color: " + color + "; " + "background-color:" + bgColor +
         "; " + "padding: " + padding + "; border-style: none;'></button>";

      return string;
   };

});
