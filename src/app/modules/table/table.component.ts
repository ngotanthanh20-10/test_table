import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { IApiBaseMeta } from '../interfaces/api.interface';
import { ITableLayoutProps } from '../interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() props: ITableLayoutProps | undefined;
  @Input() loading: boolean = true;
  @Input() expandFilter: boolean = false;

  @Input() nzLoadingIndicator!: TemplateRef<any>;

  @Output() oReset: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oRefresh: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oToggleExpand: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oChangeParams: EventEmitter<any> = new EventEmitter(undefined);
  ngOnInit(): void {
    console.log(this.stateProps.param);
  }
  showFilterMb = false;
  list: any[] = [];
  pageSize = 1;
  currentParams: IApiBaseMeta = {
    totalPages: 2,
    pageNumber: 0,
    pageSize: 2,
  };
  stateProps: ITableLayoutProps = {
    data: [],
    expandFilter: false,
    showExpand: false,
    showTable: true,
    showReset: true,
    showRefresh: true,
    showExportExcel: true,
    showDefaultButtons: true,
    showPagination: true,
    maxHeight: '',
    minWidth: -1,
    no_data_msg: 'error.NO_DATA',
    param: { ...this.currentParams },
    alertReset: false,
    nzWidthConfig: [],
  };
  // expandFilter = false;
  column = {
    left: 16,
    right: 8,
  };

  constructor() {}
  ngOnChanges() {
    if (this.props) {
      this.stateProps = Object.assign(this.stateProps, this.props);
    }
    this.list = this.stateProps['data']
      ? this.stateProps.data.map((item) => Object.assign({}, item))
      : [];
    if (this.stateProps.param) {
      this.currentParams = this.stateProps.param;
    }
  }

  //#region Output Emit event
  onReload() {
    this.oReset.emit(this.currentParams);
  }
  onRefresh() {
    this.oRefresh.emit(this.currentParams);
  }
  onToggleExpand() {
    this.expandFilter = !this.expandFilter;
    this.oToggleExpand.emit(this.expandFilter);
  }
  //#endregion
}
