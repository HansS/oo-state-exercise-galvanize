$(document).ready(function() {
	console.log('lodad')
	var editor = ace.edit("editor");
  editor.setTheme("twilight");
  editor.getSession().setMode("ace/mode/javascript");

	$("#save-editor").on("click", function() {
		localStorage.setItem('editorCode', editor.getValue());
	})

	editor.setValue(localStorage.getItem('editorCode'))

	var sandboxedFrame = $("#sandboxed-eval")

  $("#execute-editor").on("click", function() {
  	sandboxedFrame = $("#sandboxed-eval")
    evaluate(sandboxedFrame);
  });

  window.addEventListener('message', function (e) {
    if ((e.origin === "null" && e.source === sandboxedFrame.contentWindow)
        || (e.origin === (window.location.protocol + "//" + window.location.host))) {
      $("#sandbox-result").text(e.data);
    }
  });

  function evaluate(frame) {
    var code = editor.getValue();
    frame.get(0).contentWindow.postMessage(code, '*');
  }

})
	