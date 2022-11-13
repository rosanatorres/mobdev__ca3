import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../characters/characters.module').then(
                (m) => m.CharactersPageModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../character_details/character_details.module').then(
                (m) => m.CharacterDetailsPageModule
              ),
          },
        ],
      },
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../episodes/episodes.module').then(
                (m) => m.EpisodesPageModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../episode_details/episode_details.module').then(
                (m) => m.EpisodeDetailsPageModule
              ),
          },
        ],
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../quotes/quotes.module').then((m) => m.QuotesPageModule),
          },
        ],
      },
      {
        path: 'deaths',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deaths/deaths.module').then((m) => m.DeathsPageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/characters',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
