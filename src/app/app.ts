import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <!-- TopAppBar -->
      <header class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl shadow-2xl shadow-red-900/5 bg-gradient-to-b from-[#1C1B1B] to-transparent">
        <div class="flex justify-between items-center px-6 py-4 w-full">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-[#FF0000] active:scale-95 transition-transform cursor-pointer">menu</span>
            <h1 class="text-xl md:text-2xl font-black tracking-tighter text-[#E5E2E1] font-headline uppercase leading-relaxed cursor-pointer" routerLink="/">SPINMARKET</h1>
          </div>
          <div class="flex items-center gap-6">
            <nav class="hidden md:flex gap-8 font-headline tracking-[0.02em] font-bold text-sm uppercase">
              <a routerLink="/" class="text-[#E5E2E1]/60 hover:text-[#FFB4A8] transition-colors duration-300" routerLinkActive="!text-[#FF0000]" [routerLinkActiveOptions]="{exact: true}">Crate</a>
              <a routerLink="/search" class="text-[#E5E2E1]/60 hover:text-[#FFB4A8] transition-colors duration-300" routerLinkActive="!text-[#FF0000]">Market</a>
              <a routerLink="/profile" class="text-[#E5E2E1]/60 hover:text-[#FFB4A8] transition-colors duration-300" routerLinkActive="!text-[#FF0000]">Profile</a>
            </nav>
          </div>
        </div>
        <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E5E2E1]/10 to-transparent"></div>
      </header>

      <main class="flex-grow pt-16 pb-24 relative overflow-hidden">
        <router-outlet></router-outlet>
      </main>

      <!-- BottomNavBar -->
      <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 h-20 bg-[#131313]/90 backdrop-blur-lg border-t border-[#E5E2E1]/10 rounded-t-[32px] shadow-[0_-10px_40px_rgba(255,0,0,0.04)] px-8 pb-safe flex justify-around items-center">
        <a routerLink="/" class="flex flex-col items-center justify-center text-[#E5E2E1]/40 hover:text-[#FFB4A8] transition-all active:scale-90 duration-200" routerLinkActive="!text-[#FF0000] scale-110" [routerLinkActiveOptions]="{exact: true}">
          <span class="material-symbols-outlined mb-1">home</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Home</span>
        </a>
        <a routerLink="/search" class="flex flex-col items-center justify-center text-[#E5E2E1]/40 hover:text-[#FFB4A8] transition-all active:scale-90 duration-200" routerLinkActive="!text-[#FF0000] scale-110">
          <span class="material-symbols-outlined mb-1">search</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Search</span>
        </a>
        <a routerLink="/wantlist" class="flex flex-col items-center justify-center text-[#E5E2E1]/40 hover:text-[#FFB4A8] transition-all active:scale-90 duration-200" routerLinkActive="!text-[#FF0000] scale-110">
          <span class="material-symbols-outlined mb-1" [style.font-variation-settings]="'FILL 1'">favorite</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Wantlist</span>
        </a>
        <a routerLink="/profile" class="flex flex-col items-center justify-center text-[#E5E2E1]/40 hover:text-[#FFB4A8] transition-all active:scale-90 duration-200" routerLinkActive="!text-[#FF0000] scale-110">
          <span class="material-symbols-outlined mb-1" [style.font-variation-settings]="'FILL 1'">person</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Profile</span>
        </a>
      </nav>
    </div>
  `
})
export class App {}
