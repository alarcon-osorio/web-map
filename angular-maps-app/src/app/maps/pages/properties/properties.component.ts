import { Component, OnInit } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
  btn: string;
  url: string;
  semaphoreVehicle: number;
  semaphorePeat: number;
  status: string;
}

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
})

export class PropertiesComponent implements OnInit {
  propiedades: Propiedad[] = [
    {
      titulo: 'Cll 34 - Cra 28',
      descripcion: 'Intersección 1 - Teusaquillo',
      lngLat: [-74.0764423, 4.6243126],
      btn: "Ver grupo Semaforico",
      url: "maps/intersection1",
      semaphoreVehicle: 3,
      semaphorePeat: 1,
      status: 'OK'
    },
    {
      titulo: 'Cra 13 - Cll 41',
      descripcion: 'Intersección 2 - Chapinero',
      lngLat: [-74.0669739, 4.628984],
      btn: "Ver grupo Semaforico",
      url: "maps/intersection2",
      semaphoreVehicle: 2,
      semaphorePeat: 2,
      status: 'OK'
    },
    {
      titulo: 'Cra 80 - Dg 43 Sur',
      descripcion:'Intersección 3 - Kenedy',
      lngLat: [-74.1660952, 4.621035],
      btn: "Ver grupo Semaforico",
      url: "maps/intersection3",
      semaphoreVehicle: 5,
      semaphorePeat: 0,
      status: 'OK'
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
