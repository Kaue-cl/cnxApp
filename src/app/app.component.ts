import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Jovens', icon: 'pi pi-user' },
            { label: 'Departamento', icon: 'pi pi-briefcase' },
            { label: 'Participação', icon: 'pi pi-pen-to-square' },
            { label: 'Presença', icon: 'pi pi-calendar' },
        ];
    }
}