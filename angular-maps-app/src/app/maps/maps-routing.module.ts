import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { Intersection1Component } from './pages/intersections/intersection1/intersection1.component';

import { Plan1Component } from './pages/intersections/intersection1/plan1/plan1.component';
import { Plan2Component } from './pages/intersections/intersection1/plan2/plan2.component';
import { Plan3Component } from './pages/intersections/intersection1/plan3/plan3.component';

import { Plan1Component2 } from './pages/intersections/intersection2/plan1/plan1.component';
import { Plan2Component2 } from './pages/intersections/intersection2/plan2/plan2.component';
import { Plan3Component2 } from './pages/intersections/intersection2/plan3/plan3.component';

import { Plan1Component3 } from './pages/intersections/intersection3/plan1/plan1.component';
import { Plan2Component3 } from './pages/intersections/intersection3/plan2/plan2.component';
import { Plan3Component3 } from './pages/intersections/intersection3/plan3/plan3.component';

import { Intersection2Component } from './pages/intersections/intersection2/intersection2.component';
import { Intersection3Component } from './pages/intersections/intersection3/intersection3.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: FullScreenComponent,
      },
      {
        path: 'markers',
        component: MarkersComponent,
      },
      {
        path: 'properties',
        component: PropertiesComponent,
      },
      {
        path: 'zoom-range',
        component: ZoomRangeComponent,
      },
      {
        path: 'intersection1',
        component: Intersection1Component,
      },
      {
        path: 'intersection1/plan1',
        component: Plan1Component,
      },
      {
        path: 'intersection1/plan2',
        component: Plan2Component,
      },
      {
        path: 'intersection1/plan3',
        component: Plan3Component,
      },
      {
        path: 'intersection2',
        component: Intersection2Component,
      },
      {
        path: 'intersection2/plan1',
        component: Plan1Component2,
      },
      {
        path: 'intersection2/plan2',
        component: Plan2Component2,
      },
      {
        path: 'intersection2/plan3',
        component: Plan3Component2,
      },
      {
        path: 'intersection3',
        component: Intersection3Component,
      },
      {
        path: 'intersection3/plan1',
        component: Plan1Component3,
      },
      {
        path: 'intersection3/plan2',
        component: Plan2Component3,
      },
      {
        path: 'intersection3/plan3',
        component: Plan3Component3,
      },
      {
        path: '**',
        redirectTo: 'markers',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
