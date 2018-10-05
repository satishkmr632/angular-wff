import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndMarketingTeamListComponent } from './sales-and-marketing-team-list.component';

describe('SalesAndMarketingTeamListComponent', () => {
  let component: SalesAndMarketingTeamListComponent;
  let fixture: ComponentFixture<SalesAndMarketingTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAndMarketingTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAndMarketingTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
