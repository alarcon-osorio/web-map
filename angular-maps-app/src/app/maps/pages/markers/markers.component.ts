import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerColor {
  color?: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
  center1?: [number, number];
  center2?: [number, number];
  center3?: [number, number];
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styles: [
    `
      .map-container {
        height: 100%;
        width: 100%;
      }
        
      .mapboxgl-popup {
        max-width: 200px;
      }

      .row {
        width: 400px;
        background-color: white;
        bottom: 25px;
        left: 25px;
        padding: 20px;
        border-radius: 5px;
        position: fixed;
        z-index: 999;
      }

      .list-group {
        position: fixed;
        right: 10px;
        top: 20px;
        z-index: 9999;
      }

      .list-group-item {
        cursor: pointer;
      }
    `,
  ],
})

export class MarkersComponent implements AfterViewInit{
  map!: mapboxgl.Map;
  zoomLevel: number = 12;
  intersect: string[] = ['Cll 34 - Cra 28', 'Cra 13 - Cll 41', 'Cra 80 - Dg 43 Sur'];
  center: [number, number] = [-74.1091626, 4.6289893];
  center1: [number, number] = [-74.0764423, 4.6243126];
  center2: [number, number] = [-74.0669739, 4.628984]; 
  center3: [number, number] = [-74.1660952, 4.621035];

  markerArr: MarkerColor[] = [
    
  ];

  @ViewChild('map') mapDiv!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {

  this.map = new mapboxgl.Map({
    container: this.mapDiv.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel,
  });

  // create the popup
  const popup1 = '<center><img style="width: 180px; height:150px" src="./assets/images/inter1.png"></center> <br><a href="maps/intersection1">Cll 34 - Cra 28 <br> Intersección 1 - Teusaquillo </a><br>Semaforos Vehiculares: 3<br>Semaforos Peatonales: 1<br>Estado: <strong style="color:green">OK</strong>';

  const popup2 ='<center><img style="width: 160px;" src="./assets/images/inter2.png"></center> <br><a href="maps/intersection2">Cra 13 - Cll 41 <br> Intersección 2 - Chapinero </a><br>Semaforos Vehiculares: 2<br>Semaforos Peatonales: 2<br>Estado: <strong style="color:green">OK</strong>'
  
  const popup3 = '<center><img style="width: 200px;" src="./assets/images/inter3.png"></center> <br><a href="maps/intersection3">Cra 80 - Dg 43 Sur <br> Intersección 3 - Kenedy </a><br>Semaforos Vehiculares: 5<br>Semaforos Peatonales: 0<br>Estado: <strong style="color:green">OK</strong>'

  // create DOM element for the marker
  const el = document.createElement('div');
  el.id = 'marker'; 
 
    this.map.on('zoom', () => (
      this.zoomLevel = this.map.getZoom()));

    this.map.on('zoomend', () => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    //Movimiento del mapa
    this.map.on('move', (e) => {
      const targe = e.target;
      const { lng, lat } = targe.getCenter();

      this.center = [lng, lat];
    });


    //Intersect 1
    this.map.on('load', () => {
      // Load an image from an external URL.
      this.map.loadImage(
        'https://cdn-icons-png.flaticon.com/512/3267/3267470.png',
        (error, image) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map.addImage('semaphore1', image!);

          // Add a data source containing one point feature.
          this.map.addSource('point', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'properties': {
                    'description':
                    '',
                    'icon': 'semaphore1'
                    },
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [this.center1[0], this.center1[1]]
                  }
                }
              ]
            }
          });

          // Add a layer to use the image to represent the data.
          this.map.addLayer({
            'id': 'points1',
            'type': 'symbol',
            'source': 'point', // reference the data source
            'layout': {
              'icon-image': 'semaphore1', // reference the image
              'icon-size': 0.08
            }
          });
        }
      );
    });


    this.map.on('load', () => {
      this.map.addSource('place1',  {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '',
                'icon': 'semaphore1'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [this.center1[0], this.center1[1]]
              }
            }
          ]
        }
      });

      this.map.addLayer({
        'id': 'places1',
        'type': 'symbol',
        'source': 'place1',
        'layout': {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
          'icon-size': 0.08
        }
      });

      this.map.on('click', 'places1', (e) => {
        
      new mapboxgl.Popup()
          .setLngLat(this.center1)
          .setHTML(popup1)
          .addTo(this.map);
      });

      this.map.on('mouseenter', 'places1', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      this.map.on('mouseleave', 'places1', () => {
        this.map.getCanvas().style.cursor = '';
      });
    });


    //Intersect 2
    this.map.on('load', () => {
      // Load an image from an external URL.
      this.map.loadImage(
        'https://cdn-icons-png.flaticon.com/512/3267/3267470.png',
        (error, image2) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map.addImage('semaphore2', image2!);

          // Add a data source containing one point feature.
          this.map.addSource('point2', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'properties': {
                    'description':
                    '',
                    'icon': 'semaphore2'
                    },
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [this.center2[0], this.center2[1]]
                  }
                }
              ]
            }
          });

          // Add a layer to use the image to represent the data.
          this.map.addLayer({
            'id': 'points2',
            'type': 'symbol',
            'source': 'point2', // reference the data source
            'layout': {
              'icon-image': '{icon}', // reference the image
              'icon-size': 0.08
            }
          });
        }
      );
    });


    this.map.on('load', () => {
      this.map.addSource('place2',  {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '',
                'icon': 'semaphore2'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [this.center2[0], this.center2[1]]
              }
            }
          ]
        }
      });

      this.map.addLayer({
        'id': 'places2',
        'type': 'symbol',
        'source': 'place2',
        'layout': {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
          'icon-size': 0.08
        }
      });

      this.map.on('click', 'places2', (e) => {
        
      new mapboxgl.Popup()
          .setLngLat(this.center2)
          .setHTML(popup2)
          .addTo(this.map);
      });

      this.map.on('mouseenter', 'places2', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      this.map.on('mouseleave', 'places2', () => {
        this.map.getCanvas().style.cursor = '';
      });
    });


    //Intersect 3
    this.map.on('load', () => {
      // Load an image from an external URL.
      this.map.loadImage(
        'https://cdn-icons-png.flaticon.com/512/3267/3267470.png',
        (error, image) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map.addImage('semaphore3', image!);

          // Add a data source containing one point feature.
          this.map.addSource('point3', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'properties': {
                    'description':
                    '',
                    'icon': 'semaphore3'
                    },
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [this.center3[0], this.center3[1]]
                  }
                }
              ]
            }
          });

          // Add a layer to use the image to represent the data.
          this.map.addLayer({
            'id': 'points3',
            'type': 'symbol',
            'source': 'point3', // reference the data source
            'layout': {
              'icon-image': '{icon}', // reference the image
              'icon-size': 0.08
            }
          });
        }
      );
    });


    this.map.on('load', () => {
      this.map.addSource('place3',  {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '',
                'icon': 'semaphore3'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [this.center3[0], this.center3[1]]
              }
            }
          ]
        }
      });

      this.map.addLayer({
        'id': 'places3',
        'type': 'symbol',
        'source': 'place3',
        'layout': {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
          'icon-size': 0.08
        }
      });

      this.map.on('click', 'places3', (e) => {
        
      new mapboxgl.Popup()
          .setLngLat(this.center3)
          .setHTML(popup3)
          .addTo(this.map);
      });

      this.map.on('mouseenter', 'places3', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      this.map.on('mouseleave', 'places3', () => {
        this.map.getCanvas().style.cursor = '';
      });
    });

    const color = 'rgb(98 136 150 / 85%)';

    /*
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    */

    //Intersect 1
    const newMarker1 = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center1)
      

    this.markerArr.push({ color, marker: newMarker1 });
    this.saveInStorage();

    newMarker1.on('dragend', () => {
      this.saveInStorage();
    });


    //Intersect 2
    const newMarker2 = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center2)

    this.markerArr.push({ color, marker: newMarker2 });
    this.saveInStorage();

    newMarker2.on('dragend', () => {
      this.saveInStorage();
    });

    //Intersect 3
    const newMarker3 = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center3)

    this.markerArr.push({ color, marker: newMarker3 });
    this.saveInStorage();

    newMarker3.on('dragend', () => {
      this.saveInStorage();
    });
    

  }

  moveMarker({ marker }: MarkerColor) {
    this.map.flyTo({
      center: marker!.getLngLat(),
    });
  }

  saveInStorage() {
    const markerStorage: MarkerColor[] = this.markerArr.map((marker) => {
      const { lng, lat } = marker.marker!.getLngLat();

      return {
        color: marker.color,
        center: [lng, lat],
      };
    });

    localStorage.setItem('markers', JSON.stringify(markerStorage));
  }

  removeMarker(i: number) {
    this.markerArr[i].marker?.remove();
    this.markerArr.splice(i, 1);
    this.saveInStorage();
  }

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomOut() {
    this.map.zoomOut();
  }

  handleZoomRange(zoom: string) {
    this.map.zoomTo(Number(zoom));
  }


}
