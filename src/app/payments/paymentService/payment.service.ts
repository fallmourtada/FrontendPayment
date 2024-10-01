import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDTO } from '../model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  public getListPayment():Observable<PaymentDTO[]>{
    return this.http.get<PaymentDTO[]>("http://localhost:8082/payments");
  }


  public getStudentPayment(code:string):Observable<PaymentDTO[]>{
    return this.http.get<PaymentDTO[]>(`http://localhost:8082/students/${code}/payments`)
  }

  public savePayment(formData:any):Observable<PaymentDTO>{
    return this.http.post<PaymentDTO>('http://localhost:8082/payments',formData);
  }

  public getDetailsPayment(paymentId:number){
    return this.http.get(`http://localhost:8082/paymentFile/${paymentId}`,{responseType:'blob'});
  }
}
