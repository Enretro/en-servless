// domain/.netlify/functions/1-hello
// const person = {name: 'john'}

exports.handler = async (event, context, cb) => {
  // console.log(context);
  return {
    statusCode: 200,
    body: 'En prva netlify-server funkcija',
  }
  // cb(null, {statusCode:200, body: 'Hello People'})
}