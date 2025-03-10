/**
 * Pressure Advance Calibration Pattern
 * Copyright (C) 2019 Sineos [https://github.com/Sineos]
 * Copyright (C) 2022 RealDeuce [https://github.com/RealDeuce]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
'use strict';

// Settings version of localStorage
// Increase if default settings are changed / amended

const SETTINGS_VERSION = '1.1';
const PA_round = -4; // Was previously -3
const Z_round = -3;
const XY_round = -4;
const EXT_round = -5; // Was previously -4

function genGcode() {

  // get the values from the HTML elements
  var PRINTER = $('#PRINTER').val(),
      FILAMENT = $('#FILAMENT').val(),
      FILENAME = $('#FILENAME').val(),
      FILAMENT_DIAMETER = parseFloat($('#FIL_DIA').val()),
      NOZZLE_DIAMETER = parseFloat($('#NOZ_DIA').val()),
      NOZZLE_LINE_RATIO = parseFloat($('#NOZ_LIN_R').val()),
      START_GCODE = $('#START_GCODE').val(),
      END_GCODE = $('#END_GCODE').val(),
      SPEED_SLOW = parseInt($('#SLOW_SPEED').val()),
      SPEED_FAST = parseInt($('#FAST_SPEED').val()),
      SPEED_MOVE = parseInt($('#MOVE_SPEED').val()),
      SPEED_RETRACT = parseInt($('#RETRACT_SPEED').val()),
      SPEED_UNRETRACT = parseInt($('#UNRETRACT_SPEED').val()),
      ACCELERATION = parseInt($('#PRINT_ACCL').val()),
      A2D = ACCELERATION / 2,
      RETRACT_DIST = parseFloat($('#RETRACTION').val()),
      BED_X = parseInt($('#BEDSIZE_X').val()),
      BED_Y = parseInt($('#BEDSIZE_Y').val()),
      NULL_CENTER = $('#CENTER_NULL').prop('checked'),
      HEIGHT_LAYER = parseFloat($('#LAYER_HEIGHT').val()),
      FAN_SPEED = parseFloat($('#FAN_SPEED').val()),
      EXT_MULT = parseFloat($('#EXTRUSION_MULT').val()),
      PATTERN_TYPE = $('#TYPE_PATTERN').val(),
      K_START = parseFloat($('#K_START').val()),
      K_END = parseFloat($('#K_END').val()),
      K_STEP = parseFloat($('#K_STEP').val()),
      PRINT_DIR = $('#DIR_PRINT').val(),
      LINE_SPACING = parseFloat($('#SPACE_LINE').val()),
      USE_FRAME = $('#FRAME').prop('checked'),
      USE_PRIME = $('#PRIME').prop('checked'),
      USE_MMS = $('#MM_S').prop('checked'),
      USE_FWR = $('#USE_FWR').prop('checked'),
      EXT_MULT_PRIME = parseFloat($('#PRIME_EXT').val()),
      SPEED_PRIME = parseFloat($('#PRIME_SPEED').val()),
      PRIME_DWELL = parseFloat($('#DWELL_PRIME').val()),
      LENGTH_SLOW = parseFloat($('#SLOW_LENGTH').val()),
      LENGTH_FAST = parseFloat($('#FAST_LENGTH').val()),
      Z_OFFSET = parseFloat($('#OFFSET_Z').val()),
      USE_LINENO = $('#LINE_NO').prop('checked');

  if (USE_MMS) {
    SPEED_SLOW *= 60;
    SPEED_FAST *= 60;
    SPEED_MOVE *= 60;
    SPEED_PRIME *= 60;
    SPEED_RETRACT *= 60;
    SPEED_UNRETRACT *= 60;
  }

  var RANGE_K = K_END - K_START,
      PRINT_SIZE_Y = (RANGE_K / K_STEP * LINE_SPACING) + 25, // +25 with ref marking
      PRINT_SIZE_X = (2 * LENGTH_SLOW) + LENGTH_FAST + (USE_PRIME ? 10 : 0) + (USE_LINENO ? 8 : 0),
      CENTER_X = (NULL_CENTER ? 0 : BED_X / 2),
      CENTER_Y = (NULL_CENTER ? 0 : BED_Y / 2),
      PAT_START_X = CENTER_X - (0.5 * LENGTH_FAST) - LENGTH_SLOW + (USE_PRIME ? 5 : 0) - (USE_LINENO ? 4 : 0),
      PAT_START_Y = CENTER_Y - (PRINT_SIZE_Y / 2),
      LINE_WIDTH = NOZZLE_DIAMETER * NOZZLE_LINE_RATIO,
      EXTRUSION_RATIO = LINE_WIDTH * HEIGHT_LAYER / (Math.pow(FILAMENT_DIAMETER / 2, 2) * Math.PI),
      printDirRad = PRINT_DIR * Math.PI / 180,
      FIT_WIDTH = Math.abs(PRINT_SIZE_X * Math.cos(printDirRad)) + Math.abs(PRINT_SIZE_Y * Math.sin(printDirRad)),
      FIT_HEIGHT = Math.abs(PRINT_SIZE_X * Math.sin(printDirRad)) + Math.abs(PRINT_SIZE_Y * Math.cos(printDirRad)),
      txtArea = document.getElementById('gcodetextarea');

  var basicSettings = {
    'slow': SPEED_SLOW,
    'fast': SPEED_FAST,
    'move': SPEED_MOVE,
    'centerX': CENTER_X,
    'centerY': CENTER_Y,
    'printDir': PRINT_DIR,
    'lineWidth': LINE_WIDTH,
    'extRatio': EXTRUSION_RATIO,
    'extMult': EXT_MULT,
    'extMultPrime': EXT_MULT_PRIME,
    'retractDist': RETRACT_DIST,
    'retractSpeed' : SPEED_RETRACT,
    'unretractSpeed' : SPEED_UNRETRACT,
    'fwRetract' : USE_FWR
  };

  var patSettings = {
    'lengthSlow' : LENGTH_SLOW,
    'lengthFast': LENGTH_FAST,
    'kStart' : K_START,
    'kEnd' : K_END,
    'kStep' : K_STEP,
    'lineSpacing' : LINE_SPACING
  };

  // Start G-code for pattern
  var k_script =  '; ### RRF Pressure Advance Calibration Pattern ###\n' +
                  '; -------------------------------------------\n' +
                  ';\n' +
                  '; Printer: ' + PRINTER + '\n' +
                  '; Filament: ' + FILAMENT + '\n' +
                  '; Created: ' + new Date() + '\n' +
                  ';\n' +
                  '; Settings Printer:\n' +
                  '; Filament Diameter = ' + FILAMENT_DIAMETER + ' mm\n' +
                  '; Nozzle Diameter = ' + NOZZLE_DIAMETER + ' mm\n' +
                  '; Start G-code = ' + START_GCODE.replace(/^/gm, '; ')+ '\n' +
                  '; End G-code = ' + END_GCODE.replace(/^/gm, '; ')+ '\n' +
                  '; Retraction Distance = ' + RETRACT_DIST + ' mm\n' +
                  '; Layer Height = ' + HEIGHT_LAYER + ' mm\n' +
                  '; Fan Speed = ' + FAN_SPEED + ' %\n' +
                  '; Z-axis Offset = ' + Z_OFFSET + ' mm\n' +
                  ';\n' +
                  '; Settings Print Bed:\n' +
                  '; Bed Size X = ' + BED_X + ' mm\n' +
                  '; Bed Size Y = ' + BED_Y + ' mm\n' +
                  ';\n' +
                  '; Settings Speed:\n' +
                  '; Slow Printing Speed = ' + SPEED_SLOW + ' mm/min\n' +
                  '; Fast Printing Speed = ' + SPEED_FAST + ' mm/min\n' +
                  '; Movement Speed = ' + SPEED_MOVE + ' mm/min\n' +
                  '; Retract Speed = ' + SPEED_RETRACT + ' mm/min\n' +
                  '; Unretract Speed = ' + SPEED_UNRETRACT + ' mm/min\n' +
                  '; Printing Acceleration = ' + ACCELERATION + ' mm/s^2\n' +
                  ';\n' +
                  '; Settings Pattern:\n' +
                  '; Starting Value Factor = ' + K_START + '\n' +
                  '; Ending Value Factor = ' + K_END + '\n' +
                  '; Factor Stepping = ' + K_STEP + '\n' +
                  '; Test Line Spacing = ' + LINE_SPACING + ' mm\n' +
                  '; Test Line Length Slow = ' + LENGTH_SLOW + ' mm\n' +
                  '; Test Line Length Fast = ' + LENGTH_FAST + ' mm\n' +
                  '; Print Pattern = ' + (PATTERN_TYPE === 'alt' ? 'Alternate' : 'Standard') + '\n' +
                  '; Print Frame = ' + (USE_FRAME ? 'true' : 'false') + '\n' +
                  '; Number Lines = ' + (USE_LINENO ? 'true' : 'false') + '\n' +
                  '; Print Size X = ' + FIT_WIDTH + ' mm\n' +
                  '; Print Size Y = ' + FIT_HEIGHT + ' mm\n' +
                  '; Print Rotation = ' + PRINT_DIR + ' degree\n' +
                  ';\n' +
                  '; Settings Advance:\n' +
                  '; Nozzle / Line Ratio = ' + NOZZLE_LINE_RATIO + '\n' +
                  '; Use FWRETRACT = ' + (USE_FWR ? 'true' : 'false') + '\n' +
                  '; Extrusion Multiplier = ' + EXT_MULT + '\n' +
                  '; Prime Nozzle = ' + (USE_PRIME ? 'true' : 'false') + '\n' +
                  '; Prime Extrusion Multiplier = ' + EXT_MULT_PRIME + '\n' +
                  '; Prime Speed = ' + SPEED_PRIME + '\n' +
                  '; Dwell Time = ' + PRIME_DWELL + ' s\n' +
                  ';\n' +
                  '; prepare printing\n' +
                  ';\n' +
                  START_GCODE + '\n' +
                  'G21 ; Millimeter units\n' +
                  'G90 ; Absolute XYZ\n' +
                  'M83 ; Relative E\n' +
                  'SET_VELOCITY_LIMIT ACCEL=' + ACCELERATION + ' ACCEL_TO_DECEL=' + A2D + ' ; Acceleration\n' +
                  'G92 E0 ; Reset extruder distance\n' +
                  'M106 S' + Math.round(FAN_SPEED * 2.55) + '\n';

  //move to center and layer Height
  k_script += moveTo(CENTER_X, CENTER_Y, basicSettings) +
              'G1 Z' + (HEIGHT_LAYER + Z_OFFSET) + ' F' + SPEED_SLOW + ' ; Move to layer height\n';

  // Prime nozzle if activated
  if (USE_PRIME) {
    var primeStartX = CENTER_X - LENGTH_SLOW - (0.5 * LENGTH_FAST) - (USE_LINENO ? 4 : 0) - 5,
        primeStartY = CENTER_Y - (PRINT_SIZE_Y / 2);

    k_script += ';\n' +
                '; prime nozzle\n' +
                ';\n' +
                moveTo(primeStartX, primeStartY, basicSettings) +
                createLine(primeStartX, primeStartY + PRINT_SIZE_Y, PRINT_SIZE_Y, basicSettings, {'extMult': EXT_MULT_PRIME, 'speed': SPEED_PRIME}) +
                moveTo(primeStartX + (LINE_WIDTH * 1.5), primeStartY + PRINT_SIZE_Y, basicSettings) +
                createLine(primeStartX + (LINE_WIDTH * 1.5), primeStartY, -PRINT_SIZE_Y, basicSettings, {'extMult': EXT_MULT_PRIME, 'speed': SPEED_PRIME}) +
                doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD'));
  }

  // if selected, print an anchor frame around test line start and end points
  if (USE_FRAME) {
    var frameStartX1 = PAT_START_X,
        frameStartX2 = PAT_START_X + (2 * LENGTH_SLOW) + LENGTH_FAST,
        frameStartY = PAT_START_Y - 3,
        frameLength = PRINT_SIZE_Y - 19;

    k_script += ';\n' +
                '; print anchor frame\n' +
                (USE_PRIME ? doEfeed('+', basicSettings, (USE_FWR ? 'FWR' : 'STD')) : '') +
                moveTo(frameStartX1, frameStartY, basicSettings) +
                createLine(frameStartX1, frameStartY + frameLength, frameLength, basicSettings, {'extMult': EXT_MULT * 1.1}) +
                moveTo(frameStartX1 + LINE_WIDTH, frameStartY + frameLength, basicSettings) +
                createLine(frameStartX1 + LINE_WIDTH, frameStartY, -frameLength, basicSettings, {'extMult': EXT_MULT * 1.1}) +
                doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
                moveTo(frameStartX2, frameStartY, basicSettings) +
                doEfeed('+', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
                createLine(frameStartX2, frameStartY + frameLength, frameLength, basicSettings, {'extMult': EXT_MULT * 1.1}) +
                moveTo(frameStartX2 - LINE_WIDTH, frameStartY + frameLength, basicSettings) +
                createLine(frameStartX2 - LINE_WIDTH, frameStartY, -frameLength, basicSettings, {'extMult': EXT_MULT * 1.1}) +
                doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD'));
  }

  // insert a retract if no prime and no frame
  if (!USE_PRIME && !USE_FRAME)
    k_script += doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD'));

  // generate the pressure advance Test pattern
  k_script += ';\n' +
              '; start the Test pattern\n' +
              ';\n' +
              (PRIME_DWELL ? 'G4 P' + (PRIME_DWELL * 1000) + ' ; Pause (dwell) for 2 seconds\n' : '') +
              moveTo(PAT_START_X, PAT_START_Y, basicSettings);

  if (PATTERN_TYPE === 'std')
    k_script += createStdPattern(PAT_START_X, PAT_START_Y, basicSettings, patSettings);
  else if (PATTERN_TYPE === 'alt')
    k_script += createAltPattern(PAT_START_X, PAT_START_Y, basicSettings, patSettings);

  // mark area of speed changes
  var refStartX1 = CENTER_X - (0.5 * LENGTH_FAST) + (USE_PRIME ? 5 : 0) - (USE_LINENO ? 4 : 0),
      refStartX2 = CENTER_X + (0.5 * LENGTH_FAST) + (USE_PRIME ? 5 : 0) - (USE_LINENO ? 4 : 0),
      refStartY = CENTER_Y + (PRINT_SIZE_Y / 2) - 20;

  k_script += ';\n' +
              '; Mark the test area for reference\n' +
              'M572 D0 S0\n' +
              '; Pressure Advance = 0\n' +
              moveTo(refStartX1, refStartY, basicSettings) +
              doEfeed('+', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
              createLine(refStartX1, refStartY + 20, 20, basicSettings) +
              doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
              moveTo(refStartX2, refStartY, basicSettings) +
              doEfeed('+', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
              createLine(refStartX2, refStartY + 20, 20, basicSettings) +
              doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
              zHop((HEIGHT_LAYER + Z_OFFSET) + 0.1, basicSettings);

  // print K values beside the test lines
  if (USE_LINENO) {
    var numStartX = CENTER_X + (0.5 * LENGTH_FAST) + LENGTH_SLOW + (USE_PRIME ? 5 : 0) - 2,
        numStartY = PAT_START_Y - 2,
        stepping = 0;

    k_script += ';\n' +
                '; print M572 Values\n' +
                ';\n';

    for (var i = K_START; i <= K_END; i += K_STEP) {
      if (stepping % 2 === 0) {
        k_script += moveTo(numStartX, numStartY + (stepping * LINE_SPACING), basicSettings) +
                    zHop((HEIGHT_LAYER + Z_OFFSET), basicSettings) +
                    doEfeed('+', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
                    createGlyphs(numStartX, numStartY + (stepping * LINE_SPACING), basicSettings, Math.round10(i, PA_round)) +
                    doEfeed('-', basicSettings, (USE_FWR ? 'FWR' : 'STD')) +
                    zHop((HEIGHT_LAYER + Z_OFFSET) + 0.1, basicSettings);
      }
      stepping += 1;
    }
  }

  k_script += ';\n' +
              '; FINISH\n' +
              ';\n' +
              END_GCODE + '\n' +
              ';';

  txtArea.value = k_script;
}

// Save content of textarea to file using
// https://github.com/eligrey/FileSaver.js
function saveTextAsFile() {
  var textToWrite = document.getElementById('gcodetextarea').value,
      textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'}),
      usersFilename = document.getElementById('FILENAME').value,
      filename = usersFilename || '',
      fileNameToSaveAs = filename + 'padvance.gcode';
  if (textToWrite) {
    saveAs(textFileAsBlob, fileNameToSaveAs);
  } else {
    alert('Generate G-code first');
    return;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
(function() {

  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */

  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || Number(exp) === 0) {
      return Math[type](value);
    }
    value = Number(value);
    exp = Number(exp);
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](Number(value[0] + 'e' + (value[1] ? (Number(value[1]) - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return Number(value[0] + 'e' + (value[1] ? (Number(value[1]) + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
}());

// get the number of decimal places of a float
function getDecimals(num) {
  var match = (String(num)).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return num;
  }
  var decimalPlaces = Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? Number(match[2]) : 0));
  return decimalPlaces;
}

// print a line between current position and target
function createLine(coordX, coordY, length, basicSettings, optional) {
  var ext = 0,
      gcode = '';

  //handle optional function arguements passed as object
  var defaults = {
    speed: basicSettings['slow'],
    extMult: basicSettings['extMult'],
    comment: ' ; print line\n'
  };
  var optArgs = $.extend({}, defaults, optional);

  ext = Math.round10(basicSettings['extRatio'] * optArgs['extMult'] * Math.abs(length), EXT_round);

  gcode += 'G1 X' + Math.round10(rotateX(coordX, basicSettings['centerX'], coordY, basicSettings['centerY'], basicSettings['printDir']), XY_round) +
             ' Y' + Math.round10(rotateY(coordX, basicSettings['centerX'], coordY, basicSettings['centerY'], basicSettings['printDir']), XY_round) +
             ' E' + ext + ' F' + optArgs['speed'] + optArgs['comment'];

  return gcode;
}

// move print head to coordinates
function moveTo(coordX, coordY, basicSettings) {
  var gcode = '';

  gcode += 'G1 X' + Math.round10(rotateX(coordX, basicSettings['centerX'], coordY, basicSettings['centerY'], basicSettings['printDir']), XY_round) +
             ' Y' + Math.round10(rotateY(coordX, basicSettings['centerX'], coordY, basicSettings['centerY'], basicSettings['printDir']), XY_round) +
             ' F' + basicSettings['move'] + ' ; move to start\n';
  return gcode;
}

// create retract / un-retract gcode
function doEfeed(dir, basicSettings, type) {
  var gcode = '';

  switch (true) {
  case (type === 'STD' && dir === '+'):
    gcode += 'G1 E' + basicSettings['retractDist'] + ' F' + basicSettings['unretractSpeed'] + ' ; un-retract\n';
    break;
  case (type === 'STD' && dir === '-'):
    gcode += 'G1 E-' + basicSettings['retractDist'] + ' F' + basicSettings['retractSpeed'] + ' ; retract\n';
    break;
  case (type === 'FWR' && dir === '+'):
    gcode += 'G11 ; un-retract\n';
    break;
  case (type === 'FWR' && dir === '-'):
    gcode += 'G10 ; retract\n';
    break;
  }

  return gcode;
}

// create alternat test pattern
function createAltPattern(startX, startY, basicSettings, patSettings) {
  var j = 0,
      k = 0,
      gcode = '';

  gcode += doEfeed('+', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD'));

  for (var i = patSettings['kStart']; i <= patSettings['kEnd']; i += patSettings['kStep']) {
    if (k % 2 === 0) {
      gcode += '; Pressure Advance =' + Math.round10(i, PA_round) + ' ; \n' +
               'M572 D0 S' + Math.round10(i, PA_round) + ' ; \n' +
               createLine(startX + patSettings['lengthSlow'], startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
               createLine(startX + patSettings['lengthSlow'] + patSettings['lengthFast'], startY + j, patSettings['lengthFast'], basicSettings, {'speed': basicSettings['fast']}) +
               createLine(startX + (2 * patSettings['lengthSlow']) + patSettings['lengthFast'], startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
               createLine(startX + (2 * patSettings['lengthSlow']) + patSettings['lengthFast'], startY + j + patSettings['lineSpacing'], patSettings['lineSpacing'], basicSettings, {'speed': basicSettings['fast']});
      j += patSettings['lineSpacing'];
      k += 1;
    } else if (k % 2 !== 0) {
      gcode += '; Pressure Advance =' + Math.round10(i, PA_round) + ' ; \n' +
               'M572 D0 S' + Math.round10(i, PA_round) + ' ; \n' +
               createLine(startX + patSettings['lengthSlow'] + patSettings['lengthFast'], startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
               createLine(startX + patSettings['lengthSlow'], startY + j, patSettings['lengthFast'], basicSettings, {'speed': basicSettings['fast']}) +
               createLine(startX, startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
               createLine(startX, startY + j + patSettings['lineSpacing'], patSettings['lineSpacing'], basicSettings, {'speed': basicSettings['fast']});
      j += patSettings['lineSpacing'];
      k += 1;
    }
  }
  gcode += doEfeed('-', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD'));
  return gcode;
}

// create standard test pattern
function createStdPattern(startX, startY, basicSettings, patSettings) {
  var j = 0,
      gcode = '';

  for (var i = patSettings['kStart']; i <= patSettings['kEnd']; i += patSettings['kStep']) {
    gcode += '; Pressure Advance =' + Math.round10(i, PA_round) + ' ; \n' +
             'M572 D0 S' + Math.round10(i, PA_round) + ' ; \n' +
             doEfeed('+', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD')) +
             createLine(startX + patSettings['lengthSlow'], startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
             createLine(startX + patSettings['lengthSlow'] + patSettings['lengthFast'], startY + j, patSettings['lengthFast'], basicSettings, {'speed': basicSettings['fast']}) +
             createLine(startX + (2 * patSettings['lengthSlow']) + patSettings['lengthFast'], startY + j, patSettings['lengthSlow'], basicSettings, {'speed': basicSettings['slow']}) +
             doEfeed('-', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD')) +
             (i !== patSettings['kEnd'] ? moveTo(startX, startY + j + patSettings['lineSpacing'], basicSettings) : '');
    j += patSettings['lineSpacing'];
  }
  return gcode;
}

// create digits for K line numbering
function createGlyphs(startX, startY, basicSettings, value) {
  var glyphSegHeight = 2,
      glyphSegHeight2 = 0.4,
      glyphSpacing = 3.0,
      glyphString = '',
      xCount = 0,
      yCount = 0,
      sNumber = value.toString(),
      glyphSeg = {
        '1': ['up', 'up'],
        '2': ['mup', 'mup', 'right', 'down', 'left', 'down', 'right'],
        '3': ['mup', 'mup', 'right', 'down', 'down', 'left', 'mup', 'right'],
        '4': ['mup', 'mup', 'down', 'right', 'mup', 'down', 'down'],
        '5': ['right', 'up', 'left', 'up', 'right'],
        '6': ['mup', 'right', 'down', 'left', 'up', 'up', 'right'],
        '7': ['mup', 'mup', 'right', 'down', 'down'],
        '8': ['mup', 'right', 'down', 'left', 'up', 'up', 'right', 'down'],
        '9': ['right', 'up', 'left', 'up', 'right', 'down'],
        '0': ['right', 'up', 'up', 'left', 'down', 'down'],
        '.': ['dot']
      };

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    for (var key in glyphSeg[sNumber.charAt(i)]) {
      if(glyphSeg[sNumber.charAt(i)].hasOwnProperty(key)) {
        var up = createLine(startX + (xCount * glyphSegHeight), startY + (yCount * glyphSegHeight) + glyphSegHeight, glyphSegHeight, basicSettings, {'speed': basicSettings['slow'], 'comment': ' ; ' + sNumber.charAt(i) + '\n'}),
            down = createLine(startX + (xCount * glyphSegHeight), startY + (yCount * glyphSegHeight) - glyphSegHeight, glyphSegHeight, basicSettings, {'speed': basicSettings['slow'], 'comment': ' ; ' + sNumber.charAt(i) + '\n'}),
            right = createLine(startX + (xCount * glyphSegHeight) + glyphSegHeight, startY + (yCount * glyphSegHeight), glyphSegHeight, basicSettings, {'speed': basicSettings['slow'], 'comment': ' ; ' + sNumber.charAt(i) + '\n'}),
            left = createLine(startX + (xCount * glyphSegHeight) - glyphSegHeight, startY + (yCount * glyphSegHeight), glyphSegHeight, basicSettings, {'speed': basicSettings['slow'], 'comment': ' ; ' + sNumber.charAt(i) + '\n'}),
            mup = moveTo(startX + (xCount * glyphSegHeight), startY + (yCount * glyphSegHeight) + glyphSegHeight, basicSettings),
            dot = createLine(startX, startY + glyphSegHeight2, glyphSegHeight2, basicSettings, {speed: basicSettings['slow'], comment: ' ; dot\n'});
        if (glyphSeg[sNumber.charAt(i)][key] === 'up') {
          glyphString += up;
          yCount += 1;
        } else if (glyphSeg[sNumber.charAt(i)][key] === 'down') {
          glyphString += down;
          yCount -= 1;
        } else if (glyphSeg[sNumber.charAt(i)][key] === 'right') {
          glyphString += right;
          xCount += 1;
        } else if (glyphSeg[sNumber.charAt(i)][key] === 'left') {
          glyphString += left;
          xCount -= 1;
        } else if (glyphSeg[sNumber.charAt(i)][key] === 'mup') {
          glyphString += mup;
          yCount += 1;
        } else if (glyphSeg[sNumber.charAt(i)][key] === 'dot') {
          glyphString += dot;
        }
      }
    }
    if (sNumber.charAt(i) === '1' || sNumber.charAt(i) === '.') {
      startX += 1;
    } else {
      startX += glyphSpacing;
    }
    if (i !== sNumber.length - 1) {
      glyphString += doEfeed('-', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD')) +
                     moveTo(startX, startY, basicSettings) +
                     doEfeed('+', basicSettings, (basicSettings['fwRetract'] ? 'FWR' : 'STD'));
    }
    yCount = 0;
    xCount = 0;
  }
  return glyphString;
}

// gcode for small z hop
function zHop(hop, basicSettings) {
  var gcode = '';

  gcode += 'G1 Z' + Math.round10(hop, Z_round) + ' F' + basicSettings['slow'] + ' ; zHop\n';

  return gcode;
}

// rotate x around a defined center xm, ym
function rotateX(x, xm, y, ym, a) {
  a = a * Math.PI / 180; // Convert to radians
  var cos = Math.cos(a),
      sin = Math.sin(a);

  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again
  //var xr = (x - xm) * cos - (y - ym) * sin + xm; //CCW
  var xr = (cos * (x - xm)) + (sin * (y - ym)) + xm; //CW
  return xr;
}

// rotate y around a defined center xm, ym
function rotateY(x, xm, y, ym, a) {
  a = a * Math.PI / 180; // Convert to radians
  var cos = Math.cos(a),
      sin = Math.sin(a);

  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again
  //var yr = (x - xm) * sin + (y - ym) * cos + ym; //CCW
  var yr = (cos * (y - ym)) - (sin * (x - xm)) + ym; //CW
  return yr;
}

// save current settings as localStorage object
function setLocalStorage() {
  var FILAMENT_DIAMETER = parseFloat($('#FIL_DIA').val()),
      NOZZLE_DIAMETER = parseFloat($('#NOZ_DIA').val()),
      NOZZLE_LINE_RATIO = parseFloat($('#NOZ_LIN_R').val()),
      START_GCODE = $('#START_GCODE').val(),
      END_GCODE = $('#END_GCODE').val(),
      SPEED_SLOW = parseInt($('#SLOW_SPEED').val()),
      SPEED_FAST = parseInt($('#FAST_SPEED').val()),
      SPEED_MOVE = parseInt($('#MOVE_SPEED').val()),
      SPEED_RETRACT = parseInt($('#RETRACT_SPEED').val()),
      ACCELERATION = parseInt($('#PRINT_ACCL').val()),
      RETRACT_DIST = parseFloat($('#RETRACTION').val()),
      BED_X = parseInt($('#BEDSIZE_X').val()),
      BED_Y = parseInt($('#BEDSIZE_Y').val()),
      NULL_CENTER = $('#CENTER_NULL').prop('checked'),
      HEIGHT_LAYER = parseFloat($('#LAYER_HEIGHT').val()),
      FAN_SPEED = parseFloat($('#FAN_SPEED').val()),
      EXT_MULT = parseFloat($('#EXTRUSION_MULT').val()),
      PATTERN_TYPE = $('#TYPE_PATTERN').val(),
      K_START = parseFloat($('#K_START').val()),
      K_END = parseFloat($('#K_END').val()),
      K_STEP = parseFloat($('#K_STEP').val()),
      PRINT_DIR = $('#DIR_PRINT').val(),
      LINE_SPACING = parseFloat($('#SPACE_LINE').val()),
      USE_FRAME = $('#FRAME').prop('checked'),
      USE_PRIME = $('#PRIME').prop('checked'),
      EXT_MULT_PRIME = parseFloat($('#PRIME_EXT').val()),
      SPEED_PRIME = parseFloat($('#PRIME_SPEED').val()),
      PRIME_DWELL = parseFloat($('#DWELL_PRIME').val()),
      LENGTH_SLOW = parseFloat($('#SLOW_LENGTH').val()),
      LENGTH_FAST = parseFloat($('#FAST_LENGTH').val()),
      Z_OFFSET = parseFloat($('#OFFSET_Z').val()),
      USE_FWR = $('#USE_FWR').prop('checked'),
      USE_MMS = $('#MM_S').prop('checked'),
      USE_LINENO = $('#LINE_NO').prop('checked');

  var settings = {
    'Version' : SETTINGS_VERSION,
    'FILAMENT_DIAMETER': FILAMENT_DIAMETER,
    'NOZZLE_DIAMETER': NOZZLE_DIAMETER,
    'NOZZLE_LINE_RATIO': NOZZLE_LINE_RATIO,
    'START_GCODE': START_GCODE,
    'END_GCODE': END_GCODE,
    'SPEED_SLOW': SPEED_SLOW,
    'SPEED_FAST': SPEED_FAST,
    'SPEED_MOVE': SPEED_MOVE,
    'SPEED_RETRACT': SPEED_RETRACT,
    'ACCELERATION': ACCELERATION,
    'RETRACT_DIST': RETRACT_DIST,
    'BED_X': BED_X,
    'BED_Y': BED_Y,
    'NULL_CENTER': NULL_CENTER,
    'HEIGHT_LAYER': HEIGHT_LAYER,
    'FAN_SPEED' : FAN_SPEED,
    'EXT_MULT': EXT_MULT,
    'PATTERN_TYPE': PATTERN_TYPE,
    'K_START': K_START,
    'K_END': K_END,
    'K_STEP': K_STEP,
    'PRINT_DIR': PRINT_DIR,
    'LINE_SPACING': LINE_SPACING,
    'USE_FRAME': USE_FRAME,
    'USE_PRIME': USE_PRIME,
    'EXT_MULT_PRIME': EXT_MULT_PRIME,
    'SPEED_PRIME' : SPEED_PRIME,
    'PRIME_DWELL': PRIME_DWELL,
    'LENGTH_SLOW': LENGTH_SLOW,
    'LENGTH_FAST': LENGTH_FAST,
    'Z_OFFSET': Z_OFFSET,
    'USE_FWR': USE_FWR,
    'USE_MMS': USE_MMS,
    'USE_LINENO': USE_LINENO
  };

  const lsSettings = JSON.stringify(settings);
  window.localStorage.setItem('LIN_SETTINGS', lsSettings);
}

// toggle between mm/s and mm/min speed settings
function speedToggle() {
  var SPEED_SLOW = $('#SLOW_SPEED').val(),
      SPEED_FAST = $('#FAST_SPEED').val(),
      SPEED_MOVE = $('#MOVE_SPEED').val(),
      SPEED_RETRACT = $('#RETRACT_SPEED').val(),
      SPEED_PRIME = $('#PRIME_SPEED').val();
      SPEED_UNRETRACT = $('#UNRETRACT_SPEED').val();
  if ($('#MM_S').is(':checked')) {
    SPEED_SLOW = $('#SLOW_SPEED').val();
    SPEED_FAST = $('#FAST_SPEED').val();
    SPEED_MOVE = $('#MOVE_SPEED').val();
    SPEED_RETRACT = $('#RETRACT_SPEED').val();
    SPEED_UNRETRACT = $('#UNRETRACT_SPEED').val();
    SPEED_PRIME = $('#PRIME_SPEED').val();
    $('#SLOW_SPEED').val(SPEED_SLOW / 60);
    $('#FAST_SPEED').val(SPEED_FAST / 60);
    $('#MOVE_SPEED').val(SPEED_MOVE / 60);
    $('#RETRACT_SPEED').val(SPEED_RETRACT / 60);
    $('#UNRETRACT_SPEED').val(SPEED_UNRETRACT / 60);
    $('#PRIME_SPEED').val(SPEED_PRIME / 60);
  } else {
    SPEED_SLOW = $('#SLOW_SPEED').val();
    SPEED_FAST = $('#FAST_SPEED').val();
    SPEED_MOVE = $('#MOVE_SPEED').val();
    SPEED_RETRACT = $('#RETRACT_SPEED').val();
    SPEED_UNRETRACT = $('#UNRETRACT_SPEED').val();
    SPEED_PRIME = $('#PRIME_SPEED').val();
    $('#SLOW_SPEED').val(SPEED_SLOW * 60);
    $('#FAST_SPEED').val(SPEED_FAST * 60);
    $('#MOVE_SPEED').val(SPEED_MOVE * 60);
    $('#RETRACT_SPEED').val(SPEED_RETRACT * 60);
    $('#UNRETRACT_SPEED').val(SPEED_UNRETRACT * 60);
    $('#PRIME_SPEED').val(SPEED_PRIME * 60);
  }
}

// toggle between standard and alternate pattern type
function patternType() {
  if ($('#TYPE_PATTERN').val() === 'alt') {
    if ($('#FRAME').is(':checked')) {
      $('#FRAME').prop('checked', false);
      $('#FRAME').prop('disabled', true);
      $('label[for=FRAME]').css({opacity: 0.5});
    } else {
      $('#FRAME').prop('disabled', true);
      $('label[for=FRAME]').css({opacity: 0.5});
    }
  } else if ($('#TYPE_PATTERN').val() === 'std'){
    $('#FRAME').prop('disabled', false);
    $('label[for=FRAME]').css({opacity: 1});
  }
}

// toggle prime relevant options
function togglePrime() {
  if ($('#PRIME').is(':checked')) {
    $('#PRIME_EXT').prop('disabled', false);
    $('label[for=PRIME_EXT]').css({opacity: 1});
  } else {
    $('#PRIME_EXT').prop('disabled', true);
    $('label[for=PRIME_EXT]').css({opacity: 0.5});
  }
}

// toggle between standard and firmware retract
function toggleRetract() {
  if ($('#USE_FWR').is(':checked')) {
    $('#RETRACT_SPEED').prop('disabled', true);
    $('label[for=RETRACT_SPEED]').css({opacity: 0.5});
  } else {
    $('#RETRACT_SPEED').prop('disabled', false);
    $('label[for=RETRACT_SPEED]').css({opacity: 1.0});
  }
}

// sanity checks for pattern / bed size
function validateInput() {
  var testNaN = {
      // do not use parseInt or parseFloat for validating, since both
      // functions will have special parsing characteristics leading to
      // false numeric validation
      BEDSIZE_X: $('#BEDSIZE_X').val(),
      BEDSIZE_Y: $('#BEDSIZE_Y').val(),
      K_START: $('#K_START').val(),
      K_END: $('#K_END').val(),
      K_STEP: $('#K_STEP').val(),
      SPACE_LINE: $('#SPACE_LINE').val(),
      SLOW_SPEED: $('#SLOW_SPEED').val(),
      FAST_SPEED: $('#FAST_SPEED').val(),
      SLOW_LENGTH: $('#SLOW_LENGTH').val(),
      FAST_LENGTH: $('#FAST_LENGTH').val(),
      FIL_DIA: $('#FIL_DIA').val(),
      NOZ_DIA: $('#NOZ_DIA').val(),
      NOZ_LIN_R: $('#NOZ_LIN_R').val(),
      LAYER_HEIGHT: $('#LAYER_HEIGHT').val(),
      FAN_SPEED: $('#FAN_SPEED').val(),
      EXTRUSION_MULT: $('#EXTRUSION_MULT').val(),
      PRIME_EXT: $('#PRIME_EXT').val(),
      OFFSET_Z: $('#OFFSET_Z').val(),
      MOVE_SPEED: $('#MOVE_SPEED').val(),
      RETRACT_SPEED: $('#RETRACT_SPEED').val(),
      PRINT_ACCL: $('#PRINT_ACCL').val(),
      RETRACTION: $('#RETRACTION').val(),
      PRIME_SPEED: $('#PRIME_SPEED').val(),
      DWELL_PRIME: $('#DWELL_PRIME').val()
    },
    selectDir = $('#DIR_PRINT'),
    printDir = selectDir.val(),
    usePrime = $('#PRIME').prop('checked'),
    useLineNo = $('#LINE_NO').prop('checked'),
    sizeY = ((parseFloat(testNaN['K_END']) - parseFloat(testNaN['K_START'])) / parseFloat(testNaN['K_STEP']) * parseFloat(testNaN['SPACE_LINE'])) + 25, // +25 with ref marking
    sizeX = (2 * parseFloat(testNaN['SLOW_LENGTH'])) + parseFloat(testNaN['FAST_LENGTH']) + (usePrime ? 10 : 0) + (useLineNo ? 8 : 0),
    printDirRad = printDir * Math.PI / 180,
    fitWidth = Math.round10(Math.abs(sizeX * Math.cos(printDirRad)) + Math.abs(sizeY * Math.sin(printDirRad)), 0),
    fitHeight = Math.round10(Math.abs(sizeX * Math.sin(printDirRad)) + Math.abs(sizeY * Math.cos(printDirRad)), 0),
    decimals = getDecimals(parseFloat(testNaN['K_STEP'])),
    invalidDiv = 0;

  // Start clean
  $('#K_START,#K_END,#K_STEP,#SPACE_LINE,#SLOW_LENGTH,#FAST_LENGTH,#FIL_DIA,#NOZ_DIA,#LAYER_HEIGHT,#EXTRUSION_MULT,#PRIME_EXT,#OFFSET_Z,#NOZ_LIN_R,'
     + '#START_GCODE,#END_GCODE,#MOVE_SPEED,#RETRACT_SPEED,#UNRETRACT_SPEED,#PRINT_ACCL,#RETRACTION,#PRIME_SPEED,#DWELL_PRIME,#FAST_SPEED,#SLOW_SPEED').each((i,t) => {
    t.setCustomValidity('');
    const tid = $(t).attr('id');
    $(`label[for=${tid}]`).removeClass();
  });
  $('#warning1').hide();
  $('#warning2').hide();
  $('#warning3').hide();
  $('#button').prop('disabled', false);

  // Check for proper numerical values
  Object.keys(testNaN).forEach((k) => {
    if ((isNaN(testNaN[k]) && !isFinite(testNaN[k])) || testNaN[k].trim().length === 0) {
      $('label[for=' + k + ']').addClass('invalidNumber');
      $('#' + k)[0].setCustomValidity('The value is not a proper number.');
      $('#warning3').text('Some values are not proper numbers. Check highlighted Settings.');
      $('#warning3').addClass('invalidNumber');
      $('#warning3').show();
      $('#button').prop('disabled', true);
    }
  });

  // Check if Pressure Advance Stepping is a multiple of the Pressure Advance Range
  if ((Math.round10(parseFloat(testNaN['K_END']) - parseFloat(testNaN['K_START']), PA_round) * Math.pow(10, decimals)) % (parseFloat(testNaN['K_STEP']) * Math.pow(10, decimals)) !== 0) {
    $('label[for=K_START]').addClass('invalidDiv');
    $('#K_START')[0].setCustomValidity('Pressure Advance range cannot be cleanly divided.');
    $('label[for=K_END]').addClass('invalidDiv');
    $('#K_END')[0].setCustomValidity('Pressure Advance range cannot be cleanly divided.');
    $('label[for=K_STEP]').addClass('invalidDiv');
    $('#K_STEP')[0].setCustomValidity('Pressure Advance range cannot be cleanly divided.');
    $('#warning1').text('Your Pressure Advance range cannot be cleanly divided. Check highlighted Pattern Settings.');
    $('#warning1').addClass('invalidDiv');
    $('#warning1').show();
    $('#button').prop('disabled', true);
    invalidDiv = 1;
  }

  // Check if pattern settings exceed bed size
  if (fitWidth > (parseInt(testNaN['BEDSIZE_X']) - 5)) {
    $('label[for=SLOW_LENGTH]').addClass('invalidSize');
    $('#SLOW_LENGTH')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your X bed size.');
    $('label[for=FAST_LENGTH]').addClass('invalidSize');
    $('#FAST_LENGTH')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your X bed size.');
    $((invalidDiv ? '#warning2' : '#warning1')).text('Your Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your X bed size. Check highlighted Pattern Settings.');
    $((invalidDiv ? '#warning2' : '#warning1')).addClass('invalidSize');
    $((invalidDiv ? '#warning2' : '#warning1')).show();
  }

  if (fitHeight > (parseInt(testNaN['BEDSIZE_Y']) - 5)) {
    $('label[for=K_START]').addClass('invalidSize');
    $('#K_START')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your Y bed size.');
    $('label[for=K_END]').addClass('invalidSize');
    $('#K_END')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your Y bed size.');
    $('label[for=K_STEP]').addClass('invalidSize');
    $('#K_STEP')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your Y bed size.');
    $('label[for=SPACE_LINE]').addClass('invalidSize');
    $('#SPACE_LINE')[0].setCustomValidity('Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your Y bed size.');
    $((invalidDiv ? '#warning2' : '#warning1')).text('Your Pattern size (x: ' + fitWidth + ', y: ' + fitHeight + ') exceeds your Y bed size. Check highlighted Pattern Settings.');
    $((invalidDiv ? '#warning2' : '#warning1')).addClass('invalidSize');
    $((invalidDiv ? '#warning2' : '#warning1')).show();
  }
}

$(window).load(() => {
  // Adapt textarea to cell size
  var TXTAREAHEIGHT = $('.txtareatd').height();
  $('.calibpat #gcodetextarea').css({'height': (TXTAREAHEIGHT) + 'px'});

  // create tab index dynamically
  $(':input:not(:hidden)').each(function(i) {
    $(this).attr('tabindex', i + 1);
  });

  // Get localStorage data
  var lsSettings = window.localStorage.getItem('LIN_SETTINGS');

  if (lsSettings) {
    var settings = jQuery.parseJSON(lsSettings);
    if (!settings['Version'] || settings['Version'] != SETTINGS_VERSION) {
      window.localStorage.removeItem('LIN_SETTINGS');
      alert('Script settings have been updated. Saved settings are reset to default values');
    }
    else {
      $('#FIL_DIA').val(settings['FILAMENT_DIAMETER']);
      $('#NOZ_DIA').val(settings['NOZZLE_DIAMETER']);
      $('#NOZ_LIN_R').val(settings['NOZZLE_LINE_RATIO']);
      $('#START_GCODE').val(settings['START_GCODE']);
      $('#END_GCODE').val(settings['END_GCODE']);
      $('#SLOW_SPEED').val(settings['SPEED_SLOW']);
      $('#FAST_SPEED').val(settings['SPEED_FAST']);
      $('#MOVE_SPEED').val(settings['SPEED_MOVE']);
      $('#RETRACT_SPEED').val(settings['SPEED_RETRACT']);
      $('#PRINT_ACCL').val(settings['ACCELERATION']);
      $('#RETRACTION').val(settings['RETRACT_DIST']);
      $('#BEDSIZE_X').val(settings['BED_X']);
      $('#BEDSIZE_Y').val(settings['BED_Y']);
      $('#CENTER_NULL').prop('checked', settings['NULL_CENTER']);
      $('#LAYER_HEIGHT').val(settings['HEIGHT_LAYER']);
      $('#FAN_SPEED').val(settings['FAN_SPEED']);
      $('#EXTRUSION_MULT').val(settings['EXT_MULT']);
      $('#TYPE_PATTERN').val(settings['PATTERN_TYPE']);
      $('#K_START').val(settings['K_START']);
      $('#K_END').val(settings['K_END']);
      $('#K_STEP').val(settings['K_STEP']);
      $('#DIR_PRINT').val(settings['PRINT_DIR']);
      $('#SPACE_LINE').val(settings['LINE_SPACING']);
      $('#FRAME').prop('checked', settings['USE_FRAME']);
      $('#PRIME').prop('checked', settings['USE_PRIME']);
      $('#PRIME_EXT').val(settings['EXT_MULT_PRIME']);
      $('#PRIME_SPEED').val(settings['SPEED_PRIME']);
      $('#DWELL_PRIME').val(settings['PRIME_DWELL']);
      $('#SLOW_LENGTH').val(settings['LENGTH_SLOW']);
      $('#FAST_LENGTH').val(settings['LENGTH_FAST']);
      $('#OFFSET_Z').val(settings['Z_OFFSET']);
      $('#USE_FWR').prop('checked', settings['USE_FWR']);
      $('#MM_S').prop('checked', settings['USE_MMS']);
      $('#LINE_NO').prop('checked', settings['USE_LINENO']);

      //patternType();
      //toggleRetract();
    }
  }

  // toggle between mm/s and mm/min speeds
  $('#MM_S').change(speedToggle);

  // toggle prime relevant html elements
  $('#PRIME').change(togglePrime);

  // frame and alternate pattern are mutually exclusive
  $('#TYPE_PATTERN').change(patternType);

  // Change retract type
  $('#USE_FWR').change(toggleRetract);

});
