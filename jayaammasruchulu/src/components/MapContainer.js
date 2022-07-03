import React,{Component} from 'react'
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react';

const mapStyles = {
    width:'95%',
    height:'400px'
};

const mapStyle = [
  {
    "featureType": "all",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": "2.00"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#9c9c9c"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f2f2f2"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7b7b7b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#46bcec"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c2d6e9"
      },
      {
        "saturation": "0"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#070707"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  }
]

export class MapContainer extends Component {
    _mapLoaded(mapProps,map) {
    map.setOptions({
        styles:mapStyle
    })
}
    render(){
          return (
    <Map         google={this.props.google}
        zoom={14}
        style={mapStyles}
        onReady={(mapProps,map)=>this._mapLoaded(mapProps,map)}
  >
    <Marker title={'The marker`s title will appear as a tooltop'}
    name={'SOMA'}
    position={{lat:37.778519,lng:-122.405640}} 
        zoom={18}
        draggable={true}
    />
    </Map>

              
        
  
  );
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyDZ6QN6c2Vd7zii2jgl-WgkBaILgMji3iU'
})(MapContainer);
