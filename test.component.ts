import { Component, Input } from '@angular/core';

@Component({
    selector: 'test-component',
    template: 'This is test component {{ newTest }}'
})

export class TestComponent {
    @Input() newTest;
}