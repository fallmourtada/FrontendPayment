import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from './paymentService/payment.service';
import { PaymentDTO } from './model/payment.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  public studentCode!:string;
  
  public payments!:PaymentDTO[];

  public dataSource!: MatTableDataSource<PaymentDTO>;
  public displayedColumns:string[]=['id','date','amount','status','type'];

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private paymentService:PaymentService,private router:Router){}
  ngOnInit(): void {
    this.getListPayment();
    
  }

  getListPayment() {
    this.paymentService.getListPayment().subscribe({
      next: (data) => {
        console.log("Données reçues:", data);  // Vérifiez ici que c'est un tableau
  
        // Vous avez déjà confirmé que `data` est un tableau
        this.payments = data;
  
        // Initialiser MatTableDataSource
        this.dataSource = new MatTableDataSource<PaymentDTO>(this.payments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des étudiants", err);
      }
    });
  }

  payment(){
    this.router.navigateByUrl(`/navbar/new-payment/${this.studentCode}`);

  }
}  


