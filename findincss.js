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

  $.when($.get("main.css"))
    .done(function(response) {
//        console.log(response);
    });

//  if (FileReader) {alert("yup");console.log("hola datevid");}

  var rules = String(document.getElementById('pantone-style').innerText);
//  rules = rules.replace(/\s+/g, '').replace(/}/g, '} ').split(" ");
//  rules.pop();
  rules2 = rules.replace(/(:\s+)/g, ':');
  var pattern = /:([\s\S]*?)(?=;)/g;
  var result = rules2.match(pattern);
  var hex=[];
  for (var i = 0; i < result.length; i++) {
    if (result[i].length > 1) {
      result[i] = result[i].substring(1, result[i].length);
    }
    var pan = result[i];
    pt.set_pantone(pan);
    hex[i] = "#" + pt.get_hex();
    rules = rules.replace(result[i], hex[i]);
  };
  $('#pantone-style').html(rules);
//  $('#pantone-style').remove();
})(jQuery);