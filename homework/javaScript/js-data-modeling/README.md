[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
Write your answer here or in a separate js file.
```
*Data Modeling*
User = {
  id number
  name
  login
  email accounts
  password
}
Email Accounts= {
 id number
 emails adresss
 passwords
}
*Objects*
User = {
  id number: number
  name: String
  login: string
  email accounts: String
  password: string
}
Email Accounts= {
 id number: number
 emails adress: "string"
 passwords: "string"
}

*Relationship*
var example user ={
  id number: 1232
  name: "Jonathan"
  login: jj2
  email accounts: [{
    id number
   emails adresss = [{email1, email2, email3}]
   passwords= [{password1, password2, password3}]
  }]
  password: "wdi12"
}
### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
Write your answer here or in a separate js file.
```
*Data Modeling*
Radio Stations
  id number
  genre
  popularity
  playlists
}
Playlists= {
 id number
 songs
}
*Objects*
Radio Stations = {
  id number: number
  genre: string
  popularity: string
}
Playlist= {
 id number: number
 songs: string
}

*Relationship*
radio stations ={
  id number: 1232
  genre: [{
    pop, rap, country, jazz
  }]
  popularity: [{
    1,2,3,4,5,6,7,8,9,10
  }]
  playlists: [{
    id number: 12414
 songs: song1, song2, song3, song4
  }]
}

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
Write your answer here or in a separate js file.
```
*Data Modeling*
Band Concerts= {
  id number
  tour dates
  ticket purchasing
  recommeded show
  
}
Tour dates= {
 id number
 dates
 city
 time 
}
*Objects*
Band Concerts= {
  id number: number
  tour dates: number
  ticket purchasing: string
  recommeded show: string
}
Tour dates= {
 id number: number
 dates: nubmer
 city: string
 time: number
}
*Relationship*
var example band concert ={
  id number: 1232
  tour dates ={ 
    id number: 333
 dates: 7/18/18
 city: atlanta
 time: 7:30pm
  }
  ticket purchasing={
    avaliable: yes or no
    sold out: yes or no
  }
  recommeded show= {
    list of shows
  }
  
}

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

*Data Modeling*
Coffee Shops= {
  id number
  location
  name  
  menu
  shopping cart
  previous orders
}
menu= {
 id number
 drinks
 prices 
}
*Objects*
Coffee Shops= {
  id number: number
  location: string
  name: string
  menu: string
  shopping cart: string
  previous orders: string
}
menu= {
 id number: number
 drinks: string
 prices: number
}
*Relationship*
var example coffee shops ={
  id number: 1232
  location: '123 fake street"  
  name: "coffee guru"
  menu =[{
  id number: 333
  drinks= {drink1, drink2, drink3, drink4} 
  prices= {price1, price2, price3, price4}
  shopping cart= {drink1 & price1}
  previous orders= {drink3 & price3}
  
}

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
Write your answer here or in a separate js file.
```
*Data Modeling*
Sports Stats= {
  id number
  individual stats
  team stats
}
individual stats= {
 id number
 points
 assists
 rebounds
 steals
}
*Objects*
Sports Stats= {
  id number: number
  individual stats: number
  team stats: number
}
individual stats= {
 id number: number
 points: number
 assists: mumber
 rebounds: number
 steals: number
}
*Relationship*
var example Sports Stats={
  id number: 1232
  individual stats= {[
    points:12
    assists:5
    rebounds:6
    steals:2
  ]}
  team stats={
    total points
    total assists
    total rebounds
    total assists
  }
}


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
Write your answer here or in a separate js file.
```
When creating relationships between the models I really had to think what tied the two models together. In addtion when tying the two models together I had to remember to had sub categories.

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
