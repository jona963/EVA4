import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContratoService } from '../servicios/contrato.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  formContrato: FormGroup;

  constructor(private fb: FormBuilder, private servContrato: ContratoService,
    private dialog: MatDialogRef<ContratosComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.formContrato = this.fb.group({
      contrato: "",
      autor: "",
      contenido: ""
    })
  }

  ngOnInit(): void {
    this.formContrato.patchValue(this.data);
  }

  onSubContrato() {
    if (this.formContrato.valid) {
      if (this.data) {
        this.servContrato.actualizarContrato(this.data.id, this.formContrato.value).subscribe({
          next: (val: any) => {
            alert('Contrato actualizado');
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })

      } else {
        this.servContrato.guardarContrato(this.formContrato.value).subscribe({
          next: (val: any) => {
            alert('Contrato guardado');
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })

      }

    }
  }
}






















