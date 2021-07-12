import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-ng-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;
    reports: any;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.countries$ = this.countryService.countries$;
        this.total$ = this.countryService.total$;

        // Get fake reports data
        this.reports = this.getReportsData(); 
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }   

    // fake data for reports
    getReportsData() {
        return  [
            {
                "ticketID" : "412418",
                "customerID" : "DM-3189",
                "callerNamme" : "Nancy Johnson",
                "repName" : "John Doe",
                "dateOpened" : "05/18/2017",
                "dateResolved" : "05/22/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "171839",
                "customerID" : "DM-82194",
                "callerNamme" : "Bill Moore",
                "repName" : "John Doe",
                "dateOpened" : "04/24/2017",
                "dateResolved" : "04/25/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "147894",
                "customerID" : "DM-17485",
                "callerNamme" : "Jessica Lee",
                "repName" : "John Doe",
                "dateOpened" : "06/28/2017",
                "dateResolved" : "06/28/2017",
                "status" : "Resolved",
                "active": true
            },
            {
                "ticketID" : "412418",
                "customerID" : "DM-3189",
                "callerNamme" : "Nancy Johnson",
                "repName" : "John Doe",
                "dateOpened" : "05/18/2017",
                "dateResolved" : "05/22/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "171839",
                "customerID" : "DM-82194",
                "callerNamme" : "Bill Moore",
                "repName" : "John Doe",
                "dateOpened" : "04/24/2017",
                "dateResolved" : "04/25/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "147894",
                "customerID" : "DM-17485",
                "callerNamme" : "Jessica Lee",
                "repName" : "John Doe",
                "dateOpened" : "06/28/2017",
                "dateResolved" : "06/28/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "412418",
                "customerID" : "DM-3189",
                "callerNamme" : "Nancy Johnson",
                "repName" : "John Doe",
                "dateOpened" : "05/18/2017",
                "dateResolved" : "05/22/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "171839",
                "customerID" : "DM-82194",
                "callerNamme" : "Bill Moore",
                "repName" : "John Doe",
                "dateOpened" : "04/24/2017",
                "dateResolved" : "04/25/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "147894",
                "customerID" : "DM-17485",
                "callerNamme" : "Jessica Lee",
                "repName" : "John Doe",
                "dateOpened" : "06/28/2017",
                "dateResolved" : "06/28/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "412418",
                "customerID" : "DM-3189",
                "callerNamme" : "Nancy Johnson",
                "repName" : "John Doe",
                "dateOpened" : "05/18/2017",
                "dateResolved" : "05/22/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "171839",
                "customerID" : "DM-82194",
                "callerNamme" : "Bill Moore",
                "repName" : "John Doe",
                "dateOpened" : "04/24/2017",
                "dateResolved" : "04/25/2017",
                "status" : "Resolved"
            },
            {
                "ticketID" : "147894",
                "customerID" : "DM-17485",
                "callerNamme" : "Jessica Lee",
                "repName" : "John Doe",
                "dateOpened" : "06/28/2017",
                "dateResolved" : "06/28/2017",
                "status" : "Resolved"
            },
        ]
    }
}
