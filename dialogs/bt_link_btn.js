CKEDITOR.dialog.add('bt_link_btn', function(editor) {
	return {
		title: 'Button customizer',
		minWidth: 600,
		minHeight: 300,
		contents: [{
			id: 'bt_link_info',
			label: 'Info',
			//accessKey: 'I',
			elements: [{
						type: 'hbox',
						widths: ['50%', '50%'],
						children: [{
								type: 'vbox',
								styles: ['vertical-align:top'],
								className: 'cke_reset_all',
								children: [{
									id: 'btn_text',
									type: 'text',
									width: '200px',
									required: true,
									label: 'Button text',
									setup: function(widget) {
										this.setValue(widget.data.btn_text);
									},
									onKeyUp: function (widget) {
										var dialog_body = document.getElementById("bt_btn_example");
										if (this.getValue().trim()) {
											dialog_body.innerHTML = this.getValue();
										} else {
											dialog_body.innerHTML = 'Sample text';
										}
									},
									validate: function() {
										if ( !this.getValue().trim() ) {
											alert('Button text cannot be empty.');
											return false;
										}
									},
									commit: function(widget) {
										widget.setData('btn_text', this.getValue());
									}
								}, {
									id: 'btn_href',
									type: 'text',
									width: '200px',
									required: true,
									label: 'Button url',
									// validate: validatorNum(lang.numRowsError),
									setup: function(widget) {
										this.setValue(widget.data.btn_href ? widget.data.btn_href : '#');
									},
									validate: function() {
										if ( !this.getValue() ) {
											alert('Button url cannot be empty.');
											return false;
										}
									},
									commit: function(widget) {
										widget.setData('btn_href', this.getValue().trim());
									}
								}, {
									id: 'btn_target',
									type: 'select',
									required: true,
									label: 'Link Target',
									items: [
										['Self', '_self'],
										['Blank', '_blank'],
										['Parent', '_parent'],
										['Top', '_top'],
									],
									//validate: validatorNum(lang.numColsError),
									setup: function(widget) {
										this.setValue(widget.data.btn_target);
									},
									// When committing (saving) this field, set its value to the widget data.
									commit: function(widget) {
										widget.setData('btn_target', this.getValue());
									}
								},], // vbox children end.
							}, // 1st vbox end.
							{
								type: 'vbox',
								styles: ['vertical-align:top'],
								children: [{
									id: 'btn_type',
									type: 'radio',
									required: true,
									label: 'Button style',
									items: [
										['Default', 'btn-default'],
										['Primary', 'btn-primary'],
										['Success', 'btn-success'],
										['Info', 'btn-info'],
										['Warning', 'btn-warning'],
										['Danger', 'btn-danger'],
									],
									//validate: validatorNum(lang.numColsError),
									onChange: function (widget) {
									    dialog = this.getDialog();
									    var size = dialog.getContentElement('bt_link_info', 'btn_size');
										var dialog_body = document.getElementById("bt_btn_example");
										dialog_body.className = 'btn ' + size.getValue() + ' ' + this.getValue();
									},
									setup: function(widget) {
									    var radios = document.getElementById(this.domId);
									   // radios.getElementsByTagName(label');
									    var labels = radios.getElementsByTagName('label');
                                        var inputfields = radios.getElementsByTagName('input');
									    for (var i = 0; i < labels.length; i++) {
                                            if (inputfields[i]) {
                                                inputfields[i].style.display = 'none';
                                                labels[i+1].className = 'btn btn-xs ' + inputfields[i].value;
                                            }
                                        }
										this.setValue(widget.data.btn_type);
									},
									// When committing (saving) this field, set its value to the widget data.
									commit: function(widget) {
										widget.setData('btn_type', this.getValue());
									}
								}, {
									id: 'btn_size',
									type: 'radio',
									required: true,
									label: 'Button size',
									items: [
										['Large', 'btn-lg'],
										['Medium', 'btn-md'],
										['Small', 'btn-sm'],
										['Extra small', 'btn-xs'],
									],
									//validate: validatorNum(lang.numColsError),
									setup: function(widget) {
										this.setValue(widget.data.btn_size ? widget.data.btn_size : 'btn-md');
									},
									// When committing (saving) this field, set its value to the widget data.
									commit: function(widget) {
										widget.setData('btn_size', (this.getValue() != 'btn-md') ? this.getValue() : '');
									},
									onChange: function (widget) {
									    dialog = this.getDialog();
									    var type = dialog.getContentElement('bt_link_info', 'btn_type');
										var dialog_body = document.getElementById("bt_btn_example");
										dialog_body.className = 'btn ' + type.getValue() + ' ' + this.getValue();
									},
								}]
							} // second vbox end. 
						], // hbox children end.
					}, // 1st hbox end.
					{
					type: 'hbox',
						//widths: ['50%','100%'],
						children: [{
									type: 'html',
									html: '<div style="font-size: 15px; font-weight: bold; padding-bottom: 10px;">Preview</div><div id="bt-btn-example-wrap"><button class="btn" id="bt_btn_example" role="button">Sample text</butto></div>'
								}],
					}

				] // Elements end.
		}],
	};
});
