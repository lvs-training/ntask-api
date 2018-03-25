const express = require('express');
const consign = require('consign');

const app = express();

//Must be put in the right dependency order
consign()
	.include("libs/config.js")
	.then("db.js")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);