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

##############################

AIRTABLE
user: enTruth
envpogled@gmail.com
kN4wv58i8nkADLL@
kN4wv58i8nkADLL@

##############################

OPENWEATHER

envpogled@gmail.com
lB8ed67p9lfzQWJJ@

http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=fb3d48fdb81553377153b3045221be85&units=metric

##############################

BUTTONDOWN.EMAIL

enTruth
envpogled@gmail.com

BMQDPVSsaBxLt5z@

401f7ac837da42b97f613d789819ff93537bee6a

#############################

NODEMAILER

Name:		Ellis Hansen
Username:	ellis.hansen29@ethereal.email (also works as a real inbound email address)
Password:	2agCWtsXvKKUX8FPTM

Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ellis.hansen29@ethereal.email',
        pass: '2agCWtsXvKKUX8FPTM'
    }
});




formData(js)

