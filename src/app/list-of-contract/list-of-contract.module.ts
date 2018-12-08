import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ListOfContractComponent} from './list-of-contract.component';
import { ContractComponent} from './contract/contract.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        ListOfContractComponent,
        ContractComponent
    ],
    exports: [
        ListOfContractComponent
    ],
    providers: []
})
export class ListOfContractModule { }
