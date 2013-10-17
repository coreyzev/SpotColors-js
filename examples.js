("color.class.php");

var color = new color();

// Set Pantone color name
color.set_pantone("304 C");

var cmyk = color.get_cmyk();
alert("CMYK - Cyan:" + "" + cmyk['cyan'] + "" + " Magenta " + "" + cmyk['magenta'] + "" + " Yelow:" + "" + cmyk['yellow'] + "" + " Black " + "" + cmyk['cyan'] + "" + "<br>");

var rgb = color.get_rgb();
alert("RGB - Red:" + "" + rgb['red'] + "" + " Green " + "" + rgb['green'] + "" + " Blue:" + "" + rgb['blue'] + "" + "<br>");

var hex = color.get_hex();
alert("HEX - <b><font color=\"" + hex + "\">" + hex + "</font></b><br><br>");

// Set CMYK color values
color.set_cmyk("100", "57", "0", "2");

cmyk = color.get_cmyk();
alert("CMYK - Cyan:" + "" + cmyk['cyan'] + "" + " Magenta " + "" + cmyk['magenta'] + "" + " Yelow:" + "" + cmyk['yellow'] + "" + " Black " + "" + cmyk['cyan'] + "" + "<br>");

rgb = color.get_rgb();
alert("RGB - Red:" + "" + rgb['red'] + "" + " Green " + "" + rgb['green'] + "" + " Blue:" + "" + rgb['blue'] + "" + "<br>");

hex = color.get_hex();
alert("HEX - <b><font color=\"" + hex + "\">" + hex + "</font></b><br><br>");


// Set CMYK color values
color.set_rgb("255", "0", "0");

cmyk = color.get_cmyk();
alert("CMYK - Cyan:" + "" + cmyk['cyan'] + "" + " Magenta " + "" + cmyk['magenta'] + "" + " Yelow:" + "" + cmyk['yellow'] + "" + " Black " + "" + cmyk['cyan'] + "" + "<br>");

rgb = color.get_rgb();
alert("RGB - Red:" + "" + rgb['red'] + "" + " Green " + "" + rgb['green'] + "" + " Blue:" + "" + rgb['blue'] + "" + "<br>");

hex = color.get_hex();
alert("HEX - <b><font color=\"" + hex + "\">" + hex + "</font></b><br><br>");

// Set HEX color values
color.set_hex("ff00ff");

cmyk = color.get_cmyk();
alert("CMYK - Cyan:" + "" + cmyk['cyan'] + "" + " Magenta " + "" + cmyk['magenta'] + "" + " Yelow:" + "" + cmyk['yellow'] + "" + " Black " + "" + cmyk['cyan'] + "" + "<br>");

rgb = color.get_rgb();
alert("RGB - Red:" + "" + rgb['red'] + "" + " Green " + "" + rgb['green'] + "" + " Blue:" + "" + rgb['blue'] + "" + "<br>");

hex = color.get_hex();
alert("HEX - <b><font color=\"" + hex + "\">" + hex + "</font></b><br>");