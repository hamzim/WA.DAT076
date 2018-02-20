import express from 'express'
// import mongoose from 'mongoose'
import modRewrite from 'connect-modrewrite';
import helmet from 'helmet';

import morgan from 'morgan';

import session from 'express-session';
// import connectRedis from 'connect-redis';

import Webpack from './webpack';

// Routes
//    Create a new route file to add!
import authRouter from './routes/auth-api';

// mongoose.promise = global.Promise;
// mongoose.connect(`mongodb://${config.database.host}/${config.database.name}`);

const app = express();

if (process.env.NODE_ENV !== "production") {
  Webpack(app);
}

// Basic security module
app.use(helmet());

app.use(modRewrite([
  '^\/(?!(v1|auth|assets|favicon\.ico|robots\.txt|bundle.js)).*$ /index.html'
]));

app.use('/', express.static(__dirname + '/public'));

app.use(morgan('dev'));

// This will be the base-point for all api-calls! They're
// all prefixed with a version number.
const baseUrl = '/v1';

// Include the routers route, and prefix them with v1
app.use(baseUrl, authRouter);

app.listen(8888, () => {
  console.log(`Listening localhost:8888`);
});
