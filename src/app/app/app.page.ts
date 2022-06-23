import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App,AppInfo, AppState, AppLaunchUrl } from '@capacitor/app';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {
  info : AppInfo;
  constructor(public platform: Platform) { }

  ngOnInit() {
    this.getAppInfo();
  }

  async getAppInfo(){
    if (this.platform.is('hybrid')){
      this.info = await App.getInfo();
    }
  }

  getState(){
    App.getState().then((res: AppState)=>{
      alert(JSON.stringify(res));
    });
  }
  exitApp(){
    App.exitApp();
  }

  getLaunchUrl(){
    App.getLaunchUrl().then((res: AppLaunchUrl)=>{
      if (res){
        alert(res.url);
      } else {
        alert(JSON.stringify(res));
      }
    });
  }

  minimizeApp(){
    App.minimizeApp();
  }
}
