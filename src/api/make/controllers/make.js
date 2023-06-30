'use strict';

/**
 * make controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::make.make", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const make = await strapi.entityService.findMany("api::make.make", query);

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(make);

    // @ts-ignore
    return this.transformResponse(sanitizedEntity[0]);
  },
}));
