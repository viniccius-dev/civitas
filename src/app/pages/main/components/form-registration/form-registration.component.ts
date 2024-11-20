import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
  form: FormGroup;

  questions = [
    {
      id: 'autoconhecimento',
      title: 'Autoconhecimento',
      description: 'Habilidades como reconhecer e gerenciar emoções, lidar com frustrações, e desenvolver resiliência emocional são essenciais para o desenvolvimento de uma personalidade equilibrada.'
    },
    {
      id: 'empatia',
      titulo: 'Empatia',
      descricao: 'A capacidade de se colocar no lugar do outro, entender diferentes perspectivas e emoções é fundamental para a convivência em sociedade e para construir relacionamentos saudáveis.'
    }
  ];

  options = [
    { value: 'discordoTotalmente', text: 'Discordo totalmente' },
    { value: 'discordo', text: 'Discordo' },
    { value: 'neutro', text: 'Neutro' },
    { value: 'concordo', text: 'Concordo' },
    { value: 'concordoTotalmente', text: 'Concordo totalmente' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      autoconhecimento: [''],
      empatia: ['']
    });
  }

  ngOnInit() {
    // Observar mudanças no formulário se necessário
    this.form.valueChanges.subscribe(values => {
      console.log('Valores do formulário:', values);
    });
  }
}
