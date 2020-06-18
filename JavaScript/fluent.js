/** 
 * JavaScript script to implement
 * Microsoft Windows 10"s Fluent Design System
 * on a website/page
 * 
 * You won"t find more than a bunch of comments
 * on all the stuff. For more and actual
 * documentation on all sections, please visit:
 * 
 *    *** Enter a valid link here bro! ***
 */


"use strict";





// Get the HTML element as `root` and declare some constants
const root = document.documentElement;
const colorNames = {
  aliceblue: "rgba(240, 248, 255, 1)",
  antiquewhite: "rgba(250, 235, 215, 1)",
  aqua: "rgba(0, 255, 255, 1)",
  aquamarine: "rgba(127, 255, 212, 1)",
  azure: "rgba(240, 255, 255, 1)",
  beige: "rgba(245, 245, 220, 1)",
  bisque: "rgba(255, 228, 196, 1)",
  black: "rgba(0, 0, 0, 1)",
  blanchedalmond: "rgba(255, 235, 205, 1)",
  blue: "rgba(0, 0, 255, 1)",
  blueviolet: "rgba(138, 43, 226, 1)",
  brown: "rgba(165, 42, 42, 1)",
  burlywood: "rgba(222, 184, 135, 1)",
  cadetblue: "rgba(95, 158, 160, 1)",
  chartreuse: "rgba(127, 255, 0, 1)",
  chocolate: "rgba(210, 105, 30, 1)",
  coral: "rgba(255, 127, 80, 1)",
  cornflowerblue: "rgba(100, 149, 237, 1)",
  cornsilk: "rgba(255, 248, 220, 1)",
  crimson: "rgba(220, 20, 60, 1)",
  cyan: "rgba(0, 255, 255, 1)",
  darkblue: "rgba(0, 0, 139, 1)",
  darkcyan: "rgba(0, 139, 139, 1)",
  darkgoldenrod: "rgba(184, 134, 11, 1)",
  darkgray: "rgba(169, 169, 169, 1)",
  darkgreen: "rgba(0, 100, 0, 1)",
  darkkhaki: "rgba(189, 183, 107, 1)",
  darkmagenta: "rgba(139, 0, 139, 1)",
  darkolivegreen: "rgba(85, 107, 47, 1)",
  darkorange: "rgba(255, 140, 0, 1)",
  darkorchid: "rgba(153, 50, 204, 1)",
  darkred: "rgba(139, 0, 0, 1)",
  darksalmon: "rgba(233, 150, 122, 1)",
  darkseagreen: "rgba(143, 188, 143, 1)",
  darkslateblue: "rgba(72, 61, 139, 1)",
  darkslategray: "rgba(47, 79, 79, 1)",
  darkturquoise: "rgba(0, 206, 209, 1)",
  darkviolet: "rgba(148, 0, 211, 1)",
  deeppink: "rgba(255, 20, 147, 1)",
  deepskyblue: "rgba(0, 191, 255, 1)",
  dimgray: "rgba(105, 105, 105, 1)",
  dodgerblue: "rgba(30, 144, 255, 1)",
  firebrick: "rgba(178, 34, 34, 1)",
  floralwhite: "rgba(255, 250, 240, 1)",
  forestgreen: "rgba(34, 139, 34, 1)",
  fuchsia: "rgba(255, 0, 255, 1)",
  gainsboro: "rgba(220, 220, 220, 1)",
  ghostwhite: "rgba(248, 248, 255, 1)",
  gold: "rgba(255, 215, 0, 1)",
  goldenrod: "rgba(218, 165, 32, 1)",
  gray: "rgba(128, 128, 128, 1)",
  green: "rgba(0, 128, 0, 1)",
  greenyellow: "rgba(173, 255, 47, 1)",
  honeydew: "rgba(240, 255, 240, 1)",
  hotpink: "rgba(255, 105, 180, 1)",
  indianred: "rgba(205, 92, 92, 1)",
  indigo: "rgba(75, 0, 130, 1)",
  ivory: "rgba(255, 255, 240, 1)",
  khaki: "rgba(240, 230, 140, 1)",
  lavender: "rgba(230, 230, 250, 1)",
  lavenderblush: "rgba(255, 240, 245, 1)",
  lawngreen: "rgba(124, 252, 0, 1)",
  lemonchiffon: "rgba(255, 250, 205, 1)",
  lightblue: "rgba(173, 216, 230, 1)",
  lightcoral: "rgba(240, 128, 128, 1)",
  lightcyan: "rgba(224, 255, 255, 1)",
  lightgoldenrodyellow: "rgba(250, 250, 210, 1)",
  lightgreen: "rgba(144, 238, 144, 1)",
  lightgrey: "rgba(211, 211, 211, 1)",
  lightpink: "rgba(255, 182, 193, 1)",
  lightsalmon: "rgba(255, 160, 122, 1)",
  lightseagreen: "rgba(32, 178, 170, 1)",
  lightskyblue: "rgba(135, 206, 250, 1)",
  lightslategray: "rgba(119, 136, 153, 1)",
  lightsteelblue: "rgba(176, 196, 222, 1)",
  lightyellow: "rgba(255, 255, 224, 1)",
  lime: "rgba(0, 255, 0, 1)",
  limegreen: "rgba(50, 205, 50, 1)",
  linen: "rgba(250, 240, 230, 1)",
  magenta: "rgba(255, 0, 255, 1)",
  maroon: "rgba(128, 0, 0, 1)",
  mediumaquamarine: "rgba(102, 205, 170, 1)",
  mediumblue: "rgba(0, 0, 205, 1)",
  mediumorchid: "rgba(186, 85, 211, 1)",
  mediumpurple: "rgba(147, 112, 216, 1)",
  mediumseagreen: "rgba(60, 179, 113, 1)",
  mediumslateblue: "rgba(123, 104, 238, 1)",
  mediumspringgreen: "rgba(0, 250, 154, 1)",
  mediumturquoise: "rgba(72, 209, 204, 1)",
  mediumvioletred: "rgba(199, 21, 133, 1)",
  midnightblue: "rgba(25, 25, 112, 1)",
  mintcream: "rgba(245, 255, 250, 1)",
  mistyrose: "rgba(255, 228, 225, 1)",
  moccasin: "rgba(255, 228, 181, 1)",
  navajowhite: "rgba(255, 222, 173, 1)",
  navy: "rgba(0, 0, 128, 1)",
  oldlace: "rgba(253, 245, 230, 1)",
  olive: "rgba(128, 128, 0, 1)",
  olivedrab: "rgba(107, 142, 35, 1)",
  orange: "rgba(255, 165, 0, 1)",
  orangered: "rgba(255, 69, 0, 1)",
  orchid: "rgba(218, 112, 214, 1)",
  palegoldenrod: "rgba(238, 232, 170, 1)",
  palegreen: "rgba(152, 251, 152, 1)",
  paleturquoise: "rgba(175, 238, 238, 1)",
  palevioletred: "rgba(216, 112, 147, 1)",
  papayawhip: "rgba(255, 239, 213, 1)",
  peachpuff: "rgba(255, 218, 185, 1)",
  peru: "rgba(205, 133, 63, 1)",
  pink: "rgba(255, 192, 203, 1)",
  plum: "rgba(221, 160, 221, 1)",
  powderblue: "rgba(176, 224, 230, 1)",
  purple: "rgba(128, 0, 128, 1)",
  rebeccapurple: "rgba(102, 51, 153, 1)",
  red: "rgba(255, 0, 0, 1)",
  rosybrown: "rgba(188, 143, 143, 1)",
  royalblue: "rgba(65, 105, 225, 1)",
  saddlebrown: "rgba(139, 69, 19, 1)",
  salmon: "rgba(250, 128, 114, 1)",
  sandybrown: "rgba(244, 164, 96, 1)",
  seagreen: "rgba(46, 139, 87, 1)",
  seashell: "rgba(255, 245, 238, 1)",
  sienna: "rgba(160, 82, 45, 1)",
  silver: "rgba(192, 192, 192, 1)",
  skyblue: "rgba(135, 206, 235, 1)",
  slateblue: "rgba(106, 90, 205, 1)",
  slategray: "rgba(112, 128, 144, 1)",
  snow: "rgba(255, 250, 250, 1)",
  spotifygreen: "rgba(29, 185, 84, 1)",
  springgreen: "rgba(0, 255, 127, 1)",
  steelblue: "rgba(70, 130, 180, 1)",
  tan: "rgba(210, 180, 140, 1)",
  teal: "rgba(0, 128, 128, 1)",
  thistle: "rgba(216, 191, 216, 1)",
  tomato: "rgba(255, 99, 71, 1)",
  turquoise: "rgba(64, 224, 208, 1)",
  violet: "rgba(238, 130, 238, 1)",
  wheat: "rgba(245, 222, 179, 1)",
  white: "rgba(255, 255, 255, 1)",
  whitesmoke: "rgba(245, 245, 245, 1)",
  yellow: "rgba(255, 255, 0, 1)",
  yellowgreen: "rgba(154, 205, 50, 1)"
}





// Global functions
let UID = {
  _current: 0,
  getNew: () => {
    this._current++;
    return this._current;
  }
};



window.addStyle = (selector, pseudoSelector = "", property, style) => {
  let _this = this;
  let _sheetId = "pseudoStyles";
  let _head = document.head || document.getElementsByTagName("head")[0];
  let _sheet = document.getElementById(_sheetId) || document.createElement("style");
  _sheet.id = _sheetId;

  _sheet.innerHTML += `

${selector}${pseudoSelector} {
  ${property}: ${style}
}`;
  _head.appendChild(_sheet);

  return this;
};





// Function to check if a class is used in an element
/**
 * Returns true if `element` uses class `className`; else returns false
 */
function hasClass(element, className) {
  const classList = element.classList;
  for (let index = 0; index < classList.length; index++) {
    let foundClass = classList[index];
    if (foundClass == className) {
      return true;
    }
  }
  return false;
}





// Function to clamp a value between two values
/**
 * Returns the value after clamping `min`, `value`, `max`
 * 
 * A clamped value is the `value` itself when the `value` is
 * in the domain [`min`, `max`], else, the clamped value becomes
 * the extremity (`min`, `max`) which is nearer to the `value`
 */
function clamp(min = 0, value = 0.5, max = 1) {
  return Math.max(min, Math.min(value, max));
}





function RGBAToHSLA(r = 0, g = 0, b = 0, a = 1, asArray = false) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100);
  l = +(l * 100);

  if (asArray == true) {
    return [h, s, l, a];
  }

  return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
}





function HSLAToRGBA(h = 0, s = 100, l = 50, a = 1, asArray = false) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  s = Math.max(s, 0);
  s = Math.min(s, 1);

  l = Math.max(l, 0);
  l = Math.min(l, 1);

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  if (asArray == true) {
    return [r, g, b, a];
  }

  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}





function HEXAToRGBA(h, asArray = false) {
  let r = 0,
    g = 0,
    b = 0,
    a = 1;

  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = 255;
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = 255;
  } else if (h.length == 5) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = "0x" + h[4] + h[4];
  } else if (h.length == 9) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = "0x" + h[7] + h[8];
  }
  a = +(a / 255);

  if (asArray) {
    return [r, g, b, a];
  }

  return "rgba(" + +r + ", " + +g + ", " + +b + ", " + a + ")";
}





function RGBAToHEXA() {
  if (arguments.length == 1) {
    let rgba = arguments[0];

    let sep = rgba.indexOf(",") > -1 ? "," : " ";
    rgba = rgba.substr(5).split(")")[0].split(sep);

    // Strip the slash if using space-separated syntax
    if (rgba.indexOf("/") > -1) {
      rgba.splice(3, 1);
    }

    for (let R in rgba) {
      let r = rgba[R];
      if (r.indexOf("%") > -1) {
        let p = r.substr(0, r.length - 1) / 100;

        if (R < 3) {
          rgba[R] = Math.round(p * 255);
        } else {
          rgba[R] = p;
        }
      }
    }

    let r = (+rgba[0]).toString(16),
      g = (+rgba[1]).toString(16),
      b = (+rgba[2]).toString(16);
    let a = Math.round(+rgba[3] * 255).toString(16);

    if (r.length == 1) {
      r = "0" + r;
    }

    if (g.length == 1) {
      g = "0" + g;
    }

    if (b.length == 1) {
      b = "0" + b;
    }

    if (a.length == 1) {
      a = "0" + a;
    }

    return "#" + r + g + b + a;
  } else {
    let r = arguments[0],
      g = arguments[1],
      b = arguments[2];
    let a = arguments[3] || 1;

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);

    if (r.length == 1) {
      r = "0" + r;
    }

    if (g.length == 1) {
      g = "0" + g;
    }

    if (b.length == 1) {
      b = "0" + b;
    }

    if (a.length == 1) {
      a = "0" + a;
    }

    return "#" + r + g + b + a;
  }
}





function RGBAToHSVA(r, g, b, a, asArray = false) {
  if (arguments.length == 1) {
    let rgba = arguments[0];

    if (rgba[3] == "(") {
      rgba = rgba.replace("(", "a(").replace(")", ", 1)");
    }

    rgba = rgba.replace(/\s/g, "").replace("rgba(", "").replace(")", "").split(",");

    let r = +rgba[0],
      g = +rgba[1],
      b = +rgba[2];
    let a = rgba[3] || 1;
    let asArray = rgba[4] || false;

    r /= 255, g /= 255, b /= 255;

    let cmax = Math.max(r, g, b);
    let cmin = Math.min(r, g, b);
    let diff = cmax - cmin;

    let h, s, v;

    if (cmax == cmin) {
      h = 0;
    } else if (cmax == r) {
      h = (60 * ((g - b) / diff) + 360) % 360;
    } else if (cmax == g) {
      h = (60 * ((b - r) / diff) + 120) % 360;
    } else if (cmax == b) {
      h = (60 * ((r - g) / diff) + 240) % 360;
    }

    if (cmax == 0) {
      s = 0;
    } else {
      s = (diff / cmax) * 100;
    }

    v = cmax * 100;

    if (asArray) {
      return [h, s, v, a];
    }

    return "hsva(" + +h + ", " + +s + ", " + +v + ", " + +a + ")";
  } else {
    let r = arguments[0],
      g = arguments[1],
      b = arguments[2];
    let a = arguments[3] || 1;
    //let asArray = arguments[4] || false;

    r /= 255, g /= 255, b /= 255;

    let cmax = Math.max(r, g, b);
    let cmin = Math.min(r, g, b);
    let diff = cmax - cmin;

    let h, s, v;

    if (cmax == cmin) {
      h = 0;
    } else if (cmax == r) {
      h = (60 * ((g - b) / diff) + 360) % 360;
    } else if (cmax == g) {
      h = (60 * ((b - r) / diff) + 120) % 360;
    } else if (cmax == b) {
      h = (60 * ((r - g) / diff) + 240) % 360;
    }

    if (cmax == 0) {
      s = 0;
    } else {
      s = (diff / cmax) * 100;
    }

    v = cmax * 100;

    if (asArray) {
      return [h, s, v, a];
    }

    return "hsva(" + +h + ", " + +s + ", " + +v + ", " + +a + ")";
  }
}





function HSVAToRGBA(h, s, v, a = 1, asArray = false) {
  let r, g, b, i, f, p, q, t;

  if (arguments.length == 1) {
    let hsva = arguments[0];
    h = hsva.h, s = hsva.s, v = hsva.v;
    a = hsva.a || 1;
    asArray = hsva.asArray || false;
  }

  a = a || 1;
  asArray = asArray || false;

  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  if (asArray) {
    return [r, g, b, a];
  }

  return "rgba(" + +r + ", " + +g + ", " + +b + ", " + +a + ")";
}





function colorNameToRGBA(colorName) {
  return colorNames[colorName];
}




function getLuminance(r, g, b) {
  let a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}





function getColorContrast(color = "rgba(0, 120, 215, 1)", background = "rgba(255, 255, 255, 1)") {
  if (color[0] == " ") {
    color = color.replace(" ", "");
  }
  if (background[0] == " ") {
    background = background.replace(" ", "");
  }

  if (color.slice(0, 4) === "hsl(") {
    color = color.replace("l(", "la(").replace(")", ", 1)");
  }

  if (color.slice(0, 4) === "hsla") {
    let colors = color.replace("hsla(", "").replace(")", "").replace(/\s/g, "").replace(/\%/g, "").split(",");
    color = HSLAToRGBA(colors[0], colors[1], colors[2], 1);
  }
  if (background.slice(0, 4) === "hsla") {
    let backgrounds = background.replace("hsla(", "").replace(")", "").replace(/\s/g, "").replace(/\%/g, "").split(",");
    background = HSLAToRGBA(backgrounds[0], backgrounds[1], backgrounds[2], 1);
  }

  if (color.slice(0, 4) === "rgb(") {
    color = color.replace("(", "a(").replace(")", ", 1)");
  }
  if (background.slice(0, 4) === "rgb(") {
    background = background.replace("(", "a(").replace(")", ", 1)");
  }

  if (color.slice(0, 4) === "rgba") {
    color = color;
  } else {
    color = colorNameToRGBA(color);
  }
  if (background.slice(0, 4) === "rgba") {
    background = background;
  } else {
    background = colorNameToRGBA(background);
  }

  color = RGBAToHEXA(color);
  background = RGBAToHEXA(background);

  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);
  const a = 1;

  let colorLuminance = getLuminance(r, g, b);

  r = parseInt(background.slice(1, 3), 16);
  g = parseInt(background.slice(3, 5), 16);
  b = parseInt(background.slice(5, 7), 16);

  let backgroundLuminance = getLuminance(r, g, b);

  return colorLuminance < backgroundLuminance ?
    ((backgroundLuminance + 0.05) / (colorLuminance + 0.05)) :
    ((colorLuminance + 0.05) / (backgroundLuminance + 0.05));
}





function isValidContrast(contrast = 4.5) {
  contrast = parseFloat(contrast);

  if (contrast.toFixed(2) < 4.5) {
    return false;
  }

  return true;
}





function setTheme(themeName = null) {
  themeName = themeName || localStorage.getItem("colorMode");
  themeName = themeName || getComputedStyle(root).getPropertyValue("--preferred-color-theme");
  themeName = themeName.replace(/\s/g, "").replace(`"`, ``).replace(`"`, ``);

  let blackColor, neutralDarkColor, neutralPrimaryColor, neutralPrimaryAltColor, neutralSecondaryColor, neutralTertiaryColor, whiteColor;
  let neutralTertiaryAltColor, neutralQuaternaryAltColor, neutralLightColor, neutralLighterColor, neutralLighterAltColor;
  let windowsColor;

  if (themeName == "light") {
    blackColor = "rgba(11, 11, 11, 1)";
    neutralDarkColor = "rgba(21, 21, 21, 1)";
    neutralPrimaryColor = "rgba(0, 0, 0, 1)";
    neutralPrimaryAltColor = "rgba(47, 47, 47, 1)";
    neutralSecondaryColor = "rgba(55, 55, 55, 1)";
    neutralTertiaryColor = "rgba(89, 89, 89, 1)";
    whiteColor = "rgba(255, 255, 255, 1)";

    neutralTertiaryAltColor = "rgba(200, 198, 196, 1)";
    neutralQuaternaryAltColor = "rgba(225, 223, 221, 1)";
    neutralLightColor = "rgba(237, 235, 233, 1)";
    neutralLighterColor = "rgba(243, 242, 241, 1)";
    neutralLighterAltColor = "rgba(250, 249, 248, 1)";

    windowsColor = "rgba(228, 228, 228, 1)";

    let darkAcrylicElements = document.querySelectorAll(".acrylic.dark");
    for (let index = 0; index < darkAcrylicElements.length; index++) {
      darkAcrylicElements[index].classList.remove("dark");
      darkAcrylicElements[index].classList.add("light");
    }
  } else {
    blackColor = "rgba(248, 248, 248, 1)";
    neutralDarkColor = "rgba(244, 244, 244, 1)";
    neutralPrimaryColor = "rgba(255, 255, 255, 1)";
    neutralPrimaryAltColor = "rgba(218, 218, 218, 1)";
    neutralSecondaryColor = "rgba(208, 208, 208, 1)";
    neutralTertiaryColor = "rgba(200, 200, 200, 1)";
    whiteColor = "rgba(0, 0, 0, 1)";

    neutralTertiaryAltColor = "rgba(89, 89, 89, 1)";
    neutralQuaternaryAltColor = "rgba(47, 47, 47, 1)";
    neutralLightColor = "rgba(37, 37, 37, 1)";
    neutralLighterColor = "rgba(21, 21, 21, 1)";
    neutralLighterAltColor = "rgba(11, 11, 11, 1)";

    windowsColor = "rgba(64, 64, 64, 1)";

    let lightAcrylicElements = document.querySelectorAll(".acrylic.light");
    for (let index = 0; index < lightAcrylicElements.length; index++) {
      lightAcrylicElements[index].classList.remove("light");
      lightAcrylicElements[index].classList.add("dark");
    }
  }

  root.style.setProperty("--black-color", blackColor);
  root.style.setProperty("--neutral-dark-color", neutralDarkColor);
  root.style.setProperty("--neutral-primary-color", neutralPrimaryColor);
  root.style.setProperty("--neutral-primary-alt-color", neutralPrimaryAltColor);
  root.style.setProperty("--neutral-secondary-color", neutralSecondaryColor);
  root.style.setProperty("--neutral-tertiary-color", neutralTertiaryColor);
  root.style.setProperty("--white-color", whiteColor);

  root.style.setProperty("--neutral-tertiary-alt-color", neutralTertiaryAltColor);
  root.style.setProperty("--neutral-quaternary-alt-color", neutralQuaternaryAltColor);
  root.style.setProperty("--neutral-light-color", neutralLightColor);
  root.style.setProperty("--neutral-lighter-color", neutralLighterColor);
  root.style.setProperty("--neutral-lighter-alt-color", neutralLighterAltColor);

  root.style.setProperty("--windows-color", windowsColor);

  themeScheme = {
    theme: themeName,

    black: blackColor,
    neutralDark: neutralDarkColor,
    neutralPrimary: neutralPrimaryColor,
    neutralPrimaryAlt: neutralPrimaryAltColor,
    neutralSecondary: neutralSecondaryColor,
    neutralTertiary: neutralTertiaryColor,
    white: whiteColor,

    neutralTertiaryAlt: neutralTertiaryAltColor,
    neutralQuaternaryAlt: neutralQuaternaryAltColor,
    neutralLight: neutralLightColor,
    neutralLighter: neutralLighterColor,
    neutralLighterAlt: neutralLighterAltColor,

    windowsPrimary: windowsColor
  };

  preferredColorTheme = themeScheme.theme;

  root.style.setProperty("--preferred-color-theme", preferredColorTheme);

  return themeScheme;
}

var themeScheme = setTheme("light");
var preferredColorTheme = themeScheme.theme;



function toggleMode() {
  if (preferredColorTheme == "light") {
    setTheme("dark");
    localStorage.setItem("colorMode", "dark");
  } else {
    setTheme("light");
    localStorage.setItem("colorMode", "light");
  }
}






// Making color schemes dynamically using JavaScript (color values from CSS)
function makeColorScheme(themePrimaryColor = null) {
  themePrimaryColor = ((themePrimaryColor || localStorage.getItem("themeColor")) || getComputedStyle(root).getPropertyValue("--theme-primary-color")) || "rgba(0, 120, 215, 1)";

  if (themePrimaryColor[0] == " ") {
    themePrimaryColor = themePrimaryColor.replace(" ", "");
  }

  if (themePrimaryColor[0] == "#") {
    themePrimaryColor = HEXAToRGBA(themePrimaryColor);
  } else if (themePrimaryColor.slice(0, 4) === "hsl(") {
    let themePrimaryColor_A = 1;
    themePrimaryColor = themePrimaryColor.replace("l(", "la(").replace(")", ", 1)");
  }

  if (themePrimaryColor.slice(0, 4) === "hsla") {
    let themePrimaryColors = themePrimaryColor.replace("hsla(", "").replace(")", "").replace(/\s/g, "").replace(/\%/g, "").split(",");
    themePrimaryColor = HSLAToRGBA(themePrimaryColors[0], themePrimaryColors[1], themePrimaryColors[2], 1);
  }

  if (themePrimaryColor.slice(0, 4) === "rgb(") {
    let themePrimaryColor_A = 1;
    themePrimaryColor = themePrimaryColor.replace("(", "a(").replace(")", `, ${themePrimaryColor_A})`);
  }

  if (themePrimaryColor.slice(0, 4) === "rgba") {
    themePrimaryColor = themePrimaryColor;
  } else {
    themePrimaryColor = colorNameToRGBA(themePrimaryColor);
  }

  let contrast = getColorContrast(themePrimaryColor, themeScheme.white);

  if (!isValidContrast(contrast)) {
    themePrimaryColor = "rgba(0, 120, 215, 1)";
    console.log("color contrast is '" + contrast + "' (< 4.5), reverting back to 'rgba(0, 120, 215, 1)'");
  }

  root.style.setProperty("--theme-primary-color", themePrimaryColor);
  themePrimaryColor = getComputedStyle(root).getPropertyValue("--theme-primary-color");
  localStorage.setItem("themeColor", themePrimaryColor);

  let themePrimaryColors = themePrimaryColor.replace("rgba(", "").replace(")", "").replace(/\s/g, "").split(",");
  let themePrimaryColor_R = +(themePrimaryColors[0]);
  let themePrimaryColor_G = +(themePrimaryColors[1]);
  let themePrimaryColor_B = +(themePrimaryColors[2]);
  let themePrimaryColor_A = +(themePrimaryColors[3]);

  if (themePrimaryColor_A !== 1) {
    themePrimaryColor_A = 1;
    themePrimaryColor = "rgba(" + themePrimaryColor_R + ", " + themePrimaryColor_G + ", " + themePrimaryColor_B + ", " + themePrimaryColor_A + ")";
    root.style.setProperty("--theme-primary-color", themePrimaryColor);
  }

  localStorage.setItem("themeColor", themePrimaryColor);

  themePrimaryColor = RGBAToHSLA(themePrimaryColor_R, themePrimaryColor_G, themePrimaryColor_B, themePrimaryColor_A, true);

  let themePrimaryColor_H = themePrimaryColor[0];
  let themePrimaryColor_S = themePrimaryColor[1];
  let themePrimaryColor_L = themePrimaryColor[2];
  themePrimaryColor_A = themePrimaryColor[3];

  themePrimaryColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, themePrimaryColor_L, 1, false);
  let themePrimaryColor25 = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, themePrimaryColor_L, 0.25, false);

  let themeDarkAltColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.max((themePrimaryColor_L - 5), 0), 1, false);
  let themeDarkColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.max((themePrimaryColor_L - 10), 0), 1, false);
  let themeDarkerColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.max((themePrimaryColor_L - 15), 0), 1, false);

  let themeSecondaryColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.min((themePrimaryColor_L + 5), 100), 1, false);
  let themeTertiaryColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.min((themePrimaryColor_L + 10), 100), 1, false);
  let themeLightColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.min((themePrimaryColor_L + 15), 100), 1, false);
  let themeLighterColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.min((themePrimaryColor_L + 20), 100), 1, false);
  let themeLighterAltColor = HSLAToRGBA(themePrimaryColor_H, themePrimaryColor_S, Math.min((themePrimaryColor_L + 25), 100), 1, false);

  root.style.setProperty("--theme-primary-color", themePrimaryColor);
  root.style.setProperty("--theme-primary-color-25", themePrimaryColor25);

  root.style.setProperty("--theme-dark-alt-color", themeDarkAltColor);
  root.style.setProperty("--theme-dark-color", themeDarkColor);
  root.style.setProperty("--theme-darker-color", themeDarkerColor);

  root.style.setProperty("--theme-secondary-color", themeSecondaryColor);
  root.style.setProperty("--theme-tertiary-color", themeTertiaryColor);
  root.style.setProperty("--theme-light-color", themeLightColor);
  root.style.setProperty("--theme-lighter-color", themeLighterColor);
  root.style.setProperty("--theme-lighter-alt-color", themeLighterAltColor);

  colorScheme = {
    themePrimary: themePrimaryColor,
    themePrimary25: themePrimaryColor25,
    themeSecondary: themeSecondaryColor,
    themeTertiary: themeTertiaryColor,
    themeLight: themeLightColor,
    themeLighter: themeLighterColor,
    themeLighterAlt: themeLighterAltColor,
    themeDarkAlt: themeDarkAltColor,
    themeDark: themeDarkColor,
    themeDarker: themeDarkerColor
  };

  return colorScheme;
}





// Maintain the status of `AcrylicBrush` dynamically
let acrylicElements = document.getElementsByClassName("acrylic");
for (let index = 0; index < acrylicElements.length; index++) {
  let acrylicElement = acrylicElements[index];

  function setAcrylicProperties(acrylicElement) {
    let backgroundColor = getComputedStyle(acrylicElement).backgroundColor.replace(/\s/g, "");

    if (backgroundColor.replace(/\s/g, "").slice(0, 4) === "rgb(") {
      let backgroundColor_A = 0.965;
      backgroundColor = backgroundColor.replace("(", "a(").replace(")", `, ${backgroundColor_A})`);
      acrylicElement.style.backgroundColor = backgroundColor;
    }

    let backgroundColors = backgroundColor.replace("rgba(", "").replace(")", "").replace(/\s/g, "").split(",");
    let backgroundColor_R = +backgroundColors[0];
    let backgroundColor_G = +backgroundColors[1];
    let backgroundColor_B = +backgroundColors[2];
    let backgroundColor_A = +backgroundColors[3];

    backgroundColor_A = clamp(0.125, backgroundColor_A, 0.965);

    backgroundColor = "rgba(" + backgroundColor_R + ", " + backgroundColor_G + ", " + backgroundColor_B + ", " + backgroundColor_A + ")";
    acrylicElement.style.backgroundColor = backgroundColor;
    backgroundColors = RGBAToHSVA(backgroundColor_R, backgroundColor_G, backgroundColor_B, backgroundColor_A, true);

    let backdropFilters = getComputedStyle(acrylicElement).backdropFilter.split(" ").sort();
    let blur = backdropFilters[0];
    let brightness = backdropFilters[1];
    let saturate = backdropFilters[2];

    saturate = ((backgroundColor_A * 0.88) + 0.15) + 1; // `+1` because CSS works differently

    if (backgroundColors[2] > 50) {
      brightness = 1.45;
    } else if (backgroundColors[2] == 50) {
      brightness = 0.9;
    } else {
      brightness = 0.85;
    }

    if (backgroundColor == "rgba(46, 46, 46, 0.125)") {
      saturate = 1.12;
      brightness = 0.9;
    }

    saturate = `saturate(${saturate})`;
    brightness = `brightness(${brightness})`;
    backdropFilters = `${blur} ${saturate} ${brightness}`;

    acrylicElement.style.backdropFilter = backdropFilters;
  }

  setAcrylicProperties(acrylicElement);

  let acrylicObserver = new MutationObserver((mutations) => {
    setAcrylicProperties(acrylicElement);
  });

  acrylicObserver.observe(acrylicElement, {
    attributes: true,
    attributeFilter: ["style", "onchange"]
  });
}





// Function to apply `RevealBrush` to elements using class `reveal`
const reveal = () => {
  let revealElements = document.getElementsByClassName("reveal");
  for (let index = 0; index < revealElements.length; index++) {
    let revealElement = revealElements[index];

    let defaultBackgroundColor = revealElement.style.backgroundColor || getComputedStyle(revealElement).backgroundColor.replace(/\s/g, "").replace(/,/g, ", ");

    if (defaultBackgroundColor[3] == "(") {
      defaultBackgroundColor = defaultBackgroundColor.replace("(", "a(").replace(")", ", 1)");
    }

    if (preferredColorTheme == "light") {
      if (defaultBackgroundColor == "rgba(11, 11, 11, 1)") {
        defaultBackgroundColor = "var(--black-color)";
      } else if (defaultBackgroundColor == "rgba(21, 21, 21, 1)") {
        defaultBackgroundColor = "var(--neutral-dark-color)";
      } else if (defaultBackgroundColor == "rgba(0, 0, 0, 1)") {
        defaultBackgroundColor = "var(--neutral-primary-color)";
      } else if (defaultBackgroundColor == "rgba(47, 47, 47, 1)") {
        defaultBackgroundColor = "var(--neutral-primary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(55, 55, 55, 1)") {
        defaultBackgroundColor = "var(--neutral-secondary-color)";
      } else if (defaultBackgroundColor == "rgba(89, 89, 89, 1)") {
        defaultBackgroundColor = "var(--neutral-tertiary-color)";
      } else if (defaultBackgroundColor == "rgba(255, 255, 255, 1)") {
        defaultBackgroundColor = "var(--white-color)";
      } else if (defaultBackgroundColor == "rgba(200, 198, 196, 1)") {
        defaultBackgroundColor = "var(--neutral-tertiary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(225, 223, 221, 1)") {
        defaultBackgroundColor = "var(--neutral-quaternary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(237, 235, 233, 1)") {
        defaultBackgroundColor = "var(--neutral-light-color)";
      } else if (defaultBackgroundColor == "rgba(243, 242, 241, 1)") {
        defaultBackgroundColor = "var(--neutral-lighter-color)";
      } else if (defaultBackgroundColor == "rgba(250, 249, 248, 1)") {
        defaultBackgroundColor = "var(--neutral-lighter-alt-color)";
      } else if (defaultBackgroundColor == "rgba(228, 228, 228, 1)") {
        defaultBackgroundColor = "var(--windows-color)";
      }
    } else {
      if (defaultBackgroundColor == "rgba(248, 248, 248, 1)") {
        defaultBackgroundColor = "var(--black-color)";
      } else if (defaultBackgroundColor == "rgba(244, 244, 244, 1)") {
        defaultBackgroundColor = "var(--neutral-dark-color)";
      } else if (defaultBackgroundColor == "rgba(255, 255, 255, 1)") {
        defaultBackgroundColor = "var(--neutral-primary-color)";
      } else if (defaultBackgroundColor == "rgba(218, 218, 218, 1)") {
        defaultBackgroundColor = "var(--neutral-primary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(208, 208, 208, 1)") {
        defaultBackgroundColor = "var(--neutral-secondary-color)";
      } else if (defaultBackgroundColor == "rgba(200, 200, 200, 1)") {
        defaultBackgroundColor = "var(--neutral-tertiary-color)";
      } else if (defaultBackgroundColor == "rgba(0, 0, 0, 1)") {
        defaultBackgroundColor = "var(--white-color)";
      } else if (defaultBackgroundColor == "rgba(89, 89, 89, 1)") {
        defaultBackgroundColor = "var(--neutral-tertiary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(47, 47, 47, 1)") {
        defaultBackgroundColor = "var(--neutral-quaternary-alt-color)";
      } else if (defaultBackgroundColor == "rgba(37, 37, 37, 1)") {
        defaultBackgroundColor = "var(--neutral-light-color)";
      } else if (defaultBackgroundColor == "rgba(21, 21, 21, 1)") {
        defaultBackgroundColor = "var(--neutral-lighter-color)";
      } else if (defaultBackgroundColor == "rgba(11, 11, 11, 1)") {
        defaultBackgroundColor = "var(--neutral-lighter-alt-color)";
      } else if (defaultBackgroundColor == "rgba(64, 64, 64, 1)") {
        defaultBackgroundColor = "var(--windows-color)";
      }
    }

    let defaultBackgroundImage = getComputedStyle(revealElement).backgroundImage[0] === " " ? getComputedStyle(revealElement).backgroundImage.replace(" ", "") : getComputedStyle(revealElement).backgroundImage;

    if ((defaultBackgroundColor == null) || (defaultBackgroundColor == "")) {
      defaultBackgroundColor = "var(--windows-color)";
    }

    document.addEventListener("mousemove", (e) => {
      let revealColor;
      if (preferredColorTheme == "light") {
        revealColor = "31, 31, 31";
      } else {
        revealColor = "255, 255, 255";
      }

      let positionInfo = revealElement.getBoundingClientRect();

      let menuWidth = positionInfo.width;
      let menuHeight = positionInfo.height;

      let mousePositionX = event.clientX - positionInfo.left;
      let mousePositionY = event.clientY - positionInfo.top;

      if ((mousePositionX > -100) && (mousePositionX < menuWidth + 100) && (mousePositionY > -100) && (mousePositionY < menuHeight + 100)) {
        let percentageX = (mousePositionX / menuWidth) * 100;
        let percentageY = (mousePositionY / menuHeight) * 100;

        let intensity = 0;

        if ((percentageX > 0) && (percentageX < 100) &&
          (percentageY > 0) && (percentageY < 100)) {
          intensity = 0.5;
          revealElement.style.borderColor = "transparent";
          revealElement.style.backgroundColor = defaultBackgroundColor;
          revealElement.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", " + intensity + "), transparent 150px) 1";

          if (revealElement.hasAttribute("data-border-only") == false) {
            revealElement.style.backgroundImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", 0.25), transparent 150px), " + defaultBackgroundImage;
          }

          if (revealElement.hasAttribute("data-full-reveal")) {
            revealElement.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", 0.5), rgba(" + revealColor + ", 0.05) 50px) 1";
            revealElement.style.borderColor = "rgba(" + revealColor + ", 0.25)";
          }

          if (revealElement.hasAttribute("data-min-border")) {
            if (revealElement.hasAttribute("data-border-only") == false) {
              revealElement.style.backgroundImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", 0.3), rgba(" + revealColor + ", 0.1) 100px), " + defaultBackgroundImage;
            }
            revealElement.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", 0.75), transparent 50px) 1";
          }

          return;
        } else if ((mousePositionX > -20) && (mousePositionX < menuWidth + 20) &&
          (mousePositionY > -20) && (mousePositionY < menuHeight + 20)) {
          intensity = 0.4;
        } else if ((mousePositionX > -40) && (mousePositionX < menuWidth + 40) &&
          (mousePositionY > -40) && (mousePositionY < menuHeight + 40)) {
          intensity = 0.3;
        } else if ((mousePositionX > -60) && (mousePositionX < menuWidth + 60) &&
          (mousePositionY > -60) && (mousePositionY < menuHeight + 60)) {
          intensity = 0.2;
        } else if ((mousePositionX > -80) && (mousePositionX < menuWidth + 80) &&
          (mousePositionY > -80) && (mousePositionY < menuHeight + 80)) {
          intensity = 0.1;
        } else if ((mousePositionX > -100) && (mousePositionX < menuWidth + 100) &&
          (mousePositionY > -100) && (mousePositionY < menuHeight + 100)) {
          intensity = 0;
        }
        revealElement.style.borderColor = "transparent";
        revealElement.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + revealColor + ", " + intensity + "), transparent 50px) 1";
        revealElement.style.backgroundColor = defaultBackgroundColor;
        revealElement.style.backgroundImage = defaultBackgroundImage;
      } else {
        revealElement.style.borderColor = "transparent";
        revealElement.style.borderImage = null;
        revealElement.style.backgroundColor = defaultBackgroundColor;
        revealElement.style.backgroundImage = defaultBackgroundImage;
      }
    }, false);
    if (revealElement.hasAttribute("data-no-ripple") == false) {
      revealElement.addEventListener("click", (e) => {
        let rippleDiv = document.createElement("div");
        rippleDiv.className = "ripple";
        let x = e.clientX - revealElement.getBoundingClientRect().left - 2.5;
        let y = e.clientY - revealElement.getBoundingClientRect().top - 4.5;
        rippleDiv.style.top = `${y}px`;
        rippleDiv.style.left = `${x}px`;
        revealElement.style.backgroundColor = defaultBackgroundColor;
        rippleDiv.style.animationTimingFunction = "var(--linear)";
        if (revealElement.hasAttribute("data-quick-ripple")) {
          rippleDiv.style.animationTimingFunction = "var(--standard)";
        }
        revealElement.appendChild(rippleDiv);
        setTimeout(() => {
          revealElement.removeChild(rippleDiv);
        }, 1000);
      }, false);
    }
  }
}





// Modifying text boxes
let textBoxes = document.getElementsByClassName("textbox");
for (let index = 0; index < textBoxes.length; index++) {
  let textBox = textBoxes[index];
  textBox.classList.add("acrylic");
}





// Password box part of the JS file
let passwordBoxes = document.getElementsByClassName("password-box");
for (let index = 0; index < passwordBoxes.length; index++) {
  let focusedElement = null;
  let passwordBox = passwordBoxes[index];
  passwordBox.id = passwordBox.id || `password-box-${index+1}`;

  let passwordBoxContainerDiv = document.createElement("div");
  passwordBoxContainerDiv.id = `password-box-container-div-${index+1}`;
  passwordBoxContainerDiv.className = "password-box-container-div acrylic";
  passwordBoxContainerDiv.setAttribute("tabindex", "-1");
  passwordBoxContainerDiv.style.cssText = passwordBox.getAttribute("data-style") || "";

  passwordBox.parentNode.replaceChild(passwordBoxContainerDiv, passwordBox);

  let passwordRevealButton = document.createElement("button");
  passwordRevealButton.id = `password-reveal-button-${index+1}`;
  passwordRevealButton.className = "password-reveal-button";
  passwordRevealButton.innerHTML = "\uE890"; // `View` in Segoe MDL2 Assets
  passwordRevealButton.setAttribute("tabindex", "1");

  passwordBoxContainerDiv.appendChild(passwordBox);
  passwordBoxContainerDiv.appendChild(passwordRevealButton);

  passwordBoxContainerDiv.addEventListener("click", () => {
    passwordBox.focus();
  }, false);
  passwordBoxContainerDiv.addEventListener("focus", () => {
    passwordBox.focus();
  }, false);

  passwordBoxContainerDiv.addEventListener("mouseover", () => {
    passwordBoxContainerDiv.style.borderColor = "rgba(255, 255, 255, 1)";
  }, false);
  passwordBoxContainerDiv.addEventListener("mouseleave", () => {
    focusedElement = document.querySelector(":focus");
    if ((focusedElement === passwordBox) || (focusedElement === passwordRevealButton)) {
      passwordBoxContainerDiv.style.borderColor = "rgba(150, 150, 160, 0.75)";
    } else {
      passwordBoxContainerDiv.style.borderColor = "rgba(200, 200, 200, 0.5)";
    }
  }, false);

  passwordBox.addEventListener("focus", () => {
    passwordBox.style.color = "rgba(0, 0, 0, 1)";
    passwordBoxContainerDiv.style.backgroundColor = "rgba(255, 255, 255, 1)";
    if (passwordBox.value.length > 0) {
      passwordRevealButton.style.visibility = "visible";
      passwordRevealButton.style.cursor = "default";
      passwordBox.style.width = "calc(100% - 40px)";
    } else {
      passwordRevealButton.style.visibility = "collapse";
      passwordRevealButton.style.cursor = "text";
      passwordBox.style.width = "100%";
    }
  }, false);
  passwordBox.addEventListener("blur", (e) => {
    focusedElement = e.relatedTarget;
    if ((focusedElement !== passwordRevealButton) && (focusedElement !== passwordBoxContainerDiv)) {
      passwordBoxContainerDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3921568627)";
      passwordBox.style.color = "rgba(255, 255, 255, 1)";
      passwordRevealButton.style.visibility = "collapse";
      passwordRevealButton.style.cursor = "text";
      passwordBox.style.width = "100%";
    }
  }, false);
  passwordBox.addEventListener("input", () => {
    if (passwordBox.value.length > 0) {
      passwordRevealButton.style.visibility = "visible";
      passwordRevealButton.style.cursor = "default";
      passwordBox.style.width = "calc(100% - 40px)";
    } else {
      passwordRevealButton.style.visibility = "collapse";
      passwordRevealButton.style.cursor = "text";
      passwordBox.style.width = "100%";
    }
  }, false);

  passwordRevealButton.addEventListener("mousedown", () => {
    passwordBox.type = "text";
  }, false);
  passwordRevealButton.addEventListener("mouseup", () => {
    passwordBox.type = "password";
    passwordBox.focus();
  }, false);
  passwordRevealButton.addEventListener("mouseleave", () => {
    passwordRevealButton.addEventListener("mouseup", () => {
      passwordBox.type = "password";
      passwordBox.focus();
    }, false);
    passwordBox.type = "password";
    passwordBox.focus();
  }, false);
  passwordRevealButton.addEventListener("blur", (e) => {
    focusedElement = e.relatedTarget;
    if ((focusedElement !== passwordBox) && (focusedElement !== passwordBoxContainerDiv)) {
      passwordBoxContainerDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3921568627)";
      passwordBox.style.color = "rgba(255, 255, 255, 1)";
      passwordRevealButton.style.visibility = "collapse";
      passwordRevealButton.style.cursor = "text";
      passwordBox.style.width = "100%";
    }
  }, false);
}





// Button click animation
let buttons = document.getElementsByClassName("button");
for (let index = 0; index < buttons.length; index++) {
  let button = buttons[index];
  button.addEventListener("transitionend", (e) => {
    button.blur();
  }, false);
}





// Checkbox creation and assignment
let checkBoxes = document.getElementsByClassName("check-box");
for (let index = 0; index < checkBoxes.length; index++) {
  checkBoxes[index].id = checkBoxes[index].id || `check-box-${index+1}`;

  let checkBox = document.createElement("span");

  checkBox.className = "checkbox-button";
  checkBoxes[index].appendChild(checkBox);
}





// Radiobutton creation and assignment
let radioButtons = document.getElementsByClassName("radio-button");
for (let index = 0; index < radioButtons.length; index++) {
  radioButtons[index].id = radioButtons[index].id || `radio-button-${index+1}`;

  let radioButton = document.createElement("span");
  radioButton.id = `radiobutton-${index+1}`;
  radioButton.className = "radiobutton"; // "\uECCA" for `RadioBtnOff`, "\uECCB" for `RadioBtnOn`
  // "\uECCC" for `RadioBullet2` in Segoe MDL2 Assets
  radioButtons[index].appendChild(radioButton);
}





// Toggleswitch creation and assignment
let toggleSwitches = document.getElementsByClassName("toggle-switch");
for (let index = 0; index < toggleSwitches.length; index++) {
  let toggleSwitch = document.createElement("span");
  toggleSwitch.id = `toggleswitch-${index+1}`;
  toggleSwitch.className = "toggleswitch";

  let toggleText = document.createElement("span");
  toggleText.id = `toggletext-${index+1}`;
  toggleText.style.marginLeft = "45px";
  toggleText.style.width = "max-content";

  let toggleSwitchCheckBox = toggleSwitches[index].querySelector(`input[type="checkbox"]`);

  if (toggleSwitchCheckBox.checked == true) {
    toggleText.innerHTML = toggleSwitches[index].getAttribute("data-checked-text") || "On";
  } else {
    toggleText.innerHTML = toggleSwitches[index].getAttribute("data-unchecked-text") || "Off";
  }

  toggleSwitchCheckBox.addEventListener("change", (e) => {
    if (toggleSwitchCheckBox.checked == true) {
      toggleText.innerHTML = toggleSwitches[index].getAttribute("data-checked-text") || "On";
    } else {
      toggleText.innerHTML = toggleSwitches[index].getAttribute("data-unchecked-text") || "Off";
    }
  }, false);

  let toggleObserver = new MutationObserver((mutations) => {
    if (toggleSwitchCheckBox.checked == true) {
      toggleText.innerHTML = toggleSwitches[index].getAttribute("data-checked-text") || "On";
    } else {
      toggleText.innerHTML = toggleSwitches[index].getAttribute("data-unchecked-text") || "Off";
    }
  });

  toggleObserver.observe(toggleSwitchCheckBox, {
    attributes: true,
    attributeFilter: ["checked"]
  });

  toggleSwitches[index].appendChild(toggleSwitch);
  toggleSwitches[index].appendChild(toggleText);
}





// Dropdowns and Comboboxes
let dropdowns = document.getElementsByClassName("drop-down");
for (let index = 0; index < dropdowns.length; index++) {
  let dropdown = dropdowns[index];
  dropdown.id = dropdown.id || `drop-down-${index+1}`;
  dropdown.setAttribute("tabindex", "100");

  let dropdownContainer = document.createElement("div");
  dropdownContainer.className = "drop-down__container";
  dropdownContainer.style.cssText = dropdown.style.cssText;

  dropdown.style.cssText = "";

  dropdown.parentNode.replaceChild(dropdownContainer, dropdown);

  let dropdownContent = document.createElement("div");
  dropdownContent.id = `drop-down__content-${index+1}`;
  dropdownContent.classList.add("drop-down__content");
  dropdownContent.classList.add("acrylic");
  dropdownContent.classList.add(preferredColorTheme);
  dropdownContent.classList.add("depth-8");
  dropdownContent.innerHTML = dropdown.innerHTML;
  dropdown.innerHTML = null;

  let dropdownContentDivs = dropdownContent.querySelectorAll("*");
  for (let j = 0; j < dropdownContentDivs.length; j++) {
    if (hasClass(dropdown, "reveal")) {
      dropdownContentDivs[j].classList.add("reveal");
      dropdownContentDivs[j].setAttribute("data-min-border", true);
    }
    dropdownContentDivs[j].addEventListener("click", (e) => {
      dropdownSpan.innerHTML = dropdownContentDivs[j].innerHTML;
      dropdown.setAttribute("data-value", dropdownContentDivs[j].getAttribute("data-value") || dropdownContentDivs[j].innerHTML);
      dropdownContent.style.top = "-20px";
      dropdownContent.style.opacity = "0";
      dropdownContent.style.visibility = "collapse";
    }, false);
  }

  let chevronDown = document.createElement("div");
  chevronDown.className = "chevron-down";
  chevronDown.innerHTML = "\uE70D"; // `ChevronDown` in Segoe MDL2 Assets

  let dropdownSpan = document.createElement("div");
  dropdownSpan.id = `drop-down-span-${index+1}`;
  dropdownSpan.className = "drop-down__span";
  dropdownSpan.innerHTML = dropdown.getAttribute("data-value") || "Select";

  dropdown.addEventListener("focus", (e) => {
    if (dropdownContent.style.opacity != "1") {
      dropdownContent.style.top = "32px";
      dropdownContent.style.opacity = "1";
      dropdownContent.style.visibility = "visible";
    } else {
      dropdownContent.style.top = "-20px";
      dropdownContent.style.opacity = "0";
      dropdownContent.style.visibility = "collapse";
    }
    dropdown.blur();
  }, false);

  let valueChangeObserver = new MutationObserver((mutations) => {
    dropdown.onchange();
  });

  valueChangeObserver.observe(dropdown, {
    attributes: true,
    attributeFilter: ["data-value", "onchange"]
  });

  dropdown.appendChild(dropdownSpan);
  dropdown.appendChild(chevronDown);

  dropdownContainer.appendChild(dropdown);
  dropdownContainer.appendChild(dropdownContent);
}





// Dynamic sliders `input[type="range"]`
let sliders = document.getElementsByClassName("slider");
for (let index = 0; index < sliders.length; index++) {
  let slider = sliders[index];
  slider.style.backgroundImage = "linear-gradient(to right, var(--theme-primary-color) 0%, var(--theme-primary-color) " + (+(slider.value) / (+(slider.max) - +(slider.min))) * 100 + "%, transparent " + (+(slider.value) / (+(slider.max) - +(slider.min))) * 100 + "%, transparent 100%)";
  slider.addEventListener("input", (e) => {
    slider.style.backgroundImage = "linear-gradient(to right, var(--theme-primary-color) 0%, var(--theme-primary-color) " + (+(slider.value) / (+(slider.max) - +(slider.min))) * 100 + "%, transparent " + (+(slider.value) / (+(slider.max) - +(slider.min))) * 100 + "%, transparent 100%)";
  }, false);
}





// Parallax animation
let parallaxWrappers = document.getElementsByClassName("parallax-wrapper");
for (let index = 0; index < parallaxWrappers.length; index++) {
  let parallaxWrapper = parallaxWrappers[index];
  parallaxWrapper.id = parallaxWrapper.id || `parallax-wrapper-${index+1}`;

  let backgroundImage = "url(" + parallaxWrapper.getAttribute("data-background-image") + ")";

  if ((backgroundImage != "url(null)") || (backgroundImage != "url()")) {
    addStyle(parallaxWrapper.id, "::before", "background-image", backgroundImage);
  }
}





// Creating and positioning children elements to determinate progress bars
let progressBarsDeterminate = document.getElementsByClassName("progress-bar-determinate");
for (let index = 0; index < progressBarsDeterminate.length; index++) {
  let progressBarDeterminate = progressBarsDeterminate[index];
  progressBarDeterminate.id = progressBarDeterminate.id || `progress-bar-determinate-${index+1}`;

  let min = +(progressBarDeterminate.getAttribute("data-min")) || 0;
  let value = +(progressBarDeterminate.getAttribute("data-value")) || 0;
  let max = +(progressBarDeterminate.getAttribute("data-max")) || 100;

  if (value > max) {
    value = max;
  }

  if (value < min) {
    value = min;
  }

  let progressBarValue = document.createElement("div");
  progressBarValue.id = `progress-bar-determinate-${index+1}-bar-value`;
  progressBarValue.className = "progress-bar-value";
  progressBarValue.style.width = (((value - min) / (max - min)) * 100) + "%";

  let valueChangeObserver = new MutationObserver((mutations) => {
    min = +(progressBarDeterminate.getAttribute("data-min")) || 0;
    value = +(progressBarDeterminate.getAttribute("data-value")) || 0;
    max = +(progressBarDeterminate.getAttribute("data-max")) || 100;
    if (value > max) {
      value = max;
    }
    if (value < min) {
      value = min;
    }
    progressBarValue.style.width = (((value - min) / (max - min)) * 100) + "%";
  });

  valueChangeObserver.observe(progressBarDeterminate, {
    attributes: true,
    attributeFilter: ["data-min", "data-value", "data-max"]
  });

  progressBarDeterminate.appendChild(progressBarValue);
}


// Creating and positioning children elements to indeterminate progress bars
let progressBarsIndeterminate = document.getElementsByClassName("progress-bar-indeterminate");
for (let index = 0; index < progressBarsIndeterminate.length; index++) {
  let progressBarIndeterminate = progressBarsIndeterminate[index];
  progressBarIndeterminate.id = progressBarIndeterminate.id || `progress-bar-indeterminate-${index+1}`;
  let shortBar = document.createElement("div");
  shortBar.id = `progress-bar-indeterminate-${index+1}-short-bar`;
  shortBar.className = "short-bar";
  let longBar = document.createElement("div");
  longBar.id = `progress-bar-indeterminate-${index+1}-long-bar`;
  longBar.className = "long-bar";
  progressBarIndeterminate.appendChild(shortBar);
  progressBarIndeterminate.appendChild(longBar);
}


// Creating and positioning children elements to dotted pre-loaders
let progressBarsDotted = document.getElementsByClassName("progress-bar-dotted");
for (let index = 0; index < progressBarsDotted.length; index++) {
  let progressBarDotted = progressBarsDotted[index];
  progressBarDotted.id = progressBarDotted.id || `progress-bar-dotted-${index+1}`;
  let progressBarDottedWrapper = document.createElement("div");
  progressBarDottedWrapper.className = "progress-bar-dotted-wrapper";
  progressBarDottedWrapper.id = `progress-bar-dotted-wrapper-${index+1}`;
  progressBarDotted.appendChild(progressBarDottedWrapper);
  for (let divCount = 1; divCount <= 5; divCount++) {
    let progressBarDottedWrapperDiv = document.createElement("div");
    progressBarDottedWrapperDiv.id = `progress-bar-dotted-wrapper-${index+1}-div-${divCount}`;
    progressBarDottedWrapper.appendChild(progressBarDottedWrapperDiv);
  }
}


// Creating and positioning childern elements to pre-loader rings
let progressRings = document.getElementsByClassName("progress-ring");
for (let index = 0; index < progressRings.length; index++) {
  let progressRing = progressRings[index];
  progressRing.id = progressRing.id || `progress-ring-${index+1}`;
  for (let divCount = 1; divCount <= 6; divCount++) {
    let progressRingDiv = document.createElement("div");
    progressRingDiv.id = `progress-ring-${index+1}-div-${divCount}`;
    progressRing.appendChild(progressRingDiv);
  }
}





// Managing `NavigationView` dynamically
let navigationView = document.querySelector(".navigation-view");

// `navigationView` exists and further processes can be started without errors
if (navigationView) {
  navigationView.id = navigationView.id || "navigation-view";
  navigationView.classList.add("acrylic");
  navigationView.classList.add(preferredColorTheme);

  let navigationViewLinks = navigationView.children;

  for (let index = 0; index < navigationViewLinks.length; index++) {
    let navigationViewLink = navigationViewLinks[index]; // div.link-container.reveal > a.link
    navigationViewLink.id = navigationViewLink.id || `navigation-view-link-${index+1}`;
    navigationViewLink.className = "link";

    let navigationViewLinkContainer = document.createElement("div"); // div.link-container.reveal
    navigationViewLinkContainer.className = "link-container";
    navigationViewLinkContainer.classList.add("reveal");
    navigationViewLinkContainer.setAttribute("data-min-border", true);

    let navigationViewLinkIcon = document.createElement("div"); // div.link-container.reveal > a.link > div.link-icon
    navigationViewLinkIcon.className = "link-icon";
    navigationViewLinkIcon.innerHTML = navigationViewLink.getAttribute("data-icon") || "\uE76C";

    let navigationViewLinkContent = document.createElement("div"); // div.link-container.reveal > a.link > div.link-content
    navigationViewLinkContent.className = "link-content";
    navigationViewLinkContent.innerHTML = navigationViewLink.innerHTML;

    navigationViewLink.innerHTML = "";

    navigationViewLink.appendChild(navigationViewLinkIcon);
    navigationViewLink.appendChild(navigationViewLinkContent);
    navigationViewLink.parentNode.replaceChild(navigationViewLinkContainer, navigationViewLink);
    navigationViewLinkContainer.appendChild(navigationViewLink);
  }

  let navigationViewToggle = document.createElement("button"); // button.toggle-view
  navigationViewToggle.id = navigationViewToggle.id || "navigation-view-toggle";
  navigationViewToggle.className = "toggle-view";
  navigationViewToggle.innerHTML = "\uE700"; // `GlobalNavigationIcon` in Segoe MDL2 Assets
  navigationViewToggle.setAttribute("data-full-reveal", true);
  navigationViewToggle.setAttribute("data-quick-ripple", true);

  let navigationViewSettingsContainer = document.createElement("div"); // div.settings-container.reveal
  navigationViewSettingsContainer.className = "settings-container";
  navigationViewSettingsContainer.classList.add("reveal");
  navigationViewSettingsContainer.setAttribute("data-min-border", true);

  let navigationViewSettings = document.createElement("a"); // div.settings-container.reveal > a.settings
  navigationViewSettings.id = "navigation-view-settings";
  navigationViewSettings.className = "settings";
  navigationViewSettings.href = navigationView.getAttribute("data-settings") || "#";

  let navigationViewSettingsIcon = document.createElement("div"); // div.settings-container.reveal > a.settings > div.settings-icon
  navigationViewSettingsIcon.className = "settings-icon";
  navigationViewSettingsIcon.innerHTML = "\uE713"; // `Setting` in Segoe MDL2 Assets

  let navigationViewSettingsContent = document.createElement("div"); // div.settings-container.reveal > a.settings > div.settings-content
  navigationViewSettingsContent.className = "settings-content";
  navigationViewSettingsContent.innerHTML = "Settings";

  navigationViewToggle.onclick = (e) => {
    navigationViewLinks = document.getElementsByClassName("link-content");
    if (navigationView.style.width != "300px") {
      navigationView.style.width = "300px";
      document.querySelector("div.settings-content").style.opacity = "1";
      for (let index = 0; index < navigationViewLinks.length; index++) {
        let navigationViewLinkContent = navigationViewLinks[index];
        navigationViewLinkContent.style.opacity = "1";
      }
    } else {
      navigationView.style.width = "40px";
      document.querySelector("div.settings-content").style.opacity = "0";
      for (let index = 0; index < navigationViewLinks.length; index++) {
        let navigationViewLinkContent = navigationViewLinks[index];
        navigationViewLinkContent.style.opacity = "0";
      }
    }
  }

  navigationView.appendChild(navigationViewToggle);

  navigationView.appendChild(navigationViewSettingsContainer);
  navigationViewSettingsContainer.appendChild(navigationViewSettings);
  navigationViewSettings.appendChild(navigationViewSettingsIcon);
  navigationViewSettings.appendChild(navigationViewSettingsContent);
}





let pivotView = document.querySelector(".pivot");

if (pivotView) {
  let tabs = pivotView.children;

  let highlighter = document.createElement("div");
  highlighter.id = "highlighter";

  highlighter.style.left = getComputedStyle(tabs[0]).left;
  highlighter.style.right = getComputedStyle(tabs[0]).right;
  highlighter.style.width = getComputedStyle(tabs[0]).width;
  highlighter.style.paddingLeft = getComputedStyle(tabs[0]).paddingLeft;
  highlighter.style.paddingRight = getComputedStyle(tabs[0]).paddingRight;
  highlighter.style.borderLeft = getComputedStyle(tabs[0]).borderLeft;
  highlighter.style.borderRight = getComputedStyle(tabs[0]).borderRight;

  pivotView.appendChild(highlighter);

  for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    tab.id = tab.id || `pivot-tab-${index+1}`;

    tab.addEventListener("click", (e) => {
      highlighter.style.left = getComputedStyle(tab).left;
      highlighter.style.right = getComputedStyle(tab).right;
      highlighter.style.width = getComputedStyle(tab).width;
      highlighter.style.paddingLeft = getComputedStyle(tab).paddingLeft;
      highlighter.style.paddingRight = getComputedStyle(tab).paddingRight;
      highlighter.style.borderLeft = getComputedStyle(tab).borderLeft;
      highlighter.style.borderRight = getComputedStyle(tab).borderRight;
    }, false);
  }
}





/*
 * Notifications or messages in the form of toasts that appear
 * on the bottom right corner of the screen like Windows 10
 */
const showToastStyle = `
visibility: visible;
right: 5px;`;
let toasts = document.getElementsByClassName("notification");
for (let index = 0; index < toasts.length; index++) {
  let toast = toasts[index];
  toast.classList.add("acrylic");
  toast.classList.add(preferredColorTheme);
  toast.classList.add("depth-16");
  toast.classList.add("reveal");
  toast.setAttribute("data-border-only", true);
  toast.setAttribute("data-no-ripple", true);

  const initialToastStyle = toast.style.cssText;
  let onClick = toast.onclick;
  toast.id = toast.id || `notification-${index+1}`;
  toast.addEventListener("click", (e) => {
    let x = e.clientX - toast.offsetLeft - Math.floor(toast.offsetWidth / 2);
    let y = (toast.offsetTop + Math.floor(toast.offsetHeight / 2) - e.clientY) * 0.5;
    let degreeX = y / toast.offsetHeight * 25;
    let degreeY = x / toast.offsetWidth * 25;
    toast.style.transform = `rotateX(${degreeX}deg) rotateY(${degreeY}deg) scale(0.975)`;
    setTimeout(() => {
      toast.style.transform = "translateY(-30px) translateZ(-30px)";
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.style.visibility = "hidden";
        toast.style.cssText = initialToastStyle;
      }, 600);
    }, 600);
    toast.onclick = onClick;
  }, false);

  let toastHideButton = document.createElement("button");
  toastHideButton.className = "hide-notification";
  toastHideButton.innerHTML = "\uEBE7"; // `RightArrowKeyTime0` in Segoe MDL2 Assets
  toastHideButton.id = `notification-hide-button-${index+1}`;
  toastHideButton.addEventListener("click", (e) => {
    toast.onclick = null;
    toast.style.right = "-100%";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 600);
  }, false);

  let toastCloseButton = document.createElement("button");
  toastCloseButton.className = "dismiss-notification reveal";
  toastCloseButton.innerHTML = "\uE711" + "<br />Dismiss";
  toastCloseButton.id = `notification-dismiss-button-${index+1}`;
  toastCloseButton.addEventListener("click", (e) => {
    toast.onclick = null;
    toast.style.transition = "all 0.4s var(--decelerate)";
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.style.visibility = "hidden";
      toast.style.display = "none";
    }, 600);
  }, false);

  toast.appendChild(toastHideButton);
  toast.appendChild(toastCloseButton);
}





// Fluent context menu
var contextMenu = document.createElement("div");
contextMenu.className = "context-menu acrylic " + preferredColorTheme + " depth-8";
contextMenu.id = "context-menu";

let contextItemsCount = 0;

function addContextMenuItem(content = "Context menu item", function_ = "console.log(true)", keys = null) {
  contextItemsCount++;
  let contextMenuItem = document.createElement("button");
  contextMenuItem.id = `context-menu-item-${contextItemsCount}`;
  contextMenuItem.className = "context-menu__item reveal";
  contextMenuItem.innerHTML = `${content}`;
  contextMenuItem.setAttribute("onclick", `${function_}`);
  contextMenuItem.setAttribute("data-min-border", true);
  contextMenuItem.setAttribute("tabindex", `10${contextItemsCount+1}`);
  contextMenu.appendChild(contextMenuItem);
}

function addContextMenuDivider() {
  let contextMenuDivider = document.createElement("div");
  contextMenuDivider.className = "context-menu__divider";
  contextMenu.appendChild(contextMenuDivider);
}

function showContextMenu(show = true, x, y) {
  if (contextMenu.style.opacity == "1") {
    contextMenu.style.opacity = "0";
    contextMenu.style.visibility = "collapse";
  }
  contextMenu.style.top = `${y-250}px`;
  contextMenu.style.left = `${x}px`;

  setTimeout(() => {
    contextMenu.style.top = `${y}px`;
    contextMenu.style.opacity = show ? "1" : "0";
    contextMenu.style.visibility = show ? "visible" : "collapse";
  }, 300);
}

window.addEventListener("contextmenu", (e) => {
  if (contextMenu.innerHTML !== "") {
    reveal();
    e.preventDefault();
    showContextMenu(true, `${e.x+contextMenu.offsetWidth>window.innerWidth?window.innerWidth-contextMenu.offsetWidth:e.x}`, `${e.y+contextMenu.offsetHeight>window.innerHeight?window.innerHeight-contextMenu.offsetHeight:e.y}`);
  }
}, false);

document.body.appendChild(contextMenu);





window.addEventListener("click", (e) => {
  showContextMenu(false);
}, false);



/*window.onblur = (e) => {          /// UNDER DEVELOPMENT ///
  let acrylicElements = document.getElementsByClassName("acrylic");
  for (let index=0; index < acrylicElements.length; index++) {
    let acrylicElement = acrylicElements[index];
    let backgroundColor = getComputedStyle(acrylicElement).backgroundColor.replace(/\s/g, "");
    let RGBA = backgroundColor.replace("rgba(", "").replace("rgb(", "").replace(")", "").split(",");
    let backgroundColor_R = RGBA[0];
    let backgroundColor_G = RGBA[1];
    let backgroundColor_B = RGBA[2];
    let backgroundColor_A = RGBA[3];
    if (backgroundColor_A === null) {
      backgroundColor_A = 1;
    }
    acrylicElement.style.backgroundColor = "rgba(" + backgroundColor_R + ", " + backgroundColor_G + ", " + backgroundColor_B + ", " + backgroundColor_A + ")";
  }
}*/





/* Give the Windows 10"s end of page effect *         /// UNDER CONSTRUCTION ///
var endOfPage = document.createElement("div");
endOfPage.id = "endofpage";
endOfPage.style.cssText = `
color: transparent;
background: transparent;
height: 0vh;
min-height: 0vh;
max-height: 25vh;
transition: 0.25s;
transition-timing-function: var(--decelerate);`;
document.body.appendChild(endOfPage);
window.onscroll = (e) => {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    // Code here
  }
}
*/





var colorScheme = makeColorScheme();
reveal();
