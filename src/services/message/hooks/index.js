'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;


var checkUser = function(options = {}) {
  return function(hook) {
    // console.log('checkUser')
    // console.log(hook.params)
  // hook.app.service(options.userEndpoint).get(1, {}).then(user => {
  //   //hook.app.service('users').get

  // })
  }
}

var addMessageBy = function(options = {}) {
  return function(hook) {
    hook.data = {
      text: hook.data.text,
      sentById: hook.params.user.githubId,
      sentByName: hook.params.user.github.login
    }
  }
}



exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    checkUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [addMessageBy()],
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
