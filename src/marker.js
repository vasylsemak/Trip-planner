import { Marker } from "mapbox-gl";


const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};


const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = "activities";
  }
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "37px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerDomEl).setLngLat(coords)
};

export default buildMarker;
