import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './modules/autenticacao/recuperar-senha/recuperar-senha.component';
import { RegistroComponent } from './modules/autenticacao/registro/registro.component';
import { ListagemComponent } from './modules/gerenciamento-coletas/listagem/listagem.component';
import { MapaComponent } from './modules/gerenciamento-coletas/mapa/mapa.component';
import { PesquisaComponent } from './modules/gerenciamento-coletas/pesquisa/pesquisa.component';
import { ChatComponent } from './modules/interacao-negociacao/chat/chat.component';
import { DashboardColetorComponent } from './modules/interacao-negociacao/dashboard-coletor/dashboard-coletor.component';
import { PerfilComponent } from './modules/interacao-negociacao/perfil/perfil.component';
import { RegistroNegociacaoComponent } from './modules/interacao-negociacao/registro-negociacao/registro-negociacao.component';
import { AgendaComponent } from './modules/planejamento-gestao/agenda/agenda.component';
import { DashboardDescartadorComponent } from './modules/planejamento-gestao/dashboard-descartador/dashboard-descartador.component';
import { PlanejamentoRotasComponent } from './modules/planejamento-gestao/planejamento-rotas/planejamento-rotas.component';
import { PerfilCargaComponent } from './modules/interacao-negociacao/perfil/perfil-carga/perfil-carga.component';
import { PerfilColetaComponent } from './modules/interacao-negociacao/perfil/perfil-coleta/perfil-coleta.component';
import { PerfilEnderecoComponent } from './modules/interacao-negociacao/perfil/perfil-endereco/perfil-endereco.component';
import { PerfilFotoComponent } from './modules/interacao-negociacao/perfil/perfil-foto/perfil-foto.component';
import { PerfilInfoComponent } from './modules/interacao-negociacao/perfil/perfil-info/perfil-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalColetaDescricaoComponent } from './modules/interacao-negociacao/registro-negociacao/modal-coleta-descricao/modal-coleta-descricao.component';
import { ModalRegistroNegociacaoComponent } from './modules/interacao-negociacao/registro-negociacao/modal-registro-negociacao/modal-registro-negociacao.component';


// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { DcColetasAgendadasComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-coletas-agendadas/dc-coletas-agendadas.component';
import { DcDesempenhoSemanalComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-desempenho-semanal/dc-desempenho-semanal.component';
import { DcFooterComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-footer/dc-footer.component';
import { DcHistoricoDeColetasComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-historico-de-coletas/dc-historico-de-coletas.component';
import { DcHistoricoDesempenhoComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-historico-desempenho/dc-historico-desempenho.component';
import { DcMapaDeColetasComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-mapa-de-coletas/dc-mapa-de-coletas.component';
import { DcMinimapaDeColetasComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-minimapa-de-coletas/dc-minimapa-de-coletas.component';
import { DcNavbarComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-navbar/dc-navbar.component';
import { DcPerfilComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-perfil/dc-perfil.component';
import { DcTabsComponent } from './modules/interacao-negociacao/dashboard-coletor/dc-tabs/dc-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    RegistroComponent,
    ListagemComponent,
    MapaComponent,
    PesquisaComponent,
    ChatComponent,
    DashboardColetorComponent,
    PerfilComponent,
    RegistroNegociacaoComponent,
    AgendaComponent,
    DashboardDescartadorComponent,
    PlanejamentoRotasComponent,
    PerfilCargaComponent,
    PerfilColetaComponent,
    PerfilEnderecoComponent,
    PerfilFotoComponent,
    PerfilInfoComponent,
    ModalColetaDescricaoComponent,
    ModalRegistroNegociacaoComponent,
    DcColetasAgendadasComponent,
    DcDesempenhoSemanalComponent,
    DcFooterComponent,
    DcHistoricoDeColetasComponent,
    DcHistoricoDesempenhoComponent,
    DcMapaDeColetasComponent,
    DcMinimapaDeColetasComponent,
    DcNavbarComponent,
    DcPerfilComponent,
    DcTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
