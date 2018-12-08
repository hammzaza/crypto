import { ListOfContractModule } from '../list-of-contract/list-of-contract.module';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import {CrowdsaleContractComponent} from '../crowdsale-contract/crowdsale-contract.component';
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
    ListOfContractModule,
    RouterModule.forChild(layoutRoutes),
  ],
  declarations: [
    HowItWorksComponent,
    CrowdsaleContractComponent,
    ProfileComponent,
    BuyTokensComponent,
    IndexComponent
  ],
  exports: [
    HowItWorksComponent,
    CrowdsaleContractComponent,
    ProfileComponent,
    BuyTokensComponent,
    IndexComponent
  ]
})
export class LayoutModule { }