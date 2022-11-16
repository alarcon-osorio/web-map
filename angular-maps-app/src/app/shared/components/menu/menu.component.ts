import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    /*
    {
      route: '/maps/fullscreen',
      name: 'Pantalla Completa',
    },
    
    {
      route: '/maps/zoom-range',
      name: 'Mapa General',
    },
    */
    {
      route: '/maps/markers',
      name: 'Ubicación Mapa',
    },
    {
      route: '/maps/properties',
      name: 'Intersecciones',
    },
  ];
}
