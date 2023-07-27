import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContratoService } from '../servicios/contrato.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent implements OnInit {
  formSolicitud: FormGroup;

  constructor(private fb: FormBuilder, private servContrato: ContratoService,
    private dialog: MatDialogRef<SolicitudFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.formSolicitud = this.fb.group({
      id:"",
      tipo: "",
      titulo: "",
      contenido: ""
    })

  }

  ngOnInit(): void {
    // Inicializar el formulario y sus controles
    this.formSolicitud.patchValue(this.data);
  }

  onSubSolicitud() {
    if (this.formSolicitud.valid) {
      if (this.data) {
        this.servContrato.actualizarSolicitud(this.data.id, this.formSolicitud.value).subscribe({
          next: (val: any) => {
            alert('Solictud actualizada');
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })

      } else {
        this.servContrato.guardarSolicitud(this.formSolicitud.value).subscribe({
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

