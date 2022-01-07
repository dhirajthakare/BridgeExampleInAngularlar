import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css']
})
export class VelocityWidgetComponent implements OnInit {

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
