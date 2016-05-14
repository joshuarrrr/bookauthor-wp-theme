/**
 * app.js
 *
 * Custom scripts for our WordPress application
 */
(function($){
  'use strict';

  /**
   * @module Main app module
   */
   var BookAuthor = (function(document){

    function init(){
      // Initialize Foundation
      $(document).foundation();
    }

    // ...happy coding!

    return {
      init: init
    };
  })(document);

  /**
   * Initialize BookAuthor module
   * on document.ready
   */
  $(function(){
    BookAuthor.init();
  });

})(jQuery);
