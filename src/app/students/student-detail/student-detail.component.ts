import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDTO } from 'src/app/payments/model/payment.model';
import { PaymentService } from 'src/app/payments/paymentService/payment.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit{
  studentCode!:string;
  payments!:PaymentDTO[];
  paymentDatasource!:MatTableDataSource<PaymentDTO>;

  displayedColumns:string[]=['id','date','amount','status','type','firstName','details'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private paymentService:PaymentService,
              private activatedRoute:ActivatedRoute,
              private router:Router
  ){}
  ngOnInit(): void {
    this.studentCode=this.activatedRoute.snapshot.params['code'];
    this.paymentService.getStudentPayment(this.studentCode).subscribe({
      next:(data)=>{
        this.payments=data;
        this.paymentDatasource=new MatTableDataSource<PaymentDTO>(this.payments);
        this.paymentDatasource.paginator=this.paginator;
        this.paymentDatasource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }
    })

    //this.newPayment();

    
    
  }

  newPayment(){
    this.router.navigate(['/navbar/new-payment', this.studentCode]);
  }

  paymentDetails(payment:PaymentDTO){
    this.router.navigateByUrl(`/navbar/details-payment/${payment.id}`);
  }
}
