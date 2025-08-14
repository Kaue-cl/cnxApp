import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'jovens',
        loadComponent: () => import('./page/jovens/jovens.component').then(m => m.JovensComponent)
    },
    {
        path: 'departamento',
        loadComponent: () => import('./page/departamento/departamento.component').then(m => m.DepartamentoComponent)
    },
    {
        path: 'participacao',
        loadComponent: () => import('./page/participacao/participacao.component').then(m => m.ParticipacaoComponent)
    },
    {
        path: 'presenca',
        loadComponent: () => import('./page/presenca/presenca.component').then(m => m.PresencaComponent)
    }

];
