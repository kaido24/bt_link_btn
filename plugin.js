(function(){
  CKEDITOR.plugins.add('bt_link_btn', {
      lang: '',
      requires: 'widget,dialog',
      icons: 'bt_link_btn',
      init: function(editor) {
     // var lang = editor.lang.btgrid;
    
      CKEDITOR.dialog.add('bt_link_btn',  this.path + 'dialogs/bt_link_btn.js');
       editor.addContentsCss( this.path + 'editor.css');
       CKEDITOR.document.appendStyleSheet( this.path + 'editor.css'); // Add stylesheet to dialog window.
      // Add UI button.  The old way. This will not work otherwise at some systems.
       editor.ui.addButton('bt_link_btn', {
         label: 'Bootstrap button',
         command: 'bt_link_btn',
         icon: this.path + 'icons/bt_link_btn.png'
       });
        // Add widget
       editor.widgets.add('bt_link_btn',
         {
           allowedContent: 'a(*)',
           requiredContent: '',
           editables: {
             text: 'a.btn',
             allowedContent: '',
           },
           template:
                   '<a class="btn" role="button">' +
                   '</a>',
           dialog: 'bt_link_btn',
          defaults: {
            btn_type: 'btn-default',
            btn_target: '_self',
          },
          // Before init.
           upcast: function(element) {
             return element.name == 'a' && element.hasClass('btn');
           },
           // initialize
           // Init function is useful after copy paste rebuild.
           init: function() {
           ///console.log(this.btn_sizes);
               var types = this.btn_types;
               var sizes = this.btn_sizes;
               for (var i = 0; i <= types.length; i++) {
                 if (this.element.hasClass(types[i]))
                   this.setData( 'btn_type', types[i] );
               }
               for (var i = 0; i <= sizes.length; i++) {
                 if (this.element.hasClass(sizes[i]))
                   this.setData( 'btn_size', sizes[i]);
               }
               if (this.element.getText())
                    this.setData('btn_text', this.element.getText());

               // If href isset then set it for dialog window.
              if (this.element.hasAttribute('href'))
                   this.setData('btn_href', this.element.getAttribute('href'));

              if (this.element.hasAttribute('target'))
                this.setData('btn_target', this.element.getAttribute('target'));
           },
            data: function() {
               var classes = this.btn_types;
               var sizes = this.btn_sizes;

               for (var i = 0; i <= classes.length; i++) {
                 this.element.removeClass(classes[i]);
               }

               for (var i = 0; i <= sizes.length; i++) {
                 this.element.removeClass(sizes[i]);
               }

              if ( this.data.btn_type )
                this.element.addClass( this.data.btn_type );

              if ( this.data.btn_size )
                this.element.addClass( this.data.btn_size );

              if ( this.data.btn_text )
                this.element.setText( this.data.btn_text );

              if ( this.data.btn_href )
                // Lets save ckeditor internal value for href since it's special value and otherwise update will fail.
                this.element.setAttribute('data-cke-saved-href', this.data.btn_href);

              if ( this.data.btn_target )
                this.element.setAttribute('target', this.data.btn_target);
            },
            btn_types: ['btn-default','btn-primary','btn-info','btn-success','btn-warning', 'btn-danger'],
            btn_sizes: ['btn-lg','btn-sm','btn-xs'],
          }
        );
      }
    }
  );

})();
