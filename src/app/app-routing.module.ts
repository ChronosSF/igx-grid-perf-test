import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatGridComponent } from './flatgrid/flatgrid.component';
import { GroupedGridComponent } from './groupedgrid/groupedgrid.component';

const routes: Routes = [
  { path: '', redirectTo: '/flatgrid', pathMatch: 'full' },
  { path: 'grid1', component: FlatGridComponent, data: { text: 'grid1' } },
  { path: 'grid2', component: GroupedGridComponent, data: { text: 'grid2' } },
  { path: 'flatgrid', component: FlatGridComponent, data: { text: 'flatgrid' } },
  { path: 'groupedgrid', component: GroupedGridComponent, data: { text: 'groupedgrid' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
