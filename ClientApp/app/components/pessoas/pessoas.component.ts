import { Component, OnInit } from '@angular/core';
import { IPessoa } from './pessoa';
import { PessoasService } from './pessoa.services';

@Component({
    selector: 'pessoas',
    templateUrl: './pessoas.component.html'
})
export class PessoasComponent implements OnInit {
    pessoas: IPessoa[];

    constructor(private pessoaService: PessoasService) {

    }

    ngOnInit() {
        this.pessoaService.getPessoas().subscribe(pes => this.pessoas = pes)
    }
}
