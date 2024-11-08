import { Component, ViewEncapsulation } from '@angular/core';
import { ISidebarIcons } from 'src/app/interface';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['../class-list/class-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeacherListComponent {
  icons: ISidebarIcons[] = [
    { name: "Início", image: 'assets/icons-sidebar/inicio.svg', route: '/' },
    { name: "Turmas", image: 'assets/icons-sidebar/turmas.svg', route: '#' },
    { name: "Professores", image: 'assets/icons-sidebar/professores.svg', route: '#' },
    { name: "Estudantes", image: 'assets/icons-sidebar/estudantes.svg', route:'#' }
  ];
}