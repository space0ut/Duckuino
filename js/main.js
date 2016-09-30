$(function() {
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


  $("#download").click(function() {
    $("<a />", {
        download: $("#payloadName").val() + ".ino",
        href: URL.createObjectURL(
          new Blob([editor.getValue()], {
            type: "text/plain"
          }))
      })
      .appendTo("body")[0].click();
      $(window).one("focus", function() {
        $("a").last().remove()
      })
  });
});