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
 * author    Sven Wagener <wagener_at_indot_dot_de>
 * author JS, Corey Zev Holland
 * copyright Sven Wagener
 */


//pantone_palette = require('palette.json');


function color() {
  'use strict';

  /**
   * rgb
   * array for RGB colors
   */
  this.rgb = {
    "red": 0,
    "green": 0,
    "blue": 0
  };

  /**
   * hexbase
   * array for HEX code chars
   */
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

  /**
   * hex_trip
   * array for HEX codes
   */
  this.hex_trip = {};

  /**
   * hex
   * variable for HTML HEX color
   */
  this.hex = "";

  /**
   * cmyk
   * array for cmyk colors
   */
  this.cmyk = {
    "c": 0,
    "m": 0,
    "y": 0,
    "b": 0
  };

  /**
   * pantone
   * variable for pantone color name
   */
  this.pantone = "";

  // Reference variable "pantone_palette"

  /**
   * Constructor of class color
   */
  this.color = function () {
    var value = 0, x, y;
    for (x = 0; x < 16; x++) {
      for (y = 0; y < 16; y++) {
        this.hex_trip[value] = String(this.hexbase[x]) + String(this.hexbase[y]);
        value++;
      }
    }
  };

  /**
   * Sets the RGB values
   * int red, number from 0-255 for blue color value
   * int green, number from 0-255 for green color value
   * int blue, number from 0-255 for blue color value
   */
  this.set_rgb = function (red, green, blue) {
    this.rgb.red = red;
    this.rgb.green = green;
    this.rgb.blue = blue;

    this.convert_rgb_to_cmyk();
    this.convert_rgb_to_hex();
  };

  /**
   * Sets the HEX HTML color value like ffff00
   * int red, number from 0-255 for blue color value
   */
  this.set_hex = function (hex) {
    hex = hex.toString().toLowerCase();
    this.hex = hex;

    this.convert_hex_to_rgb();
    this.convert_rgb_to_cmyk();
  };

  /**
   * Sets the CMYK color values
   * int c, number from 0-100 for c color value
   * int m, number from 0-100 for m color value
   * int y, number from 0-100 for y color value
   * int b, number from 0-100 for b color value
   */
  this.set_cmyk = function (c, m, y, b) {
    this.cmyk.c = c;
    this.cmyk.m = m;
    this.cmyk.y = y;
    this.cmyk.b = b;

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };

  /**
   * Sets the pantone color value
   * string $pantone_name name of the pantone color
   */
  this.set_pantone = function (pantone_name) {
    this.pantone = pantone_name;
    this.cmyk.c = this.pantone_pallete[pantone_name].c;
    this.cmyk.m = this.pantone_pallete[pantone_name].m;
    this.cmyk.y = this.pantone_pallete[pantone_name].y;
    this.cmyk.b = this.pantone_pallete[pantone_name].b;

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };

  /**
   * Returns the RGB values of a set color
   * @return array $rgb color values of red ($rgb['red']), green ($rgb['green') and blue ($rgb['blue'])
   * Returns the RGB values of a set color
   */
  this.get_rgb = function () {
    return this.rgb;
  };

  /**
   * Returns the HEX HTML color value of a set color
   * @return string $hex HEX HTML color value
   * Returns the HEX HTML color value of a set color
   */
  this.get_hex = function () {
    return this.hex;
  };

  /**
   * Returns the CMYK values of a set color
   * @return array $cmyk color values of c ($cmyk['c']), m ($cmyk['m'), y ($cmyk['blue']) and b ($cmyk['b'])
   * Returns the CMYK values of a set color
   */
  this.get_cmyk = function () {
    return this.cmyk;
  };

  /**
   * Converts the RGB colors to HEX HTML colors
   */
  this.convert_rgb_to_hex = function () {
    this.hex = String(this.hex_trip[this.rgb.red]) + String(this.hex_trip[this.rgb.green]) + String(this.hex_trip[this.rgb.blue]);
  };

  /**
   * Converts the RGB colors to CMYK colors
   */
  this.convert_rgb_to_cmyk = function () {
    var c = (Math.round((255 - this.rgb.red) / 255.0 * 100, 0));
    var m = (Math.round((255 - this.rgb.green) / 255.0 * 100, 0));
    var y = (Math.round((255 - this.rgb.blue) / 255.0 * 100, 0));

    var b = Math.min({
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
   */
  this.convert_cmyk_to_rgb = function () {
    var red = this.cmyk.c + this.cmyk.b;
    var green = this.cmyk.m + this.cmyk.b;
    var blue = this.cmyk.y + this.cmyk.b;

    red = (red - 100) * (-1);
    green = (green - 100) * (-1);
    blue = (blue - 100) * (-1);

    red = Math.round(red / 100 * 255, 0);
    green = Math.round(green / 100 * 255, 0);
    blue = Math.round(blue / 100 * 255, 0);

    this.rgb.red = red;
    this.rgb.green = green;
    this.rgb.blue = blue;
  };

  /**
   * Converts the HTML HEX colors to RGB colors
   */
  this.convert_hex_to_rgb = function () {
    var red = this.hex.substr(0, 2);
    var green = this.hex.substr(2, 2);
    var blue = this.hex.substr(4, 2);

    var found = false;
    for (var i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === red) {
        this.rgb.red = i;
        found = true;
      }
    }

    found = false;
    for (var i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === green) {
        this.rgb.green = i;
        found = true;
      }
    }

    found = false;
    for (var i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === blue) {
        this.rgb.blue = i;
        found = true;
      }
    }
  };
}