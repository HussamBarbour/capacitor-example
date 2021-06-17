import { Component, OnInit } from '@angular/core';
import { App,AppInfo } from '@capacitor/app';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {
  info : AppInfo;
  constructor() { }

  ngOnInit() {
    this.getAppInfo();

  }



  async getAppInfo(){
    this.info = await App.getInfo();
  }
  exitApp(){
    App.exitApp();
  }
}
