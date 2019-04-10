import { Component } from '@angular/core';
import { IGroupingExpression, SortingDirection } from 'igniteui-angular';
import { FlatGridComponent } from '../flatgrid/flatgrid.component';

@Component({
    selector: 'app-grid1',
    templateUrl: './groupedgrid.component.html',
    styleUrls: ['./groupedgrid.component.scss']
})
export class GroupedGridComponent extends FlatGridComponent {

    public groupingExpressions: Array<IGroupingExpression> = [
        { fieldName: 'emailAddress1', dir: SortingDirection.Asc },
        { fieldName: 'emailAddress2', dir: SortingDirection.Desc },
        { fieldName: 'emailAddress3', dir: SortingDirection.Desc }
    ];
}
