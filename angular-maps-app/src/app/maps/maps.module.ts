import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './components/min-map/min-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { Intersection1Component } from './pages/intersections/intersection1/intersection1.component';
import { Intersection2Component } from './pages/intersections/intersection2/intersection2.component';
import { Intersection3Component } from './pages/intersections/intersection3/intersection3.component';
import { Plan1Component } from './pages/intersections/intersection1/plan1/plan1.component';
import { Plan2Component } from './pages/intersections/intersection1/plan2/plan2.component';
import { Plan3Component } from './pages/intersections/intersection1/plan3/plan3.component';


@NgModule({
  declarations: [
    MinMapComponent,
    FullScreenComponent,
    ZoomRangeComponent,
    MarkersComponent,
    PropertiesComponent,
    Intersection1Component,
    Intersection2Component,
    Intersection3Component,
    Plan1Component,
    Plan2Component,
    Plan3Component
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
