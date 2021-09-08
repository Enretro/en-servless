// domain/.netlify/functions/1-hello
const person = {name: 'john'}

exports.handler = async (event, context, cb) => {
  console.log(context);
  return {
    statusCode:200,
    body: JSON.stringify(person)
  }
  // cb(null, {statusCode:200, body: 'Hello People'})
}