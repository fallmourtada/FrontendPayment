import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentType } from '../enum/paymentType.enum';
import { PaymentService } from '../paymentService/payment.service';

@Component({
  selector: 'app-new-payments',
  templateUrl: './new-payments.component.html',
  styleUrls: ['./new-payments.component.css']
})
export class NewPaymentsComponent {
  studentCode!:string;
  savePaymentForm!:FormGroup;
  paymentTypes:string[]=[];
  public pdfFileUrl!:string;
  showProgress:boolean=false;

  constructor(private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private paymentService:PaymentService
  ){}

  ngOnInit(): void {
    for(let elt in PaymentType){
      let value:string=PaymentType[elt];
      if(typeof value==='string'){
        this.paymentTypes.push(value);
      }
    }
    this.studentCode=this.activatedRoute.snapshot.params['studentCode'];
    this.savePaymentForm=this.fb.group({
      date:this.fb.control(''),
      amount:this.fb.control(''),
      type:this.fb.control(''),
      studentCode:this.fb.control(this.studentCode),
      fileSource:this.fb.control(''),
      fileName:this.fb.control('')
    })
    
  }

  selectFile(event:any){
    if(event.target.files.length>0){
      let file=event.target.files[0];
      this.savePaymentForm.patchValue({
        fileSource:file,
        fileName:file.name

      });
      this.pdfFileUrl=window.URL.createObjectURL(file);
    }

  }

  savePayment(){
    this.showProgress=true;
    let date:Date=new Date(this.savePaymentForm.value.date);
    let formatedDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let formData:FormData=new FormData();
    formData.set('date',formatedDate);
    formData.set('amount',this.savePaymentForm.value.amount);
    formData.set('type',this.savePaymentForm.value.type);
    formData.set('studentCode',this.savePaymentForm.value.studentCode);
    formData.set('file',this.savePaymentForm.value.fileSource);
    this.paymentService.savePayment(formData).subscribe({
      next:(data)=>{
        this.showProgress=false;
        alert('Payment Saved Successfully');

      },error:(err)=>{

      }
    })

  }
 afterLoadComplete(event:any){
  console.log(event);
 }
}
