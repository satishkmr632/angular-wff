import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTeamDetailComponent } from './production-team-detail.component';

describe('ProductionTeamDetailComponent', () => {
  let component: ProductionTeamDetailComponent;
  let fixture: ComponentFixture<ProductionTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
