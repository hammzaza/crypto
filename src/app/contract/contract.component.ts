import { Component, OnInit } from '@angular/core';
import {Contracts} from '../schemas/contracts';
import{AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  con: Array<Contracts> = [];
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(){
    this.auth.getContracts()
      .subscribe(res => {
        this.con = res;
      }, err => {
        console.log(err);
      });
  }
}