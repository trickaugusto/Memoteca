# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Anotações
Two way data binding:
https://www.macoratti.net/15/02/angjs_3.htm#:~:text=O%20recurso%20da%20vincula%C3%A7%C3%A3o%20de,refletir%20as%20mudan%C3%A7as%20do%20modelo.

Diretivas no Angular:
https://www.freecodecamp.org/portuguese/news/como-usar-e-criar-diretivas-personalizadas-no-angular/#:~:text=O%20que%20%C3%A9%20uma%20diretiva,anexando%20comportamentos%20personalizados%20ao%20DOM.

As diretivas no Angular, são um recurso fundamental para manipular o DOM (Document Object Model) de maneira declarativa.

As diretivas podem ser utilizadas para diferentes finalidades, tais como definir atributos personalizados em elementos HTML, escutar eventos em elementos HTML e fazer a ligação de dados entre elementos HTML e propriedades em componentes Angular.


Exemplo de algumas diretivas:
[teste]: diretiva de atributo.
(teste): diretiva de evento.
[(teste)]: diretiva de binding de duas vias. (two way databinding)

Comunicação entre componentes no Angular: pode ser realizada através das diretivas de binding de entrada ([inputProperty]) e de saída ((outputEvent)). A diretiva de binding de entrada permite que dados sejam passados de um componente pai para um componente filho, enquanto a diretiva de binding de saída permite que eventos sejam emitidos de um componente filho para um componente pai.
