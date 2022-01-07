import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor() { }
  progress : boolean= false;

  ngOnInit(): void {
  }
  
  refreshall(){
    this.progress = true;
    setTimeout(() => {
      this.progress = false;

    }, 3000);

  }

}
