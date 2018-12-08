import { Component, OnInit } from '@angular/core';
import { Contracts } from '../schemas/contracts';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crowdsale-contract',
  templateUrl: './crowdsale-contract.component.html',
  styleUrls: ['./crowdsale-contract.component.css']
})
export class CrowdsaleContractComponent implements OnInit {
  contracts = new Contracts();
  constructor(private authService:AuthenticationService,private router:Router) { }
  ngOnInit() {
  }
  postData(){
    console.log(this.contracts);
    this.authService.postContracts(this.contracts)
      .subscribe(res => {
        this.router.navigateByUrl('/home/contract');
      }, (err) => {
        if(err) console.log(err);
        
      });
  }
}