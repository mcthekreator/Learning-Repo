import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfFor]'
})
export class IfForDirective<T> {
  private _condition: boolean = true;
  private _items: T[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appIfForCondition(condition: boolean) {
    this._condition = condition;
    this.updateView();
  }

  @Input()
  set appIfForItems(items: T[]) {
    this._items = items;
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();

    if (this._condition && this._items.length) {
      for (const item of this._items) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
      }
    }
  }
}












