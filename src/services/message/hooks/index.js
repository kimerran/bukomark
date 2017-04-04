'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const showUser = function(options) {
  return function(hook) {
    console.log('>>> user')
    console.log(hook.params.user.github);
    const text = hook.data.text;
    const userData = hook.params.user.github;

    hook.data = {
      text,
      sentById: userData.id,
      sentByName: userData.login
    }
  }
}
exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    showUser()
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
