function urlValidator(url) {
  const regex = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  );
  return regex.test(url);
}

module.exports = urlValidator;
