import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTeamListComponent } from './support-team-list.component';

describe('SupportTeamListComponent', () => {
  let component: SupportTeamListComponent;
  let fixture: ComponentFixture<SupportTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
