(function (ext) {

  // This function calculates the distance between two points
  function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // This function calculates the direction between two points
  function calculateDirection(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const radians = Math.atan2(dy, dx);
    const degrees = radians * 180 / Math.PI;
    return degrees;
  }

  // Block and block menu descriptions
  const descriptor = {
    blocks: [
      ['r', 'distance between x: %n y: %n and x: %n y: %n', 'getDistance', 0, 0, 0, 0],
      ['r', 'direction from x: %n y: %n to x: %n y: %n', 'getDirection', 0, 0, 0, 0],
    ],
  };

  // Define the extension
  ext._shutdown = function () { };
  ext._getStatus = function () {
    return { status: 2, msg: 'Ready' };
  };

  ext.getDistance = function (x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance.toFixed(2).toString();
  };

  ext.getDirection = function (x1, y1, x2, y2) {
    const direction = calculateDirection(x1, y1, x2, y2);
    return direction.toFixed(2).toString();
  };

  // Register the extension
  ScratchExtensions.register('Distance and Direction', descriptor, ext);

})({});
