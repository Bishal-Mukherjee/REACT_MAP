import React, { Fragment } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Sphere,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { coordinates } from "../resources/coordinates";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Index = () => {
  return (
    <div>
      <ComposableMap height={500} width={1100}>
        <ZoomableGroup zoom={1}>
          <Sphere stroke="#FF5533" strokeWidth={1} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {coordinates.map((coordinate) => {
            const {
              fromLatitute,
              fromLongitude,
              toLatitude,
              toLongitude,
              locName,
            } = coordinate;
            return (
              <Fragment>
                <Line
                  from={[fromLongitude, fromLatitute]}
                  to={[toLongitude, toLatitude]}
                  stroke="#FF5533"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <Marker coordinates={[fromLongitude, fromLatitute]}>
                  <circle r={8} fill="#F53" />
                  <text textAnchor="middle" fill="#527a7a">
                    {locName}
                  </text>
                </Marker>
              </Fragment>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Index;
