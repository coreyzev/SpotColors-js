/**
 * Class for converting colortypes
 *
 * The class includes the following colors formats and types:
 *
 *  - CMYK
 *  - RGB
 *  - Pantone
 *  - HEX Codes for HTML
 *
 * @author    Sven Wagener <wagener_at_indot_dot_de>
 * @author JS, Corey Zev Holland
 * @copyright Sven Wagener
 * @include   Funktion:_include_
 */

function color() {
  this.rgb = {
    "red": 0,
    "green": 0,
    "blue": 0
  };
  this.hexbase = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  };
  this.hex_trip = {};
  this.hex = "";
  this.cmyk = {
    "c": 0,
    "m": 0,
    "y": 0,
    "b": 0
  };
  this.pantone = "";

  /**
   * @var  array $rgb
   * @access private
   * @desc array for RGB colors
   */
  /* rgb */

  /**
   * @var  array $hexbase
   * @access private
   * @desc array for HEX code chars
   */
  /* hexbase */

  /**
   * @var  array $hex_trip
   * @access private
   * @desc array for HEX codes
   */
  /* hex_trip */

  /**
   * @var  string $hex
   * @access private
   * @desc variable for HTML HEX color
   */


  /**
   * @var  array $cmyk
   * @access private
   * @desc array for cmyk colors
   */
  /* cmyk */

  /**
   * @var  string $pantone
   * @access private
   * @desc variable for pantone color name
   */


require('palette.json');


  /**
   * Constructor of class color
   * @access public
   * @desc Constructor of class color
   */
  this.color = function() {
    var value = 0;
    for (var x = 0; x < 16; x++) {
      for (var y = 0; y < 16; y++) {
        this.hex_trip[value] = this.hexbase[x] + "" + this.hexbase[y];
        value++;
      }
    }
  };



  /**
   * Sets the RGB values
   * @param int $red number from 0-255 for blue color value
   * @param int $green number from 0-255 for green color value
   * @param int $blue number from 0-255 for blue color value
   * @access public
   * @desc Sets the RGB values
   */
  this.set_rgb = function(red, green, blue) {
    this.rgb['red'] = red;
    this.rgb['green'] = green;
    this.rgb['blue'] = blue;

    this.convert_rgb_to_cmyk();
    this.convert_rgb_to_hex();
  };



  /**
   * Sets the HEX HTML color value
   * @param int $red number from 0-255 for blue color value
   * @access public
   * @desc Sets the HEX HTML color value like ffff00
   */
  this.set_hex = function(hex) {
    hex = hex.toString().toLowerCase();
    this.hex = hex;

    this.convert_hex_to_rgb();
    this.convert_rgb_to_cmyk();
  };



  /**
   * Sets the CMYK color values
   * @param int $c number from 0-100 for c color value
   * @param int $m number from 0-100 for m color value
   * @param int $y number from 0-100 for y color value
   * @param int $b number from 0-100 for b color value
   * @access public
   * @desc Sets the CMYK color values
   */
  this.set_cmyk = function(c, m, y, b) {
    this.cmyk['c'] = c;
    this.cmyk['m'] = m;
    this.cmyk['y'] = y;
    this.cmyk['b'] = b;

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };



  /**
   * Sets the pantone color value
   * @param string $pantone_name name of the pantone color
   * @access public
   * @desc Sets the pantone color value
   */
  this.set_pantone = function(pantone_name) {
    this.pantone = pantone_name;
    this.cmyk['c'] = this.pantone_pallete[pantone_name]['c'];
    this.cmyk['m'] = this.pantone_pallete[pantone_name]['m'];
    this.cmyk['y'] = this.pantone_pallete[pantone_name]['y'];
    this.cmyk['b'] = this.pantone_pallete[pantone_name]['b'];

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };


  /**
   * Returns the RGB values of a set color
   * @return array $rgb color values of red ($rgb['red']), green ($rgb['green') and blue ($rgb['blue'])
   * @access public
   * @desc Returns the RGB values of a set color
   */
  this.get_rgb = function() {
    return this.rgb;
  };



  /**
   * Returns the HEX HTML color value of a set color
   * @return string $hex HEX HTML color value
   * @access public
   * @desc Returns the HEX HTML color value of a set color
   */
  this.get_hex = function() {
    return this.hex;
  };



  /**
   * Returns the CMYK values of a set color
   * @return array $cmyk color values of c ($cmyk['c']), m ($cmyk['m'), y ($cmyk['blue']) and b ($cmyk['b'])
   * @access public
   * @desc Returns the CMYK values of a set color
   */
  this.get_cmyk = function() {
    return this.cmyk;
  };



  /**
   * Converts the RGB colors to HEX HTML colors
   * @access private
   * @desc Converts the RGB colors to HEX HTML colors
   */
  this.convert_rgb_to_hex = function() {
    this.hex = this.hex_trip[this.rgb['red']] + "" + this.hex_trip[this.rgb['green']] + "" + this.hex_trip[this.rgb['blue']];
  };



  /**
   * Converts the RGB colors to CMYK colors
   * @access private
   * @desc Converts the RGB colors to CMYK colors
   */
  this.convert_rgb_to_cmyk = function() {
    var c = (round((255 - this.rgb_red) / 255.0 * 100, 0));
    var m = (round((255 - this.rgb_green) / 255.0 * 100, 0));
    var y = (round((255 - rgbval + "" + blue) / 255.0 * 100, 0));

    var b = min({
      0: c,
      1: m,
      2: y
    });

    c = c - b;
    m = m - b;
    y = y - b;

    this.cmyk = {
      "c": c,
      "m": m,
      "y": y,
      "b": b
    };
  };



  /**
   * Converts the CMYK colors to RGB colors
   * @access private
   * @desc Converts the CMYK colors to RGB colors
   */
  this.convert_cmyk_to_rgb = function() {
    var red = this.cmyk['c'] + this.cmyk['b'];
    var green = this.cmyk['m'] + this.cmyk['b'];
    var blue = this.cmyk['y'] + this.cmyk['b'];

    red = (red - 100) * (-1);
    green = (green - 100) * (-1);
    blue = (blue - 100) * (-1);

    red = round(red / 100 * 255, 0);
    green = round(green / 100 * 255, 0);
    blue = round(blue / 100 * 255, 0);

    this.rgb['red'] = red;
    this.rgb['green'] = green;
    this.rgb['blue'] = blue;
  };



  /**
   * Converts the HTML HEX colors to RGB colors
   * @access private
   * @desc Converts the HTML HEX colors to RGB colors
   */
  this.convert_hex_to_rgb = function() {
    var red = substr(this.hex, 0, 2);
    var green = substr(this.hex, 2, 2);
    var blue = substr(this.hex, 4, 2);

    var found = false;
    for (var i = 0; i < count(this.hex_trip) && !found; i++) {
      if (this.hex_trip[i] == red) {
        this.rgb['red'] = i;
        found = true;
      }
    }

    found = false;
    for (i = 0; i < count(this.hex_trip) && !found; i++) {
      if (this.hex_trip[i] == green) {
        this.rgb['green'] = i;
        found = true;
      }
    }

    found = false;
    for (i = 0; i < count(this.hex_trip) && !found; i++) {
      if (this.hex_trip[i] == blue) {
        this.rgb['blue'] = i;
        found = true;
      }
    }
  };



};