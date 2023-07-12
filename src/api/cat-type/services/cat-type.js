'use strict';

/**
 * cat-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cat-type.cat-type');
