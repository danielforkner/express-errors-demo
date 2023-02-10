Steps for demo:

1. build simple app with one route and test it
2. go to an unkonwn route and note the 404, where does this come from?
   -- this is the default error handler
   -- change it
3. build a users router with two routes and test it
4. have /users/register send an error
5. build another users route with a different error
6. note that we are writing the same error handling code over and over
7. write a custom error handler
8. can we abstract the authorization checks into middleware?
