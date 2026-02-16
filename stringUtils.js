function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  // Fixed the HTML entity &#39; to a standard single quote ''
  return str.split('').reverse().join('');
}

module.exports = { capitalize, reverse };
