import {
  Component,
  Input,
  Injector,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HotTableComponent } from './hot-table.component';

@Component({
  selector: 'hot-column',
  template: ``,
})

export class HotColumnComponent implements OnChanges {
  private firstRun = true;
  private parentComponent: HotTableComponent;

  @Input() allowHtml: boolean;
  @Input() allowInsertColumn: boolean;
  @Input() allowInsertRow: boolean;
  @Input() allowInvalid: boolean;
  @Input() allowRemoveColumn: boolean;
  @Input() allowRemoveRow: boolean;
  @Input() autoColumnSize: boolean | object;
  @Input() autoComplete: any[];
  @Input() autoRowSize: boolean | object;
  @Input() autoWrapCol: boolean;
  @Input() autoWrapRow: boolean;
  @Input() bindRowsWithHeaders: boolean | string;
  @Input() cell: any[];
  @Input() cells: (row: number, column: number, prop: object) => object;
  @Input() checkedTemplate: boolean | string;
  @Input() className: string | string[];
  @Input() colHeaders: boolean | string[] | ((column: number) => string);
  @Input() collapsibleColumns: boolean | object[];
  @Input() columnHeaderHeight: number | number[];
  @Input() columns: object[] | ((column: number) => object);
  @Input() columnSorting: boolean | object;
  @Input() columnSummary: object;
  @Input() colWidths: number | number[] | string | ((column: number) => number);
  @Input() commentedCellClassName: string;
  @Input() comments: boolean | object[];
  @Input() contextMenu: boolean | object | object[];
  @Input() copyable: boolean;
  @Input() copyColsLimit: number;
  @Input() copyPaste: boolean;
  @Input() copyRowsLimit: number;
  @Input() correctFormat: boolean;
  @Input() currentColClassName: string;
  @Input() currentHeaderClassName: string;
  @Input() currentRowClassName: string;
  @Input() customBorders: boolean | object[];
  @Input() data: any[];
  @Input() dataSchema: object;
  @Input() dateFormat: string;
  @Input() debug: boolean;
  @Input() defaultDate: string;
  @Input() disableVisualSelection: boolean | string | string[];
  @Input() dropdownMenu: boolean | object | object[];
  @Input() editor: boolean | string | (() => void);
  @Input() enterBeginsEditing: boolean;
  @Input() enterMoves: object | (() => void);
  @Input() fillHandle: boolean | string | object;
  @Input() filter: boolean;
  @Input() filteringCaseSensitive: boolean;
  @Input() filters: boolean;
  @Input() fixedColumnsLeft: number;
  @Input() fixedRowsBottom: number;
  @Input() fixedRowsTop: number;
  @Input() format: string;
  @Input() formulas: boolean;
  @Input() fragmentSelection: boolean | string;
  @Input() ganttChart: object;
  @Input() headerTooltips: boolean | object;
  @Input() height: number | (() => number);
  @Input() hiddenColumns: boolean | object;
  @Input() hiddenRows: boolean | object;
  @Input() invalidCellClassName: string;
  @Input() label: object;
  @Input() language: string;
  @Input() manualColumnFreeze: boolean;
  @Input() manualColumnMove: boolean | number[];
  @Input() manualColumnResize: boolean | number[];
  @Input() manualRowMove: boolean | number[];
  @Input() manualRowResize: boolean | number[];
  @Input() maxCols: number;
  @Input() maxRows: number;
  @Input() mergeCells: boolean | object[];
  @Input() minCols: number;
  @Input() minRows: number;
  @Input() minSpareCols: number;
  @Input() minSpareRows: number;
  @Input() multiSelect: boolean;
  @Input() nestedHeaders: any[];
  @Input() noWordWrapClassName: string;
  @Input() observeChanges: boolean;
  @Input() observeDOMVisibility: boolean;
  @Input() outsideClickDeselects: boolean | ((event: Event) => boolean);
  @Input() pasteMode: string;
  @Input() persistentState: boolean;
  @Input() placeholder: any;
  @Input() placeholderCellClassName: string;
  @Input() preventOverflow: boolean | string;
  @Input() readOnly: boolean;
  @Input() readOnlyCellClassName: string;
  @Input() renderAllRows: boolean;
  @Input() renderer: string | (() => void);
  @Input() rowHeaders: boolean | string[] | (() => string);
  @Input() rowHeaderWidth: number | number[];
  @Input() rowHeights: number | number[] | string | ((row: number) => number);
  @Input() search: boolean;
  @Input() selectOptions: string[] | number[];
  @Input() skipColumnOnPaste: boolean;
  @Input() sortByRelevance: boolean;
  @Input() sortFunction: (sortOrder: boolean) => void;
  @Input() sortIndicator: boolean;
  @Input() source: any[] | (() => void);
  @Input() startCols: number;
  @Input() startRows: number;
  @Input() stretchH: string;
  @Input() strict: boolean;
  @Input() tableClassName: string | string[];
  @Input() tabMoves: object;
  @Input() title: string;
  @Input() trimDropdown: boolean;
  @Input() trimRows: boolean | number[];
  @Input() trimWhitespace: boolean;
  @Input() type: string;
  @Input() uncheckedTemplate: boolean | string;
  @Input() undo: boolean;
  @Input() validator: string | RegExp | (() => void);
  @Input() viewportColumnRenderingOffset: number | string;
  @Input() viewportRowRenderingOffset: number | string;
  @Input() visibleRows: number;
  @Input() width: number| (() => number);
  @Input() wordWrap: boolean;

  constructor(private inj: Injector) {
    this.parentComponent = this.inj.get(HotTableComponent);
  }

  ngOnInit() {
    this.firstRun = false;
    this.parentComponent.addColumn(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.firstRun) {
      return;
    }

    this.parentComponent.onAfterColumnsChange();
  }

  ngOnDestroy() {
    this.parentComponent.removeColumn(this);
  }
}
