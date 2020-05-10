import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  results: any[] = [
    {
      "name": "GTA IV",
      "value": 50
    },
    {
      "name": "Risk",
      "value": 36
    },
    {
      "name": "Pro Cycling Manager",
      "value": 18
    },
    {
      "name": "Spyro",
      "value": 62
    }
  ];

  //view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() { }

  onSelect(event) {
    console.log(event);
  }

}
