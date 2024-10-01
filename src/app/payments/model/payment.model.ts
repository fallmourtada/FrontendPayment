import { StudentDTO } from "src/app/students/modelService/student.model";

export class PaymentDTO{
     id!:number;

    date!:Date;

     amount!:number;

    status!:string;

    type!:string;

    studentDTO!:StudentDTO;

    file!:string;

}