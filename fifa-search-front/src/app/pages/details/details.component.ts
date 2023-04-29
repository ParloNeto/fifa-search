import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { ClubService } from 'src/app/service/club.service';

import { FutApiService } from 'src/app/service/fut-api.service';
import { NationService } from 'src/app/service/nation.service';
import { AttributesDetailsAddCardComponent } from 'src/app/shared/fut-add-card/details-add-card/attributes-details-add-card/attributes-details-add-card.component';
import { ConfirmDialogComponent } from 'src/app/shared/material/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  private urlCard: string = '/cards';
  public photoUrl: string = '';
  public clubUrl: string = '';
  public nationUrl: string = '';
  public card: any = {};

  public colorOverall: string = '';
  public colorFontName: string = '';
  public colorPosition: string = '';
  public colorAttributes: string = '';

 
  public isLoading: boolean = false;
  public apiError: boolean = false;


  public cardTypeAdjustmentCss = this.cardService.cardTypeAdjustmentCss;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private futApiService: FutApiService,
    private cardService: CardService,
    private nationService: NationService,
    private clubService: ClubService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.futApiService.getCard(`${this.urlCard}/${id}`).subscribe((res) => {
        this.card = res;
        this.isLoading = true;
        this.getPhotoType();
        this.getNation();
        this.getClub();
      }, error => {
        this.apiError = true;
      });
    });
  }
  
  public getPhotoType(): void {
    const version = this.card.versionFifa;
      const typeCard = this.card.typeCard;
        if (version && typeCard) {
          this.cardService.getSpecificType(version, typeCard).subscribe(card => {
              this.photoUrl = card.photoUrl;
              this.colorFontName = card.colorText.colorFontName;
              this.colorOverall = card.colorText.colorOverall;
              this.colorPosition = card.colorText.colorPosition;
              this.colorAttributes = card.colorText.colorAttributes;
              console.log(`o valor é:`, typeCard, version, card.photoUrl);
          });
        }
   }

   public getNation(): void { 
    const nation = this.card.nationality;
      this.nationService.getSpecificNation(nation).subscribe(card => {
    if (nation) {
        this.nationUrl = card.nationUrl;
      console.log(this.nationUrl)
    } else{
      console.log('deu ruim')
    }
    });
  }

  public getClub(): void { 
    const club = this.card.club;
    this.clubService.getSpecificClub(club).subscribe(card => {
    if (club) {
        this.clubUrl = card.clubUrl;
      console.log(this.clubUrl)
    } else{
      console.log('deu ruim')
    }
    });
  }

    public dialogDeletePlayer(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Tem certeza que deseja deletar este jogador?'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletePlayer(id);
        this.router.navigateByUrl('');
        this.snackBar.open('Jogador deletado com sucesso!', 'Fechar', {
          duration: 3000 // duração da mensagem em milissegundos
        });
      }
    });
  }

  public deletePlayer(id: string): void {
    this.futApiService.deleteCardById(id).subscribe(
      (card) => {
        console.log(card);
      },
      (error) => {
        console.error('Erro ao deletar carta:', error);
      }
    );
  }

  public capitalizeFirstLetter(word: string): string {
    return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  }
}


