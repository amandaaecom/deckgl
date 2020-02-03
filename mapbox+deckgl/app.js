



const BUILDINGS =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/buildings.json';
const deckgl = new deck.DeckGL({
  container: 'container',
  // Set your Mapbox access token here
  mapboxApiAccessToken: 'pk.eyJ1IjoiYW1hbmRhbWpsZWUiLCJhIjoiY2s0eG5reTE3MDJ0ajNkcWo2MDY0ZGh4aSJ9.S8mhVKcqgTs7iitnYA41WA',
  mapStyle: 'mapbox://styles/amandamjlee/ck4xnj9o444kb1dmdwwb2hekm',

  //   ambientLight : new AmbientLight({
  //   color: [255, 255, 255],
  //   intensity: 1.0
  //   }),

  //   pointLight : new PointLight({
  //   color: [255, 255, 255],
  //   intensity: 2.0,
  //   position: [-74.05, 40.7, 8000]
  // }),


  // lightingEffect : new LightingEffect({ambientLight, pointLight}),

  // material : {
  //   ambient: 0.1,
  //   diffuse: 0.6,
  //   shininess: 32,
  //   specularColor: [60, 64, 70]
  // },

  // DEFAULT_THEME : {
  //   buildingColor: [74, 80, 87],

  
  // },
  
  initialViewState: {
  
  longitude: -74,
  latitude: 40.72,
  zoom: 13,
  pitch: 45,
  bearing: 0
  },

  controller: true,
  layers: [
    new deck.PolygonLayer({
      id: 'buildings',
      data: BUILDINGS,
      // Styles
     
      extruded: true,
      wireframe: false,
      pickable: true,
      filled: true,
      opacity: 1,
      // material,
      // effects: [lightingEffect],
    
      getPolygon: f => f.polygon,
      getElevation: f => f.height,
      // getFillColor: f =>[255,f.height,20]
      // getFillColor: f => f.height<100

    }),
   
 
  ]
  
});


