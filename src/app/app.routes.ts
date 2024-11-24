import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.homeRoutes)
  },
  {
    path: 'where',
    loadChildren: () => import('./features/where/where.routes').then(m => m.whereRoutes)
  }
];
