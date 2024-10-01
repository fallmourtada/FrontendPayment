import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './studentService/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentDTO } from './modelService/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  
  public students!:StudentDTO[];
  public dataSource!:MatTableDataSource<StudentDTO>;
  public displayedColumns:string[]=['id','firstName','lastName','code','programId','payments']

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private studentService:StudentService,private router:Router){}

  ngOnInit(): void {
    this.getListStudents();
    
  }

  getListStudents() {
    this.studentService.getListStudent().subscribe({
      next: (data) => {
        console.log("Données reçues:", data);  // Vérifiez ici que c'est un tableau
  
        // Vous avez déjà confirmé que `data` est un tableau
        this.students = data;
  
        // Initialiser MatTableDataSource
        this.dataSource = new MatTableDataSource<StudentDTO>(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des étudiants", err);
      }
    });
  }

  studentPayment(code:string){
    this.router.navigate(['/navbar/student-detail', code]); 

  }
}  