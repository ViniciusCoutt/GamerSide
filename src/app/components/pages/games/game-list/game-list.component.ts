import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { GameListService } from '@shared/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],

})
export class GameListComponent {

  games$ = this.gameListServ.games$;

  showBtn: boolean = false;
  private scrollHeight = 500;

  constructor(@Inject(DOCUMENT) private document: Document,
    private gameListServ: GameListService,
  ) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showBtn = (yOffSet || scrollTop) > this.scrollHeight;
  }

  scrollUp(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
