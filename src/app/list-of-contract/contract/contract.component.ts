import { Component, OnInit,Input } from '@angular/core';
import { Contracts } from '../../schemas/contracts';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  @Input() contract;
  constructor() {
  }
  ngOnInit() {
  }
}