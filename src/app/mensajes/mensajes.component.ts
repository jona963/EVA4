import { Component } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Post } from '../modelos/post.model';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent { 
  mensajes: Post[] = [];
  anuncios: any[] = [];
  activeTabIndex = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Llama a la API para obtener la lista de mensajes
    this.apiService.get<Post[]>('posts').subscribe(
      (data) => {
        this.mensajes = data;
        
      },
      (error) => {
        console.error('Error al obtener los mensajes:', error);
      }
    );
    this.apiService.get<any[]>('posts/1/comments').subscribe(
      (data) => {
        this.anuncios = data;
      },
      (error) => {
        console.error('Error al obtener los anuncios:', error);
      }
    );
  }

}
