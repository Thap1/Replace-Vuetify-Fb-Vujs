import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public loggerIn = false;
  constructor() { }
  toggleDisplay() {
    this.loggerIn = !this.loggerIn;
    console.log(this.loggerIn);
  }
  ngOnInit() {
  }


}
