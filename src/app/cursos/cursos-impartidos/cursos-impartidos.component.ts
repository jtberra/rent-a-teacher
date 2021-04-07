import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-impartidos',
  templateUrl: './cursos-impartidos.component.html',
  styleUrls: ['./cursos-impartidos.component.css']
})
export class CursosImpartidosComponent implements OnInit {

  itemCursos = [
    {
      nombre : 'Introduccion al desarrollo Web',
      descripcion: '¿Te interesa el mundo del desarrollo web? Yo te enseño!',
      mentor: 'Hugo Berra Salazar',
      tipo: 'Visible'
    },
    {
      nombre : 'Aprende Inglés',
      descripcion: '¿Quieres tener más oportunidades académicas o laborales? ¿Quieres explorar más cultura y entretenimiento?',
      mentor: 'Martha Santillan',
      tipo: 'Visible'
    },{
      nombre : 'Aprende a preparar platillos Oaxaqueños!',
      descripcion: 'La gastronomía de Oaxaca goza de renombre mundial por su gran diversidad y por sus exóticos sabores. Sus platillos son muy elaborados, y apreciados por considerarse artesanales.',
      mentor: 'Carlos Nochebuena',
      tipo: 'Visible'
    },{
      nombre : 'Guitarra Acustica para principiantes',
      descripcion: 'Te gustaria aprender a tocar la guitarra e ser el foco de atencion en las fiestas? aprende guitarra ahora!',
      mentor: 'Cuitlahuac Luna',
      tipo: 'Visible'
    }
    ,{
      nombre : 'Guitarra Acustica para principiantes',
      descripcion: 'Te gustaria aprender a tocar la guitarra e ser el foco de atencion en las fiestas? aprende guitarra ahora!',
      mentor: 'Cuitlahuac Luna',
      tipo: 'Visible'
    }
    ,{
      nombre : 'Guitarra Acustica para principiantes',
      descripcion: 'Te gustaria aprender a tocar la guitarra e ser el foco de atencion en las fiestas? aprende guitarra ahora!',
      mentor: 'Cuitlahuac Luna',
      tipo: 'Visible'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
