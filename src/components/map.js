import React from "react"
import PropTypes from "prop-types"

import { Map as LeafletMap, TileLayer, Marker, Popup  } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl: require("../assets/marker-glow.png"),
    popupAnchor: new L.Point(22, 0),
    shadowUrl: require("../assets/marker-shadow.png"),
    shadowSize: new L.Point(60, 60),
    iconAnchor: new L.Point(0, 0),
    iconSize: new L.Point(45, 60),
    shadowAnchor: new L.Point(0, 0),
});

class Map extends React.Component {
  constructor(props) {
    super()
    this.state = {
      // Position for Uppsala city center-ish
      lat: 59.858266,
      lng: 17.638184,
      zoom: 13,
    }
  }

  getCompanyMarkers = () => {
    // Fallback if no companies are loaded
    if (!this.props.companies) return <Marker position={[this.state.lat, this.state.lng]} />;

    return this.props.companies.map((company) => {
        if (Boolean(company.lat) && Boolean(company.lng)) {
          return (
            <Marker 
              icon={markerIcon}
              position={[company.lat, company.lng]}>
              <Popup>
                <p>
                  {company.name}
                </p>
              </Popup>
            </Marker>
            )
        }
        return null;
    })
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    if (typeof window !== 'undefined') {
      return (
        <div className="map-container">
          <LeafletMap center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.getCompanyMarkers()}
          </LeafletMap>
        </div>
      )
    }
    return null;
  }
}

Map.propTypes = {
  companies: PropTypes.object
};

export default Map
