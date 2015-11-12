CKEDITOR.dialog.add( 'bt_link_btn', function( editor ) {
  return {
    title: 'Bootstrap link button',
    minWidth: 600,
    minHeight: 300,
    contents: [
      {
        id: 'bt_link_info',
        label: 'Bootstrap link info',
        //accessKey: 'I',
        elements: [
         {
           id: 'btn_text',
           type: 'text',
           width: '200px',
           required: true,
           label: 'Button text',
          // validate: validatorNum(lang.numRowsError),
           setup: function( widget ) {
            this.setValue( widget.data.btn_text );
           },
           commit: function( widget ) {
             widget.setData( 'btn_text', this.getValue());
           }
         },
          {
            id: 'btn_type',
            type: 'select',
            required: true,
            label:  'Button type',
            items: [
              [ 'Default', 'btn-default'],
              [ 'Primary', 'btn-primary'],
              [ 'Success', 'btn-success'],
              [ 'Info', 'btn-info'],
              [ 'Warning', 'btn-warning'],
              [ 'Danger', 'btn-danger'],
            ],
            //validate: validatorNum(lang.numColsError),
            setup: function( widget ) {
             this.setValue(widget.data.btn_type);
           },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
               widget.setData( 'btn_type', this.getValue());
            }
           },
          {
            id: 'btn_href',
            type: 'text',
            width: '200px',
            required: true,
            label: 'Button url',
           // validate: validatorNum(lang.numRowsError),
            setup: function( widget ) {
             this.setValue( widget.data.btn_href );
            },
            commit: function( widget ) {
              widget.setData( 'btn_href', this.getValue());
            }
          },
          {
            id: 'btn_target',
            type: 'select',
            required: true,
            label:  'Link Target',
            items: [
              [ 'Self', '_self'],
              [ 'Blank', '_blank'],
              [ 'Parent', '_parent'],
              [ 'Top', '_top'],
            ],
            //validate: validatorNum(lang.numColsError),
            setup: function( widget ) {
             this.setValue(widget.data.btn_target);
           },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
               widget.setData( 'btn_target', this.getValue());
            }
           },
        ]
      }
    ],
  };
});
