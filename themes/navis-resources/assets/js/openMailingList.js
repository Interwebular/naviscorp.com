(function($){
    
    "use strict";
    
    var $form = $('.mailing-list-container'),
        $nav  = $('nav.main');
    
    $('.mailing-list-toggle').click(function(e){
        
        var $this = $(this);
            
        if( $this.hasClass('active') ) {
            $form.removeClass('open');
            $nav.removeClass('open');
            $this.removeClass('active');
        }
        else {
            $form.addClass('open');
            $nav.addClass('open');
            $this.addClass('active');
        }
        
        
        
        e.preventDefault();
    });
    
    $('.mailing-list-container > button').click(function(e){
        
        $form.removeClass('open');
        $nav.removeClass('open');
        $('.mailing-list-toggle').removeClass('active');
        e.preventDefault();
    });
    
    
})(jQuery);