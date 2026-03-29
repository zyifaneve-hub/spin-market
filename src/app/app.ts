import { ChangeDetectionStrategy, Component, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container transition-colors duration-300">
      <!-- TopAppBar -->
      <header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-2xl shadow-primary/5 bg-gradient-to-b from-surface-container-low to-transparent transition-colors duration-300">
        <div class="flex justify-between items-center px-6 py-4 w-full">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary active:scale-95 transition-transform cursor-pointer">menu</span>
            <h1 class="text-xl md:text-2xl font-black tracking-tighter text-on-surface font-headline uppercase leading-relaxed cursor-pointer" routerLink="/">SPINMARKET</h1>
          </div>
          <div class="flex items-center gap-6">
            <nav class="hidden md:flex gap-8 font-headline tracking-[0.02em] font-bold text-sm uppercase">
              <a routerLink="/" class="text-on-surface/60 hover:text-primary transition-colors duration-300" routerLinkActive="!text-primary" [routerLinkActiveOptions]="{exact: true}">Crate</a>
              <a routerLink="/search" class="text-on-surface/60 hover:text-primary transition-colors duration-300" routerLinkActive="!text-primary">Market</a>
              <a routerLink="/profile" class="text-on-surface/60 hover:text-primary transition-colors duration-300" routerLinkActive="!text-primary">Profile</a>
            </nav>
            <button (click)="toggleTheme()" class="text-on-surface/60 hover:text-primary transition-colors duration-300 flex items-center justify-center p-2 rounded-full hover:bg-surface-container">
              <span class="material-symbols-outlined">{{ isDark() ? 'light_mode' : 'dark_mode' }}</span>
            </button>
          </div>
        </div>
        <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-on-surface/10 to-transparent"></div>
      </header>

      <main class="flex-grow pt-16 pb-24 relative overflow-hidden">
        <router-outlet></router-outlet>
      </main>

      <!-- BottomNavBar -->
      <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 h-20 bg-background/90 backdrop-blur-lg border-t border-on-surface/10 rounded-t-[32px] shadow-[0_-10px_40px_rgba(255,0,0,0.04)] px-8 pb-safe flex justify-around items-center transition-colors duration-300">
        <a routerLink="/" class="flex flex-col items-center justify-center text-on-surface/40 hover:text-primary transition-all active:scale-90 duration-200" routerLinkActive="!text-primary scale-110" [routerLinkActiveOptions]="{exact: true}">
          <span class="material-symbols-outlined mb-1">home</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Home</span>
        </a>
        <a routerLink="/search" class="flex flex-col items-center justify-center text-on-surface/40 hover:text-primary transition-all active:scale-90 duration-200" routerLinkActive="!text-primary scale-110">
          <span class="material-symbols-outlined mb-1">search</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Search</span>
        </a>
        <a routerLink="/wantlist" class="flex flex-col items-center justify-center text-on-surface/40 hover:text-primary transition-all active:scale-90 duration-200" routerLinkActive="!text-primary scale-110">
          <span class="material-symbols-outlined mb-1" [style.font-variation-settings]="'FILL 1'">favorite</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Wantlist</span>
        </a>
        <a routerLink="/profile" class="flex flex-col items-center justify-center text-on-surface/40 hover:text-primary transition-all active:scale-90 duration-200" routerLinkActive="!text-primary scale-110">
          <span class="material-symbols-outlined mb-1" [style.font-variation-settings]="'FILL 1'">person</span>
          <span class="font-body text-[10px] font-medium tracking-wider uppercase">Profile</span>
        </a>
      </nav>
    </div>
  `
})
export class App {
  isDark = signal(false);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Initialize theme based on current class or system preference
    if (isPlatformBrowser(this.platformId)) {
      const isDarkClass = this.document.documentElement.classList.contains('dark');
      const isLightClass = this.document.documentElement.classList.contains('light');
      
      if (isDarkClass) {
        this.isDark.set(true);
      } else if (isLightClass) {
        this.isDark.set(false);
      } else {
        // Default to light
        this.isDark.set(false);
      }
    }
    
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.isDark()) {
          this.document.documentElement.classList.remove('light');
          this.document.documentElement.classList.add('dark');
        } else {
          this.document.documentElement.classList.remove('dark');
          this.document.documentElement.classList.add('light');
        }
      }
    });
  }

  toggleTheme() {
    this.isDark.update(d => !d);
  }
}
