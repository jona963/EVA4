import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratosComponent } from '../contratos/contratos.component'
import { ContratoService } from '../servicios/contrato.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']

})
export class FinanzasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'contrato', 'autor', 'contenido', 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private dialog: MatDialog, private servContrato: ContratoService) { }

  ngOnInit(): void {
    this.listaContrato()
  }

  abrirFormulario() {
    const dialogRef = this.dialog.open(ContratosComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.listaContrato();
        }
       
      }
    })
  }

  listaContrato() {
    this.servContrato.listaContrato().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);


      },
      error: console.log,
    })
  }
  eliminarContrato(id: number) {
    this.servContrato.eliminarContrato(id).subscribe({
      next: (res) => {
        alert('Contrato eliminado');
        this.listaContrato();
      },
      error: console.log,
    })
  }

  editarContrato(data: any) {
    const dialogRef = this.dialog.open(ContratosComponent,
      {
        data,
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val){
            this.listaContrato();
          }
         
        }
      })

  }
}
