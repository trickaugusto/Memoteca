import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento() {
     alert("novo pensamento");
  }

  cancelar() {
    alert("ação cancelada")
  }
}
