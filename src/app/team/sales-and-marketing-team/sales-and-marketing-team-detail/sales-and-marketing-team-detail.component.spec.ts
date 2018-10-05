import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndMarketingTeamDetailComponent } from './sales-and-marketing-team-detail.component';

describe('SalesAndMarketingTeamDetailComponent', () => {
  let component: SalesAndMarketingTeamDetailComponent;
  let fixture: ComponentFixture<SalesAndMarketingTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAndMarketingTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAndMarketingTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
