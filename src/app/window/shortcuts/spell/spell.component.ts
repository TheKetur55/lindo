import { Component } from '@angular/core';
import { SettingsService } from 'app/core/service/settings.service';

@Component({
    templateUrl: './spell.component.html',
    styleUrls: ['./spell.component.scss']
})
export class ShortcutsSpellComponent {

    constructor(
        public settingsService: SettingsService
    ) { }

    public range(start: number, end: number): Array<number> {
        let arr = [];

        for (let i = start; i <= end; i++)
            arr.push(i);

        return arr;
    }

}
