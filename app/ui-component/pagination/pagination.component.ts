import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'

@Component({
    selector: 'pagination',
    template: `
        <nav aria-label="Posts Pagination">
            <ul class="pagination">
                <li class="page-item" [class]="isDisabled">
                <span class="page-link">Previous</span>
                </li>
                <li *ngFor="let numberOfPage of numberOfPages, let i = index" class="page-item" [class.active]="isActive">
                    <a class="page-link" (click)="onClick(i)">{{i + 1}}</a>                    
                </li>
                <li class="page-item" [class]="isDisabled">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    `
})

export class PaginationComponent implements OnInit{
    @Input() numberOfPages;
    @Output() pageChanged = new EventEmitter();

    isActive = false;
    totNumberofPages;

    ngOnInit(){
        console.log(this.numberOfPages);
    }

    onClick(page){
        this.isActive = true;
        this.pageChanged.emit({currStatus:this.isActive, currpage: page + 1});
    }
}