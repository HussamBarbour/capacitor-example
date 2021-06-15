import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { ScreenReader,SpeakOptions,ScreenReaderState } from '@capacitor/screen-reader';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
})
export class AccessibilityPage implements OnInit {

  status: boolean;
  console:string;
  speak_options : SpeakOptions = {
    value : 'Hello World!',
    language : 'en'
  }
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isVoiceOverEnabled();
  }
  async isVoiceOverEnabled() {
    if (this.platform.is('capacitor')){
        const { value } = await ScreenReader.isEnabled();
        this.status = value;
    } else {
      alert('Feature not available in your platform')
    }
  }
  async speak() {


    await ScreenReader.speak(this.speak_options);
  }
  setSpeakValue(value: string){
    this.speak_options.value = value;
  }
}
