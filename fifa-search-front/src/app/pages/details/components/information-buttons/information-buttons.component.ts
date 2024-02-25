import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FutApiService } from 'src/app/service/fut-api.service';
import { ConfirmDialogComponent } from 'src/app/shared/material/confirm-dialog/confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-information-buttons',
    templateUrl: './information-buttons.component.html',
    styleUrls: ['./information-buttons.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatIconModule, RouterLink]
})
export class InformationButtonsComponent {

  @Input() public getId!: string;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private futApiService: FutApiService,
    ){}

  public dialogDeletePlayer(id: string): void {
    console.log(this.getId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Tem certeza que deseja deletar este jogador?' },
      
  });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.deletePlayer(id);
    });
  }

  public deletePlayer(id: string): void {
    this.futApiService.httpDeleteCardById(id).subscribe({
      next: () => {
        this.router.navigateByUrl('');
        this.snackBar.open('Jogador deletado com sucesso!', 'Fechar', {
          duration: 3000
        });
      },
      error: (error: Error) => {
        console.error('Erro ao deletar carta:', error);
      }
    });
  }
}
