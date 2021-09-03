const consola = require("consola");
const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const config  = require("../nuxt.config.js");

// Boiler-plate
const app = express();

app.use(express.json({
  limit: '700mb'
}));

app.use(express.urlencoded({
  limit: '700mb',
  parameterLimit: 100000,
  extended: true 
}));

// Import and Set Nuxt.js option
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
    // Init Nuxt
    if (!config.dev) {
        config.server = {
            host: '0.0.0.0',
            port: process.env.PORT || 8000
        };
    }
    
    const nuxt = new Nuxt(config);
    await nuxt.listen();
    consola.log('nuxt server listening', nuxt.server.options.server);
    
    // Give nuxt middleware to express
    app.use(nuxt.render);
    
    if(config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }
    consola.log('Nuxt app ready!');
}

if (require.main === module) {
    start();
}
