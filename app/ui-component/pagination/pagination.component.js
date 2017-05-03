"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChanged = new core_1.EventEmitter();
        this.isActive = false;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        console.log(this.numberOfPages);
    };
    PaginationComponent.prototype.onClick = function (page) {
        this.isActive = true;
        this.pageChanged.emit({ currStatus: this.isActive, currpage: page + 1 });
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "numberOfPages", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        template: "\n        <nav aria-label=\"Posts Pagination\">\n            <ul class=\"pagination\">\n                <li class=\"page-item\" [class]=\"isDisabled\">\n                <span class=\"page-link\">Previous</span>\n                </li>\n                <li *ngFor=\"let numberOfPage of numberOfPages, let i = index\" class=\"page-item\" [class.active]=\"isActive\">\n                    <a class=\"page-link\" (click)=\"onClick(i)\">{{i + 1}}</a>                    \n                </li>\n                <li class=\"page-item\" [class]=\"isDisabled\">\n                <a class=\"page-link\" href=\"#\">Next</a>\n                </li>\n            </ul>\n        </nav>\n    "
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map