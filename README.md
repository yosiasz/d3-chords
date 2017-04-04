# Music Chords using d3
A simple repo to demo use of data from mongoDB to plot
musical chords as charts using D3.js with a rest api with express.js

# Preview of the site looks like
![Chords Preview](https://github.com/yosiasz/d3-chords/blob/master/src/images/chords.png)

## Dependencies
NodeJS runs the server-side of the app. mongoDB is used for storing data to be displayed on graphs.

##### 1. [mongodb](https://www.npmjs.com/package/mongodb)
##### 2. [express.js](https://www.npmjs.com/package/express)
##### 3. [d3.js](https://www.npmjs.com/package/d3)

### Setting up database
Make sure you initialize mongoDB before running. 

#### Windows

1. Refer to [Detailed installation guides](https://www.turnkeylinux.org/mongodb) to set up a mongoDB instance.

2. Via web console management create a database called d3chords
   create user: mongouser
   password:    d3Mongodb
   You will be using this in ./config/configmongo.js
    mongodb://mongouser:d3Mongodb@your.server.ip:27017/d3chords

3. Via web console management create a collection named populations

4. Via web console management use sample data provided to seed 'chords' collection

5. Make sure mongodb can accept remote connections. http://www.mkyong.com/mongodb/mongodb-allow-remote-access/
   If it is just for local dev use just comment out bind_ip AT YOUR OWN RISK

```bash
$ vim /etc/mongod.conf

# /etc/mongod.conf

# Listen to local, LAN and Public interfaces.
bind_ip = 127.0.0.1,your.mongoserver.lan.ip.address

/etc/init.d/mongodb restart
```

## Project Setup and Running Server
#### 1. Initial Setup
```bash
git clone https://github.com/yosiasz/d3-chords.git
cd d3-chords/
npm install -g nodemon
npm install
```

#### 2. Running the server
This will use node to launch the server (this will also seed your mongoDB using chords.json):
```bash
npm start
```
Leave the server running, and now you can access [http://localhost:5000/](http://localhost:5000/).

#### 3. Chords extracted from 
https://www.ultimate-guitar.com/lessons/chords/all_guitar_chords.html
https://tabs.ultimate-guitar.com/m/misc/all_the_chords_crd.htm
http://jguitar.com/chordsearch?chordsearch=C
