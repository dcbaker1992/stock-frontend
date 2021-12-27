import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFundsComponent } from './list-funds/list-funds.component';
import { ViewFundsComponent } from './view-funds/view-funds.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { EditFundsComponent } from './edit-funds/edit-funds.component';
import { DeleteFundsComponent } from './delete-funds/delete-funds.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ListFundsComponent,
    ViewFundsComponent,
    AddFundsComponent,
    EditFundsComponent,
    DeleteFundsComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class FundsModule { }
