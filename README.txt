CLONING
$ git clone 
$ rm -rf .git
$ git config --global user.name "Enretro"
$ git config --global user.email "envpogled@gmail.com"
$ git init
$ npm install

$ npm run netlify

####################################

IN ROOT FILE CREATE "netlify.toml" FILE WITH INSIDE:
[build]
  functions = './functions'

[[redirects]]
  from = '/api/*'
  to = '/.netlify/functions/:splat'
  status = 200

#####################################

IN ROOT FILE CREATE "functions" FOLDER WITH INSIDE:
1-hello.js/*optional*/ WITH INSIDE:
 // domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  return {
    statusCode:200,
    body: 'Our First Netlify Function Example',
  }
}

#####################################

VARIABLES

Build & Deploy/Environment/Edit Variables

AIRTABLE_API_KEY=???????????????

