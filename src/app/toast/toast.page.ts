import { Component, OnInit } from '@angular/core';
import { Toast,ShowOptions } from '@capacitor/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  options:ShowOptions = {
    text: 'Hello!',
    duration: 'short',
    position:  'bottom',
  };
  constructor() { }

  ngOnInit() {
  }

  async show(){
    await Toast.show(this.options);
  }
}
