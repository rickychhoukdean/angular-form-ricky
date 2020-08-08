# angular-form-ricky

## About
Simple Angular application with a focus on accessibility. Fill out the form to send data and a file to a backend nodejs server in which the file is downloaded.

## How to run 
Source code https://angular-form-ricky.stackblitz.io and
https://repl.it/@rickychhoukdean/Basic-backend-eA-coding-test#index.js 

1. Run the server https://repl.it/@rickychhoukdean/Basic-backend-eA-coding-test#index.js by pressing "Run"
It should show {"server":"ok"} to show that it is running.
2. Visit https://angular-form-ricky.stackblitz.io and fill out the form completely and press send.
3. Once successfully submitted the file should show in the server folder "uploads"
4. Form data is sent to a MongoDB database as well.

## Things to note:
1. I wasn't able to validate the HTML through site ( https://angular-form-ricky.stackblitz.io ) due to the stackblitz wrapping  so I did the checking manually by moving everything into a seperate HTML file and validated that. I have attached that html file as validate.html so you can test yourself.
I have added a date polyfill in the to deal with the warning given by the HTML validator.

2. The same applies to validating the CSS but for this I just manually validated - if there was a way to do it not manually through stackblitz I would love to know!

3. I left in the database connection information in the NodeJS server as this is a smaller app, normally I would use process.env

## Responsivity
Since there were no clear guidelines on what to make responsive I decided on a couple of things.
1. Make image list full size on phones but a fixed size on tablets and up.
2. Make the radio buttons vertically aligned on phones but horizontally aligned on everything else.
3. Make the form inputs/buttons full on phones but fixed 75% width on everything else.
4. The font on the phone is slightly smaller than on tablets and desktops.
