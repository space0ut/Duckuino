$(function() {
  var isFileSaverSupported = init();

  Duck = new Duckuino();

  var consoleError = console.error;

  console.error = function () {
    var message = [].join.call(arguments, " ");
    $("#console").text(message);
    consoleError.apply(console, arguments);
  };

  var consoleLog = console.log;

  console.log = function () {
    var message = [].join.call(arguments, " ");
    $("#console").text(message);
    consoleLog.apply(console, arguments);
  };

  var editor = CodeMirror.fromTextArea(document.getElementById("arduiCode"), {
      lineNumbers: true,
    mode: "text/x-c++src",
    theme: "monokai"
  });

  var editor2 = CodeMirror.fromTextArea(document.getElementById("duckyScript"), {
      lineNumbers: true,
    mode: "text/vbscript",
    theme: "monokai"
  });

  $("#compileThis").click(function() {
  	  console.clear();
  	  $('#console').html('&nbsp;');
  	  editor.getDoc().setValue(Duck.compile(editor2.getValue()));
  });

  // Download button
  $("#download").click(function(e) {
    // Create a zip and download
    var sketchName = $("#payloadName").val();
    var sketchValue = editor.getValue();
    var zipHandler = new JSZip();
    zipHandler.file(sketchName + "/" + sketchName + ".ino", sketchValue);
    zipHandler.file("readme", $.ajax({
      url: 'readme.default',
      type: 'get',
      success: function(data) {return data;}
    }));
    zipHandler.generateAsync({type:"blob"})
      .then(function(content) {
        saveAs(content, sketchName + ".zip");
      }
    );
  });
});

function init()
{
  // Init page
  $("#download").prop('disabled', true); // Disable download button by default

  // Check if download button can be used
  try {
    return !!new Blob;
  } catch (e) {}
}