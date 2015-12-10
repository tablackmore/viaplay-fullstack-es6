## Viaplay fullstack assignment

I created this using react starter kit as a starting point. I was looking for an isomorphic/universal boilerplate and thought it looked quite good.
It has a good tool chain set up and a strategy for scss and file structuring. I choose this boilerlate as I understand you work with ecmascript 2015 and I wanted to demonstrate I can do that too.

I used airbnbs ecmascript2015 and react javascript style settings in my eslintrc file.

I tried out the ecmascript 7 async await functionality for collecting the data from the server. See src/data/filmInfo.js.

## Getting started


```shell
$ git clone https://github.com/tablackmore/viaplay-fullstack-es6.git
$ cd viaplay-fullstack-es6
$ npm install                   
$ npm test
$ npm start                     # Compile and launch
```

The browser will then open automatically. 
The start up page http://localhost:3000 should display viaplays standard 404 page. Renedered with react via this service.

To see some content navigate to http://localhost:3000/web-se/film/tusk-2104 or similar url. Replacing the film at the end with any film path from viapla site.

## Things to do

If I was going to continue with this I would probably split the content page down into a few more components. 

Add an integration test for retrieving data from the server and combining with react controls. At present only the ContentPage react controller is unit tested. 

The data collection file filmInfo.js could be restructured to be a little more generic and fit into the flux way of doing things.

When I read the line about what should happen to the video. It was unclear how this should be implemented. As I could not find any cross iframe method for triggering the trailer addict iframe to play. So I add the iFrame from the beginning. To prevent script injection I have hardcoded the iframe and the only dynamic part is the imdb id which is appended to the src. I realise if this is not what you intended and maybe seems like a simplification. But it is to do purely with how I communicatewith the iframe. If you can point me in the direction of how I can tell it to start playing in js. I will gladly implement the onclick handlers in react and switch out the image for the iFrame.


