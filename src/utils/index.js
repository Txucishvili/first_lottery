export const isServer = typeof document == 'undefined';

export const SVGTextEl = ({ width = '100%', height = '100%', children, y = '50%', x = "50%" }) => {
  return <svg width={width} height={height}>
    {/* <rect x="0" y="0" width="100%" height="100" stroke="red" stroke-width="3px" fill="white" /> */}
    <text x={x} y={y} dominantBaseline="middle" textAnchor="middle">
      {children}
    </text>
  </svg>
}

export var isInt = (function () {
  var re = /^[+-]?\d+$/;
  var re2 = /\.0+$/;

  return function (n) {
    return re.test(('' + n).replace(re2, ''));
  }
}());

export const copyArray = (length, array) => {
  let _returnArray = [];
  for (let i = 0; i < length; i++) {
    _returnArray = _returnArray.concat(array);
  }

  return _returnArray
}

export const getOnlyNum = (str) => {
  return str.match(/([0-9])+/ig)
}

export function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

export function getElementRect(el) {
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset = elemRect.top - bodyRect.top;

    return 
}