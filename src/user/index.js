module.exports = function (scope) {
  return {
    isLoggedIn : require('./is-logged-in')(scope),
    login      : require('./login')(scope),
    logout     : require('./logout')(scope),
    me         : require('./me')(scope)
  };
};
