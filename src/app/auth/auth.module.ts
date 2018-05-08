import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AuthService } from './store/auth.service'
import { AuthGuard } from './store/auth-guard.service'

import { reducer, stateIdent } from './store/auth.reducer'
import { AuthEffects } from './store/auth.effects'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(stateIdent, reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
