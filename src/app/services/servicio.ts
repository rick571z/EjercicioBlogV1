
import { Post } from './../post.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  listaPersonas: Post[] = [

    {
      titulo: 'persona',
      texto: 'descripcion del personaje',
      autor: 'lucas',
      imagen: 'https://accioncine.es/images/stories/mjp/2012/desafio_total.jpg',
      fecha: '12-08-2017',
      categoria: 'ciencia ficcion'
    },
    {
      titulo: 'Wonder Woman2',
      texto: 'primera pelicula',
      autor: 'Pati Jenkis',
      imagen: 'https://ciencia-ficcion.es/wp-content/uploads/2013/12/Guerra_mundial_Z-150505659-large-691x1024.jpg',
      fecha: '12-08-2017',
      categoria: 'drama'
    },
    {
      titulo: 'Wonder Woman3',
      texto: 'primera pelicula',
      autor: 'Pati Jenkis',
      imagen: 'https://www.elplural.com/uploads/s1/20/87/7/jupiter-ascending.jpeg',
      fecha: '12-08-2017',
      categoria: 'comedia'
    },
    {
      titulo: 'Wonder Woman3',
      texto: 'primera pelicula',
      autor: 'Pati Jenkis',
      imagen: 'https://cinecritica.com/wp-content/uploads/2013/11/Prometheus-critica.jpg',
      fecha: '12-08-2017',
      categoria: 'comedia'
    },
    {
      titulo: 'Wonder Woman3',
      texto: 'primera pelicula',
      autor: 'Pati Jenkis',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjHLPGKksRWrv3jA2_WO-mmXrSlADM07WgA&usqp=CAU',
      fecha: '12-08-2017',
      categoria: 'comedia'
    }


  ];

  ngOnInit() {

  }

  /**
   * comprobar si esta el array guardado en el LocalStorage
   * recuperar lo que esta en el localstorage
   * transforma a string
   */
  constructor() {
    if (localStorage.getItem('arr_post')) {
      const tmp = localStorage.getItem('arr_post');
      this.listaPersonas = JSON.parse(tmp);

    }
  }


  /**
   * Agregar un post.
   * localStorage.
   * se transforma el array a string
   * JSON.stringify(this.listaPersonas).
   */
  agregarPost(post: Post) {
    this.listaPersonas.push(post);
    // console.log(this.listaPersonas);
    // const arrayCadena = JSON.stringify(this.listaPersonas);
    // localStorage.setItem('arr_post', arrayCadena);
  }

  /**
   * metodo para recuperar todos los post de nuestro blog
   */
  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaPersonas);
    });
  }

  /**
   * retorna los post de una categoria concreta
   */
  getPostsByCategoria(cCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrayCategoria = [];
      for (let id of this.listaPersonas) {
        if (id.categoria === cCategoria) {
          arrayCategoria.push(id);
        }
      }
      resolve(arrayCategoria);
    });
  }

  /**
   * metodo auxiliar que retorna el listado de categorias
   */
  listadoDeCategorias(): string[] {
    const listado = this.listaPersonas.map(categoria => categoria.categoria);
    return [...new Set(listado)];
  }


}
