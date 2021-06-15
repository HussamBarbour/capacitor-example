import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor() { }

  ngOnInit() {
    App.addListener('appStateChange', ({ isActive }) => {
      console.log('App state changed. Is active?', isActive);
    });
    this.test();

  }

  async test(){
    var ret = await App.getLaunchUrl();
    if(ret && ret.url) {
      console.log('App opened with URL: ' + ret.url);
    }
  }
}
