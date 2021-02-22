
import { Post } from './../../post.interface';
import { ServicioService } from './../../services/servicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPost: Post[];
  listadoCat: string[];

  constructor(private servicioServe: ServicioService) {
    this.listaPost = [];
  }

  async ngOnInit() {
    try {
      this.listaPost = await this.servicioServe.getAllPosts();
    } catch (error) {
      console.log(error);
    }
    this.listadoCat = this.servicioServe.listadoDeCategorias();
  }


  /**
   * 
   */
  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.listaPost = await this.servicioServe.getAllPosts();
      } else {
        this.listaPost = await this.servicioServe.getPostsByCategoria($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
