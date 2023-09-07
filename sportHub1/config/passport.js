// // config/passport.js
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// module.exports = (strapi) => {
//   passport.use(
//     new LocalStrategy(
//       {
//         usernameField: 'email', // Здесь укажите имя поля для логина (в зависимости от вашей модели)
//         passwordField: 'password', // Здесь укажите имя поля для пароля (в зависимости от вашей модели)
//       },
//       async (email, password, done) => {
//         // Найдите пользователя в базе данных по email
//         const user = await strapi.query('user', 'users-permissions').findOne({ email });

//         // Если пользователь не найден или пароль не совпадает, верните ошибку
//         if (!user || user.password !== password) {
//           return done(null, false, { message: 'Incorrect email or password.' });
//         }

//         // Если пользователь найден и пароль совпадает, верните пользователя
//         return done(null, user);
//       }
//     )
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     // Ваш код для получения пользователя из базы данных по id
//     done(null, user);
//   });

//   strapi.app.use(passport.initialize());
//   strapi.app.use(passport.session());
// };
