import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/students/studentService/student.service';
import { PaymentService } from '../paymentService/payment.service';

@Component({
  selector: 'app-details-payment',
  templateUrl: './details-payment.component.html',
  styleUrls: ['./details-payment.component.css']
})
export class DetailsPaymentComponent implements OnInit{
  paymentId!:number;
  pdfFileUrl!:string;

  constructor(private activatedRoute:ActivatedRoute,
    private studentService:StudentService,
    private paymentService:PaymentService
  ){}

  ngOnInit(): void {
    this.paymentId=this.activatedRoute.snapshot.params['id'];
    this.paymentService.getDetailsPayment(this.paymentId).subscribe({
      next:(data)=>{
        let blob:Blob=new Blob([data], {type:'application/pdf'});
        this.pdfFileUrl=window.URL.createObjectURL(blob);

      },error:(err)=>{
        console.log(err);
      }
    });
    
  }

  afterLoadComplete(event:any){
    console.log(event);
  }

}
