# Transition

## Description 
Transition is a web app that provides life quality data for different regions. When planning a big moves there was always a lot of data to be sourced from a myriad of different spaces. Transition aims to provide the public with a single platform to see all the information related to a proposed location prior to moving. This allows viewers to make a mindful decision on the next steps of their future.
This web app is built using the <strong>[Teleport-API](https://developers.teleport.org/api/)</strong> and the data provided.

### Features 
* Life score data for different cities amongst differing qualities
* Overall city score that can be compared with others
* Gallery feature where we allow users add their own images
* Login in feature that affords users access to restricted pages

## Process

### Wireframes 
#### Initial Login
![Initial Login](images/Auth-screen.png)

#### Initial Location Layout
![Initial Location Layout](images/Location-Page.png)

#### Initial ERD Model
![Initial ERD-Models](images//ERD-models.png)

### Deployment

#### Login
![Deployed Login](images/login-page.png)

#### Location Page
![Deployed Location Page](images/Deployed-location-page.png)

## How to Install
* `Fork` and `Clone` this repository to your computer.
* Install the needed dependencies with npm I -
* Add a .env file globally and include your `SECRET_SESSION` and it's value.
* To start the webpage, `npm run dev` in your terminal, then open in your browser with the address `http://localhost:3000/`
* Explore the App in your browser. 

## File Structure 
This app was built using express, ejs, Sequelize, Postgres, and Javascript.
The files are ogranized in a consistent manner which can be seen in the `controllers` and `views` folder.
Local tests were completed using `database-test.js`. 
`dbTest.js` was used to test auth files.

Tests were also implemented for the possibility of furture enhancements.
* See: `test` folder


# Future Enhancments
* Would like to implement a search feature that directly pings the API
* Favorites feature for users
* Provide linkage that allows uses to browse living spaces in the cities they are looking at.
* Incorporate a direct comparison board where users can compare their favorites. 
* Implement a blog forum for users to connect with each other and those in prospective cities.
* A randomized gallery page that display
* etc.

## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License 
[MIT](https://choosealicense.com/licenses/mit/)
