function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // charAt(0); 첫번째 문자. /toUpperCase(); 대문자
}


module.exports = {
  capitalize: capitalize
}