import { Component, OnInit } from '@angular/core';

import { CharacterService,CharactersModel } from '../shared/character.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    characters: CharactersModel[];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }
}