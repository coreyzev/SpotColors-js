(function( $ ) {

  var pt = new color();
  var ss = document.getElementById('panCss').sheet;
  var ssLen = ss.rules.length;


  $.fn.spotcolor = function (a, p) {
    var attr = a, pan = p, $el = $(this).selector;
    pt.set_pantone(pan);
    var newColor = "#" + pt.get_hex();
    ss.insertRule( $el + " { " + attr + ":" + newColor + ";}", ssLen);
    ssLen++;
  };

})(jQuery);