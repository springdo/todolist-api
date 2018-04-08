'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://username:password@mongodb.donal-dev.svc.cluster.local/todolist',
  },
  seedDB: true,
  port: process.env.PORT || 9000
};
