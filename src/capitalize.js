function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.splice(1);
}

module.exports = capitalize;
