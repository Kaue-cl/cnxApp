import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuModule, ToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Jovens', icon: 'pi pi-user', routerLink: '/jovens' },
            { label: 'Departamento', icon: 'pi pi-briefcase', routerLink: '/departamento' },
            { label: 'Participação', icon: 'pi pi-pen-to-square', routerLink: '/participacao' },
            { label: 'Presença', icon: 'pi pi-calendar', routerLink: '/presenca' },
        ];
    }
}