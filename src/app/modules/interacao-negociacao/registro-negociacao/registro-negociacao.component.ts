import { Component } from '@angular/core';

import { ModalColetaDescricaoComponent } from './modal-coleta-descricao/modal-coleta-descricao.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-negociacao',
  templateUrl: './registro-negociacao.component.html',
  styleUrls: ['./registro-negociacao.component.css']
})
export class RegistroNegociacaoComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModalColetaDescricaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
