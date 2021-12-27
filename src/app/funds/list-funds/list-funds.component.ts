import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FundsService } from 'src/app/services/funds.service';


@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.css']
})
export class ListFundsComponent implements OnInit {

  listFunds: any;
  constructor(private fundsService: FundsService) { }

  ngOnInit(): void {
    this.fundsService.listFunds().subscribe(data =>{
      this.listFunds = data
    });

  }

}
