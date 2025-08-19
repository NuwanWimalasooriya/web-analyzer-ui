# Web-Analyzer-UI
This is the frontend application to display filtered contents whiched are analyzed from the COntent Analyzer API (Golang)
By entering a url in the given textbox, user can click the "Get Content" button to retrieve the specfic contents based on the given web page.
If the given url is not valid one, it will display the captured error message in the UI.

# Pre-Requests
Node v17 orabove
Visual studio code
[Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

## Install dependancies
1. Download and Open source code with visual studio code  and open a therminal then execute below commands

 npm install 

## Building

To build the project run:

1. ng build

   if there is no any build error execute below command to run the app
2. ng serve
3. Open http://localhost:4200/ from the browser

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Possible improvements
1. If the website is having huge capacity of contents, its taking time to analyze and invalidate caching can be applied for responses to avoid calling API for similar requests.
2. Frontend application can be build as a docker image and add to the docker registry.



1. Enter a valid url in the textbox
2. Click on the "Get Content" button.

<img width="1397" height="946" alt="image" src="https://github.com/user-attachments/assets/d830da4e-2590-4185-856c-ff3a364ab1cd" />


