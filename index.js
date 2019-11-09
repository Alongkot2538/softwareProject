const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://95a3eb98900d4121b4d73dee4335bd11@sentry.io/1814041' });


Sentry.configureScope(function(scope) {
 scope.setTag("5735512161", "alongkot628@gmail.com");
 scope.setUser({
   email: "alongkot628@gmail.com",
   username: 'Alongkot Aungsitparkdee’'
 });
});



myUndefinedFunction();