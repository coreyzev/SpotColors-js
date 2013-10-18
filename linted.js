function color() {
  'use strict';
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
  this.color = function () {
    var value = 0, x, y;
    for (x = 0; x < 16; x++) {
      for (y = 0; y < 16; y++) {
        this.hex_trip[value] = String(this.hexbase[x]) + String(this.hexbase[y]);
        value++;
      }
    }
  };
  this.set_rgb = function (red, green, blue) {
    this.rgb.red = red;
    this.rgb.green = green;
    this.rgb.blue = blue;

    this.convert_rgb_to_cmyk();
    this.convert_rgb_to_hex();
  };
  this.set_hex = function (hex) {
    hex = hex.toString().toLowerCase();
    this.hex = hex;

    this.convert_hex_to_rgb();
    this.convert_rgb_to_cmyk();
  };
  this.set_cmyk = function (c, m, y, b) {
    this.cmyk.c = c;
    this.cmyk.m = m;
    this.cmyk.y = y;
    this.cmyk.b = b;

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };
  this.set_pantone = function (pantone_name) {
    this.pantone = pantone_name;
    this.cmyk.c = this.pantone_pallete[pantone_name].c;
    this.cmyk.m = this.pantone_pallete[pantone_name].m;
    this.cmyk.y = this.pantone_pallete[pantone_name].y;
    this.cmyk.b = this.pantone_pallete[pantone_name].b;

    this.convert_cmyk_to_rgb();
    this.convert_rgb_to_hex();
  };
  this.get_rgb = function () {
    return this.rgb;
  };
  this.get_hex = function () {
    return this.hex;
  };
  this.get_cmyk = function () {
    return this.cmyk;
  };
  this.convert_rgb_to_hex = function () {
    this.hex = String(this.hex_trip[this.rgb.red]) + String(this.hex_trip[this.rgb.green]) + String(this.hex_trip[this.rgb.blue]);
  };
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
  this.convert_hex_to_rgb = function () {
    var red = this.hex.substr(0, 2);
    var green = this.hex.substr(2, 2);
    var blue = this.hex.substr(4, 2);

    var found = false, i;
    for (i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === red) {
        this.rgb.red = i;
        found = true;
      }
    }

    found = false;
    for (i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === green) {
        this.rgb.green = i;
        found = true;
      }
    }

    found = false;
    for (i = 0; i < this.hex_trip.length() && !found; i++) {
      if (this.hex_trip[i] === blue) {
        this.rgb.blue = i;
        found = true;
      }
    }
  };
}