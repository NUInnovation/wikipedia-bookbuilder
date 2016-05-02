/**
 * jsPDFEditor
 * @return {[type]} [description]
 */
var jsPDFEditor = function() {

	var editor,demos = {
		'string-splitting.js': 'String Splitting'
	};

	var aceEditor = function() {
		editor = ace.edit("editor");
		// editor.setTheme("ace/theme/twilight");
		//editor.setTheme("ace/theme/ambiance");
		editor.setTheme("ace/theme/github");
		editor.getSession().setMode("ace/mode/javascript");
		editor.getSession().setUseWorker(false); // prevent "SecurityError: DOM Exception 18"

		var timeout;
		editor.getSession().on('change', function() {
			// Hacky workaround to disable auto refresh on user input
			if ($('#auto-refresh').is(':checked') && $('#template').val() != 'user-input.js') {
				if(timeout) clearTimeout(timeout);
				timeout = setTimeout(function() {
					jsPDFEditor.update();
				}, 200);
			}
		});
	};

	var populateDropdown = function() {
		var options = '';
		for (var demo in demos) {
			options += '<option value="' + demo + '">' + demos[demo] + '</option>';
		}
		$('#template').html(options).on('change', loadSelectedFile);
	};

	var loadSelectedFile = function() {

		$.get('js/' + $('#template').val(), function(response) {
			editor.setValue(response);
			editor.gotoLine(0);

			// If autorefresh isn't on, then force it when we change examples
			if (! $('#auto-refresh').is(':checked')) {
				jsPDFEditor.update();
			}

		}, 'text').error(function() {

			// Fallback source code
			var source = "var doc = new jsPDF();\n";
			source += "doc.setFontSize(22);\n";
			source += "doc.text(20, 20, 'This is a title');\n";
			source += "doc.setFontSize(16);\n";
			source += "doc.text(20, 30, 'This is some text you can try to change.');\n";
			editor.setValue(source);
			editor.gotoLine(0);
		});
	};

	var initAutoRefresh = function() {
		$('#auto-refresh').on('change', function() {
			if ($('#auto-refresh').is(':checked')) {
				$('.run-code').hide();
				jsPDFEditor.update();
			} else {
				$('.run-code').show();
			}
		});

		$('.run-code').click(function() {
			jsPDFEditor.update();
			return false;
		});
	};

	var initDownloadPDF = function() {
		$('.download-pdf').click(function(){
			eval('try{' + editor.getValue() + '} catch(e) { console.error(e.message,e.stack,e); }');

			var file = demos[$('#template').val()];
			if (file === undefined) {
				file = 'demo';
			}
			if (typeof doc !== 'undefined') {
				doc.save(file + '.pdf');
			} else if (typeof pdf !== 'undefined') {
				setTimeout(function() {
					pdf.save(file + '.pdf');
				}, 2000);
			} else {
				alert('Error 0xE001BADF');
			}
		});
		return false;
	};

	return {
		/**
		 * Start the editor demo
		 * @return {void}
		 */
		init: function() {

			// Init the ACE editor
			aceEditor();

			populateDropdown();
			loadSelectedFile();
			// Do the first update on init
			jsPDFEditor.update();

			initAutoRefresh();

			initDownloadPDF();
		},
		/**
		 * Update the iframe with current PDF.
		 *
		 * @param  {boolean} skipEval If true, will skip evaluation of the code
		 * @return
		 */
		update: function(skipEval) {
			setTimeout(function() {
				if (! skipEval) {
					eval('try{' + editor.getValue() + '} catch(e) { console.error(e.message,e.stack,e); }');
				}
				if (typeof doc !== 'undefined') try {
					if (navigator.msSaveBlob) {
						// var string = doc.output('datauristring');
						string = 'http://microsoft.com/thisdoesnotexists';
						console.error('Sorry, we cannot show live PDFs in MSIE')
					} else {
						var string = doc.output('bloburi');
					}
					$('.preview-pane').attr('src', string);
				} catch(e) {
					alert('Error ' + e);
				}
			}, 0);
		}
	};

}();

$(document).ready(function() {
	jsPDFEditor.init();
});
