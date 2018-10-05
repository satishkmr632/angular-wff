import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndMarketingTeamComponent } from './sales-and-marketing-team.component';

describe('SalesAndMarketingTeamComponent', () => {
  let component: SalesAndMarketingTeamComponent;
  let fixture: ComponentFixture<SalesAndMarketingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAndMarketingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAndMarketingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
