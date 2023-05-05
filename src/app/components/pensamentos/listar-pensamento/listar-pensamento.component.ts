import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Patrick',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Teste componente',
      autoria: 'Patrick',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!Manduma pindureta quium dia nois paga.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa gentis num é.In elementis mé pra quem é amistosis quis leo.Aenean aliquam molestie leo, vitae iaculis nisl.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Diuretics paradis num copo é motivis de denguis.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.A ordem dos tratores não altera o pão duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Delegadis gente finis, bibendum egestas augue arcu ut est',
      autoria: 'patrick',
      modelo: 'modelo1'
    }
  ];

}
