//RouterOutlet is one of the Router directives. When we import AppRoutingModule into AppModule,
//it allows us to add it inside the HTML file of our AppComponent, that way we can pass our routes
//so that it can interpret them and direct to the correct component.
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersPageModule)
  },
  {
    path: 'character-detail',
    loadChildren: () => import('./pages/character_details/character_details.module').then(m => m.CharacterDetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesPageModule)
  },
  {
    path: 'episode_details',
    loadChildren: () => import('./pages/episode_details/episode_details.module').then(m => m.EpisodeDetailsPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./pages/quotes/quotes.module').then(m => m.QuotesPageModule)
  },
  {
    path: 'deaths',
    loadChildren: () => import('./pages/deaths/deaths.module').then(m => m.DeathsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }