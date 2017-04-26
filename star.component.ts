import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
    
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        
        this.starWidth = this.rating * 92 / 5;
        //console.log(this.starWidth);
    }

    onClick(){
        console.log(this.rating);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

}