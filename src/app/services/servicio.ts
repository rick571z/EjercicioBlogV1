
import { Post } from './../post.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  listaPersonas: Post[] = [

    {
      titulo: 'Total Recall',
      texto: 'Buscando la verdad',
      autor: 'lucas',
      imagen: 'https://accioncine.es/images/stories/mjp/2012/desafio_total.jpg',
      fecha: '12-08-2017',
      categoria: 'ciencia ficcion'
    },
    {
      titulo: 'Avatar',
      texto: 'Una de las mas taquilleras',
      autor: 'Pati Jenkis',
      imagen: 'https://i.pinimg.com/736x/0b/47/52/0b475243e0f2612c5ad6485dfc214b3e.jpg',
      fecha: '12-08-2017',
      categoria: 'ciencia ficcion'
    },
    {
      titulo: 'Gran Amor',
      texto: 'comedia de amor',
      autor: 'Pati Jenkis',
      imagen: 'https://cartelera.elperiodico.com/estaticos//0/683/683571_p.jpg',
      fecha: '12-08-2018',
      categoria: 'comedia'
    },
    {
      titulo: 'Jumanji',
      texto: 'mundo fantastico',
      autor: 'Pati Jenkis',
      imagen: 'https://www.filmaboutit.com/data/shp/images/b1bTpxh0lRfw7kwRrWPeMOo7jbY.jpg',
      fecha: '12-08-2016',
      categoria: 'aventura'
    },
    {
      titulo: 'Jojo Rabbit',
      texto: 'Segunda guerra mundial',
      autor: 'Pati Jenkis',
      imagen: 'https://unity-img.tbxapis.com/v0/images/3a1a07364091e7ad5788133aaf260faa/content/5f2f87069e282010f8aab23e/7084d1dcaea7bf78d64a0088c5f6c8a396fa7fce/7084d1dcaea7bf78d64a0088c5f6c8a396fa7fce.png?_v=1.5.99',
      fecha: '12-08-2019',
      categoria: 'drama'
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
