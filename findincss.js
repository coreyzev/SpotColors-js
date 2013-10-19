var pt = new color();
var ss = document.getElementById('panCss').sheet;
var ssLen = ss.rules.length;

/**

var spotcolor = function (ele, a, p) {
  var elem = ele, attr = a, pan = p;
  pt.set_pantone(pan);
  var newColor = "#" + pt.get_hex();
  ss.insertRule( elem + " { " + attr + ":" + newColor + ";}", ssLen);
  ssLen++;
};

**/


var spotcolor = function (a, p) {
  var attr = a, pan = p;
  pt.set_pantone(pan);
  var newColor = "#" + pt.get_hex();
  ss.insertRule( $this + " { " + attr + ":" + newColor + ";}", ssLen);
  ssLen++;
};
