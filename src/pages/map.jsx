import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";
// CSS
import './styles/pages.css'

const MapApp = () => {
  const { mapError, setMapError } = useState();

  useEffect(() => {
    // Load the required modules asynchronously
    try {
      loadModules([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Search",
        "esri/widgets/BasemapToggle",
        "esri/widgets/BasemapGallery",
      ]).then(
        ([
          esriConfig,
          Map,
          MapView,
          Graphic,
          GraphicsLayer,
          Search,
          BasemapToggle,
          BasemapGallery,
        ]) => {
          // TODO: remove API Key to a .env file
          esriConfig.apiKey =
            "AAPK13852bb4eba44307955e94b1cc66d636ALGgoLwxcscEtv_Uc5xGy_F5mhPpmqV_fWDAejSaIqg4D6gRQV2co_i7prRGF2Rw";

          const map = new Map({
            basemap: "arcgis-navigation",
          });

          // Create a graphics layer to display graphics on the map
          const graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          // Create the map view and attach it to the 'viewDiv' element
          const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [0, 8],
            zoom: 13,
          });

          // Create and add a search widget to the map view
          const search = new Search({
            view: view,
          });
          view.ui.add(search, "top-left");

          // Create and add a basemap toggle widget to the map view
          const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "arcgis-imagery",
          });
          view.ui.add(basemapToggle, "top-right");

          // Create and add a basemap gallery widget to the map view
          const basemapGallery = new BasemapGallery({
            view: view,
            source: {
              query: {
                title: '"World Basemaps for Developers" AND owner:esri',
              },
            },
          });
          view.ui.add(basemapGallery, "bottom-right");

          // Create a point graphic
          const point = {
            type: "point",
            longitude: 0,
            latitude: 8,
          };

          const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],
            outline: {
              color: [255, 255, 255],
              width: 3,
            },
          };

          const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
          });
          graphicsLayer.add(pointGraphic);
        }
      );
    } catch (error) {
      setMapError(true);
      console.log("Error loading map");
    }
  }); // Empty dependency array to run the effect only once on mount

  return (
    <div id="viewDiv">
      <p style={{ display: "none" }}>MAP APP</p>
      {mapError && (
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
          Error Loading Map
        </h1>
      )}
    </div>
  );
};

export default MapApp;
