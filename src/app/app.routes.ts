import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'jovens',
        loadComponent: () => import('./page/jovens/jovens.component').then(m => m.JovensComponent)
    },

];
