# superspeed [![Build Status](https://travis-ci.org/Zertz/superspeed.svg?branch=master)](https://travis-ci.org/Zertz/superspeed) [![NPM version](https://badge.fury.io/js/superspeed.png)](http://badge.fury.io/js/superspeed)

> Calculate speed for a given time and distance


## Install

```
$ npm install --save superspeed
```


## Usage

```js
const superspeed = require('superspeed');

superspeed({
  time: 3600000,
  distance: 10000
});
//=> 5 (km/h)

superspeed({
  time: 3600000,
  distance: 5000,
  metric: false
});
//=> 3.1068559611866697 (mi/h)

superspeed({
  time: 3600000,
  distance: 5000,
  timeDivider: 1000,
  distanceDivider: 1
});
//=> 1.38 (m/s)
```

## API

### superspeed(options)

#### options

##### time

Type: `number`

Time in milliseconds

##### distance

Type: `number`

Distance in meters

#### timeDivider

Type: `number`

Default: `3600000` (1 hour)

Calculate speed in distance per this unit of time

#### distanceDivider

Type: `number`

Default: `1000` (1 km)

Calculate speed in this unit of distance per time

##### metric

Type: `boolean`

Default: `true`


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
