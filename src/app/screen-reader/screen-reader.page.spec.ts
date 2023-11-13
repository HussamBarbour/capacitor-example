import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenReaderPage } from './screen-reader.page';

describe('ScreenReaderPage', () => {
  let component: ScreenReaderPage;
  let fixture: ComponentFixture<ScreenReaderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScreenReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
