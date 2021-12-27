import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFundsComponent } from './funds/add-funds/add-funds.component';
import { DeleteFundsComponent } from './funds/delete-funds/delete-funds.component';
import { EditFundsComponent } from './funds/edit-funds/edit-funds.component';
import { ListFundsComponent } from './funds/list-funds/list-funds.component';
import { ViewFundsComponent } from './funds/view-funds/view-funds.component';

const routes: Routes = [
  {path: 'create', component: AddFundsComponent},
  {path: 'list',
    children:[
      {path: '', component: ListFundsComponent},
      {path: 'view/:id', component: ViewFundsComponent},
      {path: 'delete/:id', component: DeleteFundsComponent},
      {path: 'edit/:id', component: EditFundsComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
