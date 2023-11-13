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
  constructor(public platform: Platform) {
    App.addListener('appStateChange', ({ isActive }) => {
      alert('App state changed. Is active? ' + isActive);
    });

    App.addListener('pause', () => {
      alert('App paused');
    });
    App.addListener('pause', () => {
      alert('App resume');
    });

    App.addListener('appUrlOpen', data => {
      alert('App opened with URL: ' + data.url);
    });
    
    App.addListener('appRestoredResult', data => {
      alert('App opened with URL: ' + JSON.stringify(data));
    });

  }

  ngOnInit() {
    this.getAppInfo();
  }

  ionViewDidLeave(){
    App.removeAllListeners();
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
    App.exitApp().catch((error)=>{
      alert(error);
    });
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
    App.minimizeApp().catch((error)=>{
      alert(error);
    });;
  }
}
