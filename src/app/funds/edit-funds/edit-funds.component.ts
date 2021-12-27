import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-edit-funds',
  templateUrl: './edit-funds.component.html',
  styleUrls: ['./edit-funds.component.css']
})
export class EditFundsComponent implements OnInit {

    fundId: any;
    fundDetails: any;
    editFundForm: FormGroup = new FormGroup({})
    dataLoaded: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private fundsService: FundsService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded = false
    this.activatedRoute.params.subscribe(data =>{
      this.fundId = data['id']
    });

    if(this.fundId !== ''){
      this.fundsService.viewFunds(this.fundId)
      .toPromise()
      .then(data => {
        this.fundDetails = data; 
        Object.assign(this.fundDetails, data);
        
        this.editFundForm = this.formBuilder.group({
          'company': new FormControl(this.fundDetails.company),
          'open': new FormControl(this.fundDetails.open),
          'volume': new FormControl(this.fundDetails.volume),
          'todaysRange': new FormControl(this.fundDetails.todaysRange),
          'yearlyRange': new FormControl(this.fundDetails.yearlyRange),
          'marketCap': new FormControl(this.fundDetails.marketCap),
          'sector': new FormControl(this.fundDetails.sector),
          'industry': new FormControl(this.fundDetails.industry),
          'headquarters': new FormControl(this.fundDetails.headquarters),
        })
        this.dataLoaded = true;
      })
      .catch(err =>{
        console.log(err)
      }) 
    }
  }

  updateFund(){
    console.log(this.editFundForm.value)
    this.fundsService.updateFund(this.fundId, this.editFundForm.value).subscribe(data =>{
      this._snackBar.open("Company Stock Updated Successfully")
      // this.router.navigateByUrl("/list")
    }, err =>{
      this._snackBar.open("Unable to Update Comapny Stock")
    })
  }
}
