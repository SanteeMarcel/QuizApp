const specialCharsToHTML = (text) => {
  var doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

export default specialCharsToHTML;
