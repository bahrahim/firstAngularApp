import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFaceComponent } from './show-face.component';

describe('ShowFaceComponent', () => {
  let component: ShowFaceComponent;
  let fixture: ComponentFixture<ShowFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
