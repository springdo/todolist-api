'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  //  TODO change this to the new service in the OpenShift namespace
  mongo: {
    uri: 'mongodb://username:password@mongodb.<YOUR_NAME>-ci-cd.svc.cluster.local/todolist',
  },
  mocks: {
    // api: true
    api: false
  },
  seedDB: true
};
