import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform,NavController } from '@ionic/angular';

const { Accessibility, Modals } = Plugins;

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
      const vo = await Accessibility.isScreenReaderEnabled();
      this.status = vo.value;
    } else {
      alert('Feature not available in your platform')
    }
  }
  async speak() {
    const value = await Modals.prompt({
      title: "Value to speak",
      message: "Enter the value to speak"
    });

    Accessibility.speak({value: value.value});
  }
}
