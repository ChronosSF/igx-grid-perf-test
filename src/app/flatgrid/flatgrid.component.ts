import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IgxColumnComponent, IGroupingExpression, ISortingExpression } from 'igniteui-angular';
import { contacts } from '../../../data/contacts';

@Component({
    selector: 'app-grid1',
    templateUrl: './flatgrid.component.html',
    styleUrls: ['./flatgrid.component.scss']
})
export class FlatGridComponent implements OnInit, AfterViewInit {
    public localData: any[];
    public title = 'Flat Grid';
    private startTime;
    public endTime = 0;
    constructor() { }

    public groupingExpressions: Array<IGroupingExpression> = [];

    public columns = [
        { field: 'contactID1' },
        { field: 'emailAddress1' },
        { field: 'hasEmailPromotion1' },
        { field: 'modifiedDate1' },
        { field: 'fictionalFloat1' },
        { field: 'contactID2' },
        { field: 'emailAddress2' },
        { field: 'hasEmailPromotion2' },
        { field: 'modifiedDate2' },
        { field: 'fictionalFloat2' },
        { field: 'contactID3' },
        { field: 'emailAddress3' },
        { field: 'gustavo0@adventure-works.com' },
        { field: 'hasEmailPromotion3' },
        { field: 'modifiedDate3' },
        { field: 'fictionalFloat3' },
        { field: 'contactID4' },
        { field: 'emailAddress4' },
        { field: 'hasEmailPromotion4' },
        { field: 'modifiedDate4' },
        { field: 'fictionalFloat4' },
        { field: 'fictionalBool10' }
    ];

    ngOnInit() {
        this.startTime = new Date().getTime();
        this.localData = contacts;
    }

    ngAfterViewInit() {
        requestAnimationFrame(() => this.endTime = (new Date().getTime() - this.startTime) / 1000);
    }

    public onColumnInit(column: IgxColumnComponent) {
        if (column.field === 'RegistererDate') {
            column.formatter = (date => date.toLocaleDateString());
        }
    }
}
