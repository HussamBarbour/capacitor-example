import { Component, OnInit } from '@angular/core';
import { ScreenReader, SpeakOptions } from '@capacitor/screen-reader';

@Component({
  selector: 'app-screen-reader',
  templateUrl: './screen-reader.page.html',
  styleUrls: ['./screen-reader.page.scss'],
})
export class ScreenReaderPage implements OnInit {
  status: boolean;
  speak_options: SpeakOptions = {
    value: 'Hello World!',
    language: 'en'
  }
  constructor() {
    ScreenReader.addListener('stateChange', ({ value }) => {
      alert(`Screen reader is now ${value ? 'on' : 'off'}`);
      this.isVoiceOverEnabled();
    });
  }

  ngOnInit() {
    this.isVoiceOverEnabled();
  }

  async isVoiceOverEnabled() {
    await ScreenReader.isEnabled().then(({ value }: { value: boolean; }) => {
      this.status = value;
    }).catch((error) => {
      alert(error);
    });
  }

  async speak() {
    if (this.status){
      await ScreenReader.speak(this.speak_options);
    } else {
      alert('This function work if a Screen Reader is active.');
    }
  }

  setSpeakValue(value: any) {
    this.speak_options.value = value.target.value;
  }
}
