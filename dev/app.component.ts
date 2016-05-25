import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
        </div>
        <div class="container">
            <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {
    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};

    onSubmit(myself) {
        this.myself = {name: myself.name, age: myself.age};
    }

    onConfirm(myself) {
        this.confirmedMyself = {name: myself.name, age: myself.age};
    }
}