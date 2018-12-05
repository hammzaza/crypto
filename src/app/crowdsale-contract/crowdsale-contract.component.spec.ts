import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsaleContractComponent } from './crowdsale-contract.component';

describe('CrowdsaleContractComponent', () => {
  let component: CrowdsaleContractComponent;
  let fixture: ComponentFixture<CrowdsaleContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdsaleContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsaleContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
