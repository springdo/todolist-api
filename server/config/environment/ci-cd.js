'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  //  TODO change this to the new service in the OpenShift namespace
  mongo: {
    uri: 'mongodb://username:password@<YOUR_NAME>-ci-cd.apps.<CLUSTER_DOMAIN>/todolist',
  },
  mocks: {
    // api: true
    api: false
  },
  seedDB: true
};
