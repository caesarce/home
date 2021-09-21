import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'hello-world-component',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {

    // play with template directives and interpolation
    sayHelloId = 'pHelloWorld';
    fontColor='red';
    message = 'Hello, World!';

    canClick = true;

    canEdit = false;
 
    onEditClick() {
        this.onLogMe();
        this.canClick = !this.canClick;
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            this.message = 'You can edit me!';
        } else {
            this.message = 'I\'m read only!';
        }
    }

    sayMessage() {
        alert(this.message);
    }

    // play with dependency injection
    count = 0;

    constructor(private logger: Logger) { }

    onLogMe() {
        this.logger.writeCount(this.count);
        this.count++;
    }
    
}