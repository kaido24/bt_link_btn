CKEDITOR.dialog.add('bt_link_btn', function(editor) {
	return {
		title: 'Bootstrap link button',
		minWidth: 600,
		minHeight: 300,
		onLoad: function () {
			this.getElement().removeClass('cke_reset_all');
			var dialog_body = document.getElementsByClassName("cke_dialog_contents_body");
			dialog_body[0].setAttribute('class', 'cke_reset cke_dialog_contents_body');
		},
		contents: [{
			id: 'bt_link_info',
			label: 'Bootstrap link info',
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
									// validate: validatorNum(lang.numRowsError),
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
									id: 'btn_type',
									type: 'select',
									required: true,
									label: 'Button type',
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
										var dialog_body = document.getElementById("bt_btn_example");
										dialog_body.className = 'btn ' + this.getValue();
									},
									setup: function(widget) {
										this.setValue(widget.data.btn_type);
									},
									// When committing (saving) this field, set its value to the widget data.
									commit: function(widget) {
										widget.setData('btn_type', this.getValue());
									}
								}, {
									id: 'btn_href',
									type: 'text',
									width: '200px',
									required: true,
									label: 'Button url',
									// validate: validatorNum(lang.numRowsError),
									setup: function(widget) {
										this.setValue(widget.data.btn_href);
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
								}, ], // vbox children end.
							}, // 1st vbox end.
							{
								type: 'vbox',
								styles: ['vertical-align:top'],
								children: [{
									type: 'html',
									html: '<a class="btn" id="bt_btn_example" role="button">Sample text</a>'
								}]
							} // second vbox end.
						], // hbox children end.
					}, // 1st hbox end.
				] // Elements end.
		}],
	};
});
