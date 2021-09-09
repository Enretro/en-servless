// domain/.netlify/functions/1-hello
// const person = {name: 'john'}

exports.handler = async (event, context, cb) => {
  // console.log(context);
  return {
    statusCode: 200,
    body: 'Our First netlify Functions Example',
  }
  // cb(null, {statusCode:200, body: 'Hello People'})
}