import { Component, OnInit,ContentChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { VelocityWidgetComponent } from '../velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css']
})
export class WidgetWrapperComponent implements OnInit {

  constructor( private loadibar : LoadingBarService) { }
  @ContentChild(WeatherWidgetComponent)
  wether: WeatherWidgetComponent | undefined;

  @ContentChild(VelocityWidgetComponent)
  velocity: VelocityWidgetComponent | undefined;
  progress1 : boolean= false;
  

  ngOnInit(): void {
  }
  onrefresh(){
if(this.wether){
  this.wether.refreshall();
}
if(this.velocity){
  this.velocity.refreshall();
}
  }

}
