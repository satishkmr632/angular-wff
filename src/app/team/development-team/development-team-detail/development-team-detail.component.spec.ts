import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentTeamDetailComponent } from './development-team-detail.component';

describe('DevelopmentTeamDetailComponent', () => {
  let component: DevelopmentTeamDetailComponent;
  let fixture: ComponentFixture<DevelopmentTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
