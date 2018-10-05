import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTeamDetailComponent } from './support-team-detail.component';

describe('SupportTeamDetailComponent', () => {
  let component: SupportTeamDetailComponent;
  let fixture: ComponentFixture<SupportTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
