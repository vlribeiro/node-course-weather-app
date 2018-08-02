# node-course-weather-app

Weather app written in *NodeJS* following the path of Andrew Mead's **The Complete Node.js Developer Course** course in Udemy

## Install

Install using ```npm install``` as usual

You must copy ```.env.example``` to a new ```.env``` file located at the project's root folder

Replace the keys to your own personal [Google Geocoding](https://developers.google.com/maps/documentation/geocoding/intro) and [Darksy](https://darksky.net/dev) private keys.

```
MAPS_KEY = "YOUR_KEY"
DARKSKY_KEY = "YOUR_KEY"
```

You're free to go.

## Usage

Use start script adding ```-a``` or ```--adress``` arguments followed by the location you'd like to check the weather

```
npm run start -- -a "Location to check for"
```
