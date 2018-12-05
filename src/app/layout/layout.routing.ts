import { ContractComponent } from '../contract/contract.component';
import { CrowdsaleContractComponent } from '../crowdsale-contract/crowdsale-contract.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { ListOfContractComponent } from '../list-of-contract/list-of-contract.component';
import { ProfileComponent } from '../profile/profile.component';
import { BuyTokensComponent } from '../buy-tokens/buy-tokens.component';
import { IndexComponent } from '../index/index.component';
import {Routes} from '@angular/router';
export const layoutRoutes : Routes = [
  { path: '', component: IndexComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'buy-tokens', component: BuyTokensComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'crowd-sale', component: CrowdsaleContractComponent },
  { path: 'help', component: HowItWorksComponent },
  { path: 'contract-list', component: ListOfContractComponent }
]