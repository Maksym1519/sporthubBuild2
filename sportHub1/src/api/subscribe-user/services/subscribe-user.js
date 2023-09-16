'use strict';

/**
 * subscribe-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribe-user.subscribe-user');
