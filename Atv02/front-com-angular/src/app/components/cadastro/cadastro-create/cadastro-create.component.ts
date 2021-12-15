import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    email: '',
    cpf : '',
    nome: '',
    dataNasc: '',
    telefone: ''  
  }

   constructor(private cadastroService: CadastroService, 
               private router: Router) { }

  ngOnInit(): void {
  }

  createCadastro() {
    this.cadastroService.create(this.cadastro).subscribe(()=>{
      this.cadastroService.showMessege("Cadastro efetuado com sucesso!");
    })
  }

  cancelarCadastro(){
    this.router.navigate(['']);
  }

  tabelasCadastro(){
    this.router.navigate(['/cadastro/tabela']);
  }
 

}
