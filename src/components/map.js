import React from "react"
import PropTypes from "prop-types"

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends React.Component {
  constructor(props) {
    super()
    this.state = {
      // Position for Uppsala city center-ish
      lat: 59.858266,
      lng: 17.638184,
      zoom: 14,
    }
  }

  getCompanyMarkers = () => {
    console.log(typeof this.props.companies)
    // Fallback if no companies are loaded
    if (!this.props.companies) return <Marker position={[this.state.lat, this.state.lng]} />;

    return this.props.companies.map((company) => {
        if (Boolean(company.lat) && Boolean(company.lng)) {
          const anchorLink = company.name.replace(/\s/g, '');
          return (
            <Marker position={[company.lat, company.lng]}>
              <Popup>
                <a href={`#${anchorLink}`}>
                  {company.name}
                </a>
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
