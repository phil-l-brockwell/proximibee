#[Proximibee](http://proximibee.herokuapp.com)

![alt tag](http://i.imgur.com/PRDyljk.png)

##What is 'Proximibee'?
Proximibee is an iOS app and was developed in 2 weeks during our final project at Makers Academy. It works with beacons and Augmented Reality

##How does it work?
A user visits a shop or a place fitted with a proximibee network beacon where they:
- Can see and flick a list of the shop items automatically updating as they walk inside the shop (Beacons are so precise that we divided shops)
- Can scan any object with the augmented reality functionality to know more about a product
- Can add an item to the shopping cart and review a list of all added items
- Can pay directly in the app using our payment system

##Technologies
| Front End                       | Back End      | Databases    | Testing | Augmented Reality | Beacons  | Mobile Development |
| ------------                    |-------------  | -----        | -----   | ----------------- | -------- | ------------------ |
| JavaScript, HTML & CSS, jQuery  | Ruby on Rails | PostgreSQL   | Rspec   | Wikitude          | Estimote | Cordova & Phonegap |


##Challenges encountered

#####Beacons
- When we started the project we didn't understand how a beacon worked, but we were all keen to incorporate this particular hardware to make the project more interesting.

#####Mobile application development
- This was new to the team (not covered in the course). Cordova was used to enable the app to be developed in JavaScript and compiled for iOS. The app also needed to interact with Bluetooth, which added further challenges.

#####Augmented Reality
- We spent many hours trying to figure out how we were going to use the augmented reality. We spend two weeks working on it and fully integrated it in the app on the very last day!

##To do
- [ ] Describe potential feature enhancements
- [ ] Refactor
- [ ] Deploy the app to other platforms
