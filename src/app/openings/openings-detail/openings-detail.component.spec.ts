import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsDetailComponent } from './openings-detail.component';

describe('OpeningsDetailComponent', () => {
  let component: OpeningsDetailComponent;
  let fixture: ComponentFixture<OpeningsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
