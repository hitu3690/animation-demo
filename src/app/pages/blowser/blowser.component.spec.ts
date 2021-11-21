import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlowserComponent } from './blowser.component';

describe('BlowserComponent', () => {
  let component: BlowserComponent;
  let fixture: ComponentFixture<BlowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
