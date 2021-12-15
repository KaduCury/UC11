import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = "http://localhost:3001/cadastro";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessege(msg: string, isError : boolean = false): void {
    this.snackBar.open(msg,'X',{
      duration: 6000,
      verticalPosition: "top",
      panelClass: isError ? ["errorMsg"] : ["sucessMsg"]
    });
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl,cadastro).pipe(map((obj)=>obj),
      catchError(e => this.errorMsg(e)));
  }

  errorMsg(e: any): Observable<any> {
    console.log(e);
    this.showMessege("Erro: " + e.message, true);
    return EMPTY;
  }

  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseUrl).pipe(map((obj)=>obj),
    catchError(e => this.errorMsg(e)));
  }

  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(map((obj)=>obj),
    catchError(e => this.errorMsg(e)));
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.baseUrl}/${cadastro.id}`;
    return this.http.put<Cadastro>(url,cadastro).pipe(map((obj)=>obj),
    catchError(e => this.errorMsg(e)));
  }

  deleteCadastro(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cadastro>(url).pipe(map((obj)=>obj),
    catchError(e => this.errorMsg(e)));
  }

}
