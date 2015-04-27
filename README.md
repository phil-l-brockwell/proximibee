# proximibee

A project worked on for the Makers Academy Final Project. 
Our task was to create a mobile app that could be used during trade show events, using iBeacons to provide relevant product information.

# The Team

* Phil Brockwell (Thats Me) [Profile](https://github.com/robertpulson)
* Meads Chalcroft [Profile](https://github.com/meads58)
* Louise Beh [Profile](https://github.com/louisebeh)
* Loris Fochesato [Profile](https://github.com/loris-fo)
* Sebastien Pires [Profile](https://github.com/SebastienPires)

# Technologies Used

* HTML/CSS and jQuery for user interface
* EvothingsWorkbench for writing javascript code to interact with beacons
* Phonegap/cordova to compile app into native iOS language (Swift)
* Jasmine for testing Javascript code
* Ruby on rails database for backend user management system, allowing trade show owner to add beacons/products
* Augmented reality to show enriched product information

# What does it do?
The proximibee app allows for interactive shopping experiences. 
Beacons are placed in different product sections/areas and relevant content is delivered through the app to the users phone.

# Video

We created a video demonstration to show the potential uses of the application: [Check it out](https://www.youtube.com/watch?v=hD8TW8saWKk)

# Screenshots

# User Management System

We implemented a user management system which could potentially allow trade show owners to log in with a user account and add beacons/products to their events.

The repository can be viewed here: [User Management System]()

# Future enhancements

* Refactoring
* Deploying to mobile app stores
* Tidy up styling

# Getting Started

Clone the repo by pasting the following into the terminal:

`git clone https://github.com/robertpulson/proximibee.git`

Then navigate into it:

`cd proximibee`

Install node (if you haven't already) with: 

`brew install node`

You can then install phonegap:

`sudo npm install -g phonegap`

You can now use `phonegap serve` and paste the port address into a browser or the phonegap mobile app.
However by doing this some of the functionality is limited and the app will not respond to beacons.

To demo a working version of the app you will need to use:

`cordova build ios`

And then open the `Proximibee.xcodeproj` file inside `platforms -> ios` with xcode. 
If you connect a suitable device you can download the app to it, with full functionality.
