const specialCharsToHTML = (text) => {
  let doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

export default specialCharsToHTML;
