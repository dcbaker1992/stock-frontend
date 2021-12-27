import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-delete-funds',
  templateUrl: './delete-funds.component.html',
  styleUrls: ['./delete-funds.component.css']
})
export class DeleteFundsComponent implements OnInit {

    fundId: string = '';
  constructor(private activatedRoute: ActivatedRoute, private fundsService: FundsService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.fundId = data['id']
    })

    if(this.fundId){
      this.fundsService.deleteFund(this.fundId).subscribe(data =>{
        this._snackBar.open("Fund Delete Successfully")
        this.router.navigateByUrl("/list")
      }, err => {
        this._snackBar.open("Unable to Delete")
      })
    }
  }

}
