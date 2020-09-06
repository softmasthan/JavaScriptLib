const validate = {
  isStringNull: function (string) {
    if (string != undefined && string == null) {
      return true;
    } else {
      return false;
    }
  },
  isStringEmpty: function (string) {
    if (string != undefined && string == "") {
      return true;
    } else {
      return false;
    }
  },
  isStringNullOrEmpty: function (string) {
    if (string != undefined && (string == null || string == "")) {
      return true;
    } else {
      return false;
    }
  },
  isEmailValid: function (email) {
    let regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regExp.test(email)) {
      return true;
    } else {
      return false;
    }
  },

  isHttpUrlValid: function (url) {
    let regExp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    if (regExp.test(url)) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = validate;
