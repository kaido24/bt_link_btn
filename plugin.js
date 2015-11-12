(function(){
  CKEDITOR.plugins.add('bt_link_btn', {
      lang: '',
      requires: 'widget,dialog',
      icons: 'bt_link_btn',
      init: function(editor) {
     // var lang = editor.lang.btgrid;

      CKEDITOR.dialog.add('bt_link_btn',  this.path + 'dialogs/bt_link_btn.js');

       editor.addContentsCss( this.path + '/editor.css');

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
                   '<a class="btn">' +
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
               if ( this.element.hasClass( 'btn-default' ) )
                   this.setData( 'btn_type', 'btn-default' );

               if ( this.element.hasClass( 'btn-primary' ) )
                   this.setData( 'btn_type', 'btn-primary' );

               if ( this.element.hasClass( 'btn-info' ) )
                   this.setData( 'btn_type', 'btn-info' );

               if ( this.element.hasClass( 'btn-success' ) )
                   this.setData( 'btn_type', 'btn-success' );

               if ( this.element.hasClass( 'btn-warning' ) )
                   this.setData( 'btn_type', 'btn-warning' );
               if ( this.element.hasClass( 'btn-danger' ) )
                   this.setData( 'btn_type', 'btn-danger' );
               console.log(this.element);
               if (this.element.getText())
                    this.setData('btn_text', this.element.getText());
               // If href isset then set it for dialog window.
              if (this.element.hasAttribute('href'))
                   this.setData('btn_href', this.element.getAttribute('href'));

              if (this.element.hasAttribute('target'))
                this.setData('btn_target', this.element.getAttribute('target'));


           },

            data: function() {
              this.element.removeClass( 'btn-primary' );
              this.element.removeClass( 'btn-default' );
              this.element.removeClass( 'btn-warning' );
              this.element.removeClass( 'btn-info' );
              this.element.removeClass( 'btn-success' );
              this.element.removeClass( 'btn-danger' );

              if ( this.data.btn_type )
                this.element.addClass( this.data.btn_type );

              if ( this.data.btn_text )
                this.element.setText( this.data.btn_text );

              if ( this.data.btn_href )
                // Lets save ckeditor internal value for href since it's special value and otherwise update will fail.
                this.element.setAttribute('data-cke-saved-href', this.data.btn_href);

              if ( this.data.btn_target )
                this.element.setAttribute('target', this.data.btn_target);
            },
          }
        );
      }
    }
  );

})();
