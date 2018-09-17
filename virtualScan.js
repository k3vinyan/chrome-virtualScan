$( document ).ready(function(){
  const element = $("input#rtsPackageSearchInput");
  const buttonPlacement = $('#searchByContainer');
  let key = jQuery.Event("keypress");
  key.which = 13;

  buttonPlacement.before(
    optionButton("virtualScanButton", "Virtual Scan", "#FFFFFF", "#5DADE2", "3px")
  );

  $("#virtualScanButton").click(function(e){
    const tbas = prompt("Input TBA(s)", "Insert Tbas here");
    const tbasArray = tbas.replace(/\n/g, " ").split(" ");
    const enterKey = $.Event( "keypress", { which: 13 });
    console.log(tbasArray.length + ": " + tbasArray)
    element.focus();
    loopTbas(tbasArray, 0, tbasArray.length, enterKey);
  });

  function loopTbas(array, start, end, key){
    let k = key
    let index = start;
    let stop = end;

    console.log("Index: " + index)
    console.log("Stop: " + stop)

    setTimeout(function(){
      if(index < end){
        element.focus();
        console.log("index: " + index + " " + array[index])
        element.val(array[index]).trigger(k);
        index++;
        loopTbas(array, index, stop, k);
      }
    }, 2500)
  }

  // function loopTbas(array, start, e){
  //   const enterKey = jQuery.Event( 'keydown', { which: $.ui.keyCode.ENTER } );
  //   const arr = array;
  //   console.log(event)
  //
  //   for(let i = 0; i < arr.length; i++){
  //     (function(){
  //       setTimeout(function(){
  //         console.log(arr[i])
  //       }, 3000)
  //     })(i);
  //   }
  // }
  //
  // function doSetTimeout(tba, event){
  //   setTimeout(function(){
  //     console.log(tba)
  //   }, 2500)
  // }

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
