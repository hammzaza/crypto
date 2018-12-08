import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Contracts} from  '../schemas/contracts';
import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-of-contract',
  templateUrl: './list-of-contract.component.html',
  styleUrls: ['./list-of-contract.component.css']
})
export class ListOfContractComponent implements OnInit {

  contract = new Contracts();
  con: Array<Contracts> = [];
  check = true;
  constructor(private auth: AuthenticationService,private router:Router) { }
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
  displayContract(con){
    this.contract = con;
    this.check = !this.check;
  }
}
