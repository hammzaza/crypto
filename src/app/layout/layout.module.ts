import { ContractComponent } from '../contract/contract.component';
import { CrowdsaleContractComponent } from '../crowdsale-contract/crowdsale-contract.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { ListOfContractComponent } from '../list-of-contract/list-of-contract.component';
import { ProfileComponent } from '../profile/profile.component';
import { BuyTokensComponent } from '../buy-tokens/buy-tokens.component';
import { IndexComponent } from '../index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { layoutRoutes } from './layout.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(layoutRoutes),
  ],
  declarations: [
    ContractComponent,
    CrowdsaleContractComponent,
    HowItWorksComponent,
    ListOfContractComponent,
    ProfileComponent,
    BuyTokensComponent,
    IndexComponent
  ],
  exports: [
    ContractComponent,
    CrowdsaleContractComponent,
    HowItWorksComponent,
    ListOfContractComponent,
    ProfileComponent,
    BuyTokensComponent,
    IndexComponent
  ]
})
export class LayoutModule { }