import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTeamComponent } from './production-team.component';

describe('ProductionTeamComponent', () => {
  let component: ProductionTeamComponent;
  let fixture: ComponentFixture<ProductionTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
