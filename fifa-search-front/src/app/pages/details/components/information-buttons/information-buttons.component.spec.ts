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

@Component({ selector: 'app-test', template: '' }) // Mock component for MatDialog
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
      declarations: [InformationButtonsComponent, TestComponent],
      imports: [MatSnackBarModule, MatDialogModule, MatIconModule, RouterTestingModule, HttpClientTestingModule],
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

  it('should call futApiService.deleteCardById, navigate and show snackbar when deletePlayer is called', () => {
    const playerId = '1111';

    const mockPlayer = cardsMock[0];
  
    // Crie um spy para o futApiService.deleteCardById e retorne um Observable válido
    spyOn(futApiService, 'deleteCardById').and.returnValue(of(mockPlayer));
  
    spyOn(router, 'navigateByUrl');
    spyOn(snackBar, 'open');
  
    component.deletePlayer(playerId);
  
    // Verifique se o método futApiService.deleteCardById foi chamado corretamente
    expect(futApiService.deleteCardById).toHaveBeenCalledWith(playerId);
  
    // Verifique se o método router.navigateByUrl foi chamado com o valor esperado
    expect(router.navigateByUrl).toHaveBeenCalledWith('');
  
    // Verifique se o método snackBar.open foi chamado com os valores esperados
    expect(snackBar.open).toHaveBeenCalledWith('Jogador deletado com sucesso!', 'Fechar', { duration: 3000 });
  });
});
