import mapboxgl from "mapbox-gl";
import buildMarker from "./marker.js";
mapboxgl.accessToken = "pk.eyJ1IjoidmFzeWxzbWsiLCJhIjoiY2s5c3FlMzBtMTZjODNmcDhkanNiZWR6dSJ9.a64Za3hXfRE_gBqH9VKLgQ";

const fullStackNY = [-74.009, 40.705];

const map = new mapboxgl.Map({
  container: "map",
  center: [-73.900, 40.695], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("activities", fullStackNY).addTo(map);
