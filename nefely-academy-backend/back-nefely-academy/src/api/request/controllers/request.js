"use strict";

/**
 * request controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const TelegramBot = require("node-telegram-bot-api");
const token = "5626565998:AAFYBh3T9ypy8yEJgJ-6CLanuinZ7p5N7v8";
const bot = new TelegramBot(token, { polling: true });

module.exports = createCoreController("api::request.request", ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    const message = `Новая заявка! \n\nИмя:  ${ctx.request.body.data.Name} \nТел:  ${ctx.request.body.data.Number}`;
    bot.sendMessage("859158025", message)    
    return response
  },
}));

