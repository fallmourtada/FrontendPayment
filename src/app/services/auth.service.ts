import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { CustomJwtPayload } from './customJwtPayload';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username!:any;
  public isAuthenticated:boolean=false;
  public roles:any;
  public accessToken!:any;


  constructor(private http:HttpClient) { }

  public login(username:string,password:string){
    let options={
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params=new HttpParams()
                              .set("username",username).set("password",password);

    return this.http.post("http://localhost:8082/auth/login",params,options);
  }

  

  loadProfile(data:any){
    this.accessToken=data["access-token"];
    this.isAuthenticated=true;
    let decodedJwt=jwtDecode<CustomJwtPayload>(this.accessToken);
    this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;
  }

  logout(){
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.roles=undefined;
    this.username=undefined;
  }

}
