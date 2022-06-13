import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public records =[];
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.authService.getTransactions().subscribe((res) => {
      this.records=res;
      // show records on transaction page
    }, () => {
      console.log("error");
  });
}
}
