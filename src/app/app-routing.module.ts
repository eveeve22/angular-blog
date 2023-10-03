import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre-nos/sobre/sobre.component';
import { SugestaoComponent } from './pages/sugestoes/sugestao/sugestao.component';
import { ContateComponent } from './pages/contate-nos/contate/contate.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'sobre', component:SobreComponent},
{path:'sugestao', component:SugestaoComponent},
{path:'contate', component:ContateComponent},
{path:'content/:Id', component:ContentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
