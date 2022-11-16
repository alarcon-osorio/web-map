import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan2',
  templateUrl: './plan2.component.html',
  styles: [
    `
      .center-div {
        display: flex;
        justify-content: center;
      }

      .text-align {
        text-align: center;
      }

      .contenedor{
				width:50%;
			}
			.semaforo1,.semaforo2{
				width:70px;
				border:solid 1px black;
				padding:2%;
				background-color:#21252E;
				border-radius:5px;
        margin-left: 55px;
			}

      .semaforo-peat{
				width:70px;
				border:solid 1px black;
				padding:2%;
				background-color:#21252E;
				border-radius:5px;
        margin-left: 55px;
			}

			.focos{
				width:80%;
			}
			.foco{
				width:50px;
				height:50px;
				border-radius:50%;
				border:solid 1px white;
			}
			.rojo{
				background-color:red;
			}
			.amarillo{
				background-color:yellow;
			}
			.verde{
				background-color:green;
			}
			.gris{
				background-color:#272727;
			}
			.contador{
				width:50px;
				height:50px;
				border:solid 5px black;
				border-radius:5px;
				text-align:center;
				padding-top:2%;
				box-sizing:border-box;
				background-color:#2346A6;
				color:white;
			}
			.encender,.apagar{
				width:100px;
				background-color:green;
				color:white;
				text-align:center;
				cursor:pointer;
				border-radius:5px;
			}
			.apagar{
				background-color:red;
			}
			.alinear-horizontal{
				vertical-align:top;
				display:inline-block;
			}
			.centrar-div{
				margin:4px auto;
			}

    `,
  ],
})
export class Plan2Component2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
