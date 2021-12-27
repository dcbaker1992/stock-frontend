import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-view-funds',
  templateUrl: './view-funds.component.html',
  styleUrls: ['./view-funds.component.css']
})
export class ViewFundsComponent implements OnInit {


  fundId: string = '';
  fundDetails: any
  constructor(private fundsService: FundsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=> {
      this.fundId = data['id']
    })

    this.fundsService.viewFunds(this.fundId).subscribe(data =>{
      this.fundDetails = data
    })
  }

}
