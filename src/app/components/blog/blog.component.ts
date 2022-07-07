import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog.interface';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrBlog: Blog [] = []
  noticia: string = "";
  titulo: string = "";
  imagen: string = "";
  texto: string = "";
  fecha: string = "";
  id: number = 3;
  constructor() { 
    this.arrBlog = [
      { 
        id: 1,
        titulo: 'Cristiano se subasta a sí mismo', 
        imagen: 'https://www.eluniverso.com/resizer/JN0uj3KP016dXQzMLG7ac0ePuTA=/1509x1005/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/XLQRVILDWFD2RLZXPHP3B5ICCI.jpg',
        texto: 'Cristiano Ronaldo fue presentado oficialmente por el Manchester United el 31 de agosto del año pasado. Era el regreso de quien se transformara en estrella mundial con la camiseta de los Diablos Rojos. Aunque ya no era el muchacho triunfador que se fue a los 24, igual los hinchas se mostraron felices de recuperarlo después de doce años. Y él, siempre tan pertinente desde lo comunicacional, emitió declaraciones políticamente impecables',
        fecha: '6 de julio, 2022' 
      },

      {
        id: 2,
        titulo:'Aún buscan trabajadores para el Mundial de Qatar. Te explicamos cómo aplicar',
        imagen: 'https://www.eluniverso.com/resizer/D7wNPV9upHzIKOziVXjK-ZYRSwY=/1506x1005/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/I6XOUZXO4VB3RHSHFQCYW64KNQ.jpg',
        texto: 'PHRS Hospitality Experts, agencia de reclutamiento especializada en sectores turístico y hotelero, busca personal en diferentes áreas para los hoteles y restaurantes más reconocidos de Qatar, en el marco del Mundial del Fútbol que se realizará a fines de este 2022.',
        fecha: '6 de julio, 2022'
      }
    ]
  }

  ngOnInit(): void {
    this.cargarNoticias()
  }
  cargarNoticias(): void {
    this.noticia ="";
    this.arrBlog.forEach(blog => this.noticia += `<li>${blog.titulo} : ${blog.imagen} : ${blog.texto} : ${blog.fecha}</li>`);
  }

  guardarNocias () {
    if (this.titulo !== "" && this.imagen !== "" && this.texto !== "" && this.fecha !== "") {
      let position = this.arrBlog.findIndex(blog => blog.titulo === this.titulo); 
      console.log(position)


      if (position === -1) {
        let newNoticia: Blog = {
          titulo: this.titulo,
          imagen: this.imagen,
          texto: this.texto,
          fecha: this.fecha,
          id: this.id
        }
        this.arrBlog.push(newNoticia);
        this.id++;
        this.cargarNoticias()
        this.titulo ="";
        this.imagen ="";
        this.texto ="";
        this.fecha="";
      }
      else {
        alert ('Titulo duplicado')
      }
    }
    else {
      alert('los campos no pueden estar vacios')
    } 
  }

}
