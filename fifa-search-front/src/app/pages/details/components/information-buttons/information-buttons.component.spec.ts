import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { InformationButtonsComponent } from './information-buttons.component';
import { ConfirmDialogComponent } from 'src/app/shared/material/confirm-dialog/confirm-dialog.component';
import { FutApiService } from 'src/app/service/fut-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { cardsMock } from 'src/app/core/models/test/mock-models';

@Component({
    selector: 'app-test', template: '',
    standalone: true,
    imports: [MatSnackBarModule, MatDialogModule, MatIconModule, RouterTestingModule, HttpClientTestingModule]
}) // Mock component for MatDialog
class TestComponent { }

describe('InformationButtonsComponent', () => {
  let component: InformationButtonsComponent;
  let fixture: ComponentFixture<InformationButtonsComponent>;
  let snackBar: MatSnackBar;
  let dialog: MatDialog;
  let router: Router;
  let futApiService: FutApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatSnackBarModule, MatDialogModule, MatIconModule, RouterTestingModule, HttpClientTestingModule, InformationButtonsComponent, TestComponent],
    providers: [FutApiService]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationButtonsComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
    dialog = TestBed.inject(MatDialog);
    router = TestBed.inject(Router);
    futApiService = TestBed.inject(FutApiService);
    spyOn(dialog, 'open').and.returnValue({ afterClosed: () => of(true) } as MatDialogRef<ConfirmDialogComponent>); // Mocking MatDialogRef afterClosed method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog and call deletePlayer when dialogDeletePlayer is called', () => {
    const playerId = '1111';
    spyOn(component, 'deletePlayer');
    component.dialogDeletePlayer(playerId);
    expect(dialog.open).toHaveBeenCalledWith(ConfirmDialogComponent, { data: { message: 'Tem certeza que deseja deletar este jogador?' } });
    expect(component.deletePlayer).toHaveBeenCalledWith(playerId);
  });
// Corrija a função abaixo para que ela chame o método futApiService.httpDeleteCardById, o método router.navigateByUrl e o método snackBar.open com os valores esperados
it('should call futApiService.deleteCardById, navigate and show snackbar when deletePlayer is called', () => {
  const playerId = '1111';

  const mockPlayer = cardsMock[0];

  // Crie um spy para o futApiService.deleteCardById e retorne um Observable válido
  // na verdade ele precisa retornar um Observable<void>, mas como não temos um valor de retorno, podemos usar o of(void)
  spyOn(futApiService, 'httpDeleteCardById').and.returnValue(of(void 0));
  spyOn(router, 'navigateByUrl');
  spyOn(snackBar, 'open');

  component.deletePlayer(playerId);

   // Verifique se o método futApiService.deleteCardById foi chamado corretamente
   expect(futApiService.httpDeleteCardById).toHaveBeenCalledWith(playerId);

   // Verifique se o método router.navigateByUrl foi chamado com o valor esperado
   expect(router.navigateByUrl).toHaveBeenCalledWith('');

   // Verifique se o método snackBar.open foi chamado com os valores esperados
   expect(snackBar.open).toHaveBeenCalledWith('Jogador deletado com sucesso!', 'Fechar', { duration: 3000 });
});
  // it('should call futApiService.deleteCardById, navigate and show snackbar when deletePlayer is called', () => {
  //   const playerId = '1111';

  //   const mockPlayer = cardsMock[0];

  //   // Crie um spy para o futApiService.deleteCardById e retorne um Observable válido
  //   // na verdade ele precisa retornar um Observable<void>, mas como não temos um valor de retorno, podemos usar o of(void)
  //   spyOn(futApiService, 'httpDeleteCardById').and.returnValue(of<void>());

  //   spyOn(router, 'navigateByUrl');
  //   spyOn(snackBar, 'open');

  //   component.deletePlayer(playerId);

  //   // Verifique se o método futApiService.deleteCardById foi chamado corretamente
  //   expect(futApiService.httpDeleteCardById).toHaveBeenCalledWith(playerId);

  //   // Verifique se o método router.navigateByUrl foi chamado com o valor esperado
  //   expect(router.navigateByUrl).toHaveBeenCalledWith('');

  //   // Verifique se o método snackBar.open foi chamado com os valores esperados
  //   expect(snackBar.open).toHaveBeenCalledWith('Jogador deletado com sucesso!', 'Fechar', { duration: 3000 });
  // });
});
