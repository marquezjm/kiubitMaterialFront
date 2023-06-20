import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //this.cont++
    //console.log('entrada'+this.cont);
    
    /*if(this.cont>0){
      this.loading.mostrar=true
    }*/
    if(!this.tokenService.isLogged()){
      /*this.cont--
      if(this.cont==0){
        this.loading.mostrar=false
      }*/
      return next.handle(req)
    }

    let intReq = req
    const token=this.tokenService.getToken()
   
    intReq=this.addToken(req,token!)
    
    return next.handle(intReq).pipe(catchError((err:HttpErrorResponse)=>{
      if(err.status==401){
        //const dto: Jwt={token:this.tokenService.getToken()!}
        /*return this.authService.refresh(dto).pipe(concatMap((data:any)=>{
          console.log('refreashing...');
          this.tokenService.setToken(data.token)
          intReq=this.addToken(req,data.token)
          return next.handle(intReq)
        }))*/
        return next.handle(req);
      }else if(err.status!=404 && err.status!=403){
        //this.tokenService.logOut()
        return throwError(()=>new Error(err.message))
      }else{
        return next.handle(req);
      }
      
      
    }))
  }

  private addToken(req: HttpRequest<any>,token:string){
    return req.clone({headers:req.headers.set('Authorization',`Bearer ${token}`)})
  }
}

export const interceptorProvider = [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}]