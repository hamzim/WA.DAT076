import express from 'express'
// import mongoose from 'mongoose'
import modRewrite from 'connect-modrewrite';
import helmet from 'helmet';

import morgan from 'morgan';

import session from 'express-session';
// import connectRedis from 'connect-redis';

import Webpack from './webpack';

// Routes
// import imageRouter from './routes/image-api';

// mongoose.promise = global.Promise;
// mongoose.connect(`mongodb://${config.database.host}/${config.database.name}`);

const app = express();

//const RedisStore = connectRedis(session);
//const sessionMiddleware = session({
//  store: new RedisStore({
//    host: config.redis.host,
//    port: 6379
//  }),
//  secret: config.session.secret,
//  resave: false,
//  saveUninitialized: false,
//  name: 'dfotose.session'
//});

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
// app.use(sessionMiddleware);

// Include all routes
const baseUrl = '/v1';

app.get('/v1/foo', (req, res) => {
  res.send('bar');
});

app.listen(8888, () => {
  console.log(`Listening localhost:8888`);
});
