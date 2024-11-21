import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})

export class FormRegistrationComponent {
  form!: FormGroup;
  textTeacher: string = '';
  ngModelOptions = { standalone: true };

  questions = [
    {
      id: 'autoconhecimento',
      title: 'Autoconhecimento',
      description: 'Habilidades como reconhecer e gerenciar emoções, lidar com frustrações, e desenvolver resiliência emocional são essenciais para o desenvolvimento de uma personalidade equilibrada.'
    },
    {
      id: 'empatia',
      title: 'Empatia',
      description: 'A capacidade de se colocar no lugar do outro, entender diferentes perspectivas e emoções é fundamental para a convivência em sociedade e para construir relacionamentos saudáveis.'
    },
    {
      id: 'comunicacao',
      title: 'Comunicação',
      description: 'Habilidades de expressão verbal e não-verbal, escuta ativa, e assertividade são indispensáveis para a construção de relacionamentos e a resolução de conflitos de forma pacífica.'
    },
    {
      id: 'trabalhoEquipe',
      title: 'Trabalho em equipe',
      description: 'Promover a cooperação e o espírito de equipe desde cedo ajuda a criança a entender a importância de trabalhar em conjunto para atingir objetivos comuns.'
    },
    {
      id: 'autonomia',
      title: 'Autonomia',
      description: 'Ensinar a importância de ser responsável por suas ações e decisões, além de promover a autossuficiência em tarefas adequadas à idade.'
    },
  ];

  options = [
    { value: 'discordoTotalmente', text: 'Discordo totalmente' },
    { value: 'discordo', text: 'Discordo' },
    { value: 'neutro', text: 'Neutro' },
    { value: 'concordo', text: 'Concordo' },
    { value: 'concordoTotalmente', text: 'Concordo totalmente' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      autoconhecimento: ['', Validators.required],
      empatia: ['', Validators.required],
      comunicacao: ['', Validators.required],
      trabalhoEquipe: ['', Validators.required],
      autonomia: ['', Validators.required],
      textTeacher: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid && this.textTeacher.trim().length > 0) {
      const formData = {
        ...this.form.value,
        textTeacher: this.textTeacher
      };
      console.log('Formulário enviado:', formData);
    }
  }

  goBack():void {
    this.router.navigate(['/'])
  }
}
