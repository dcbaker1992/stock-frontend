import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {


  addFundForm: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder, private fundsService: FundsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addFundForm = this.formBuilder.group({
      'company': new FormControl(''),
      'open': new FormControl(''),
      'volume': new FormControl(''),
      'todaysRange': new FormControl(''),
      'yearlyRange': new FormControl(''),
      'marketCap': new FormControl(''),
      'sector': new FormControl(''),
      'industry': new FormControl(''),
      'headquarters': new FormControl(''),
    })
  }

  createFund(){
    this.fundsService.createFund(this.addFundForm.value).subscribe(data=>{
      this._snackBar.open("Company Stock Created Successfully")
    }, err =>{
      this._snackBar.open("Unable to Create Comapny Stock")
    })
  }

}
