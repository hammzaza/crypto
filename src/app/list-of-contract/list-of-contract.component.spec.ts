import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContractComponent } from './list-of-contract.component';

describe('ListOfContractComponent', () => {
  let component: ListOfContractComponent;
  let fixture: ComponentFixture<ListOfContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
