import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform,NavController } from '@ionic/angular';

const { Accessibility, Modals } = Plugins;
import { ScreenReader } from '@capacitor/screen-reader';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
})
export class AccessibilityPage implements OnInit {

  status: boolean;
  console:string;
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isVoiceOverEnabled();
  }
  async isVoiceOverEnabled() {
    if (this.platform.is('capacitor')){
        const { value } = await ScreenReader.isEnabled();
        alert('Voice over enabled? ' + value);
    } else {
      alert('Feature not available in your platform')
    }
  }
  async speak() {


    await ScreenReader.speak({ value: 'lulu ' });
  }
}
