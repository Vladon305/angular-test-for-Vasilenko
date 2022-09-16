import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigator',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'navigator?tab=0',
    pathMatch: 'full',
  },
  {
    path: 'navigator',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
