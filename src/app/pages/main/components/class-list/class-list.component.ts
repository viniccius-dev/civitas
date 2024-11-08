import { Component, ViewEncapsulation } from '@angular/core';
import { ISidebarIcons } from 'src/app/interface';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassListComponent {
  icons: ISidebarIcons[] = [
    { name: "Início", image: 'assets/icons-sidebar/inicio.svg', route: 'main/teacher-screen' },
    { name: "Turmas", image: 'assets/icons-sidebar/turmas.svg', route: 'main/class-list' },
    { name: "Professores", image: 'assets/icons-sidebar/professores.svg', route: 'main/teacher-list' },
    { name: "Estudantes", image: 'assets/icons-sidebar/estudantes.svg', route:'main/student-list' }
  ];
}
