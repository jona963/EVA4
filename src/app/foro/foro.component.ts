import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratoService } from '../servicios/contrato.service';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudFormComponent } from '../solicitud-form/solicitud-form.component';


@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent{
  displayedColumns: string[] = ['id', 'tipo', 'contenido', 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private dialog: MatDialog, private servContrato: ContratoService) { }

  ngOnInit(): void {
    this.listaSolicitud()
  }

  abrirSolicitud() {
    const dialogRef = this.dialog.open(SolicitudFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.listaSolicitud();
        }
       
      }
    })
  }

  listaSolicitud() {
    this.servContrato.listaSolicitud().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);


      },
      error: console.log,
    })
  }
  eliminarSolicitud(id: number) {
    this.servContrato.eliminarSolicitud(id).subscribe({
      next: (res) => {
        alert('Contrato eliminado');
        this.listaSolicitud();
      },
      error: console.log,
    })
  }

  editarSolicitud(data: any) {
    const dialogRef = this.dialog.open(SolicitudFormComponent,
      {
        data,
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val){
            this.listaSolicitud();
          }
         
        }
      })

  }


}
