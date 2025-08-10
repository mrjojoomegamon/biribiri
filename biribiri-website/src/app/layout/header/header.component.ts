import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <header class="fixed top-0 w-full bg-black z-50 shadow-lg">
      <!-- Promotional Banner -->
      <div class="text-center py-3"
           [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'">
        <div class="max-w-container mx-auto px-4">
          <span class="text-lg font-black uppercase tracking-widest"
                [style.color]="'var(--text-primary)'">
            🔥 NUEVA LÍNEA DE SUPLEMENTOS DISPONIBLE
          </span>
          <app-button 
            variant="secondary" 
            size="sm" 
            class="ml-4">
            VER AHORA
          </app-button>
        </div>
      </div>

      <!-- Main Navigation -->
      <nav class="h-20 flex items-center justify-between max-w-container mx-auto px-4">
        <!-- Logo -->
        <div class="flex items-center">
          <a routerLink="/" class="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="assets/images/logo negro.jpg" 
              alt="BIRIBIRI Logo"
              class="h-16 w-auto">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            routerLink="/" 
            routerLinkActive="text-accent" 
            [routerLinkActiveOptions]="{exact: true}"
            class="text-sm font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
            INICIO
          </a>
          <a 
            routerLink="/servicios" 
            routerLinkActive="text-accent"
            class="text-sm font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
            SERVICIOS
          </a>
          <a 
            routerLink="/suplementos" 
            routerLinkActive="text-accent"
            class="text-sm font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
            SUPLEMENTOS
          </a>
          <a 
            routerLink="/sobre-mi" 
            routerLinkActive="text-accent"
            class="text-sm font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
            SOBRE MÍ
          </a>
          <a 
            routerLink="/contacto" 
            routerLinkActive="text-accent"
            class="text-sm font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors">
            CONTACTO
          </a>
        </div>

        <!-- Color Test Button (Always Visible) -->
        <button 
          (click)="toggleColorTheme()"
          class="md:hidden fixed top-4 right-4 z-50 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-full border-2 transition-all duration-300 shadow-lg"
          [style.background-color]="isBlueTheme ? '#00bff3' : '#e31e24'"
          [style.border-color]="isBlueTheme ? '#00bff3' : '#e31e24'"
          style="color: white;">
          {{ isBlueTheme ? '🔵' : '🔴' }}
        </button>

        <!-- CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Color Test Button Desktop -->
          <button 
            (click)="toggleColorTheme()"
            class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border-2 transition-all duration-300 shadow-lg hover:scale-105"
            [style.background-color]="isBlueTheme ? '#00bff3' : '#e31e24'"
            [style.border-color]="isBlueTheme ? '#00bff3' : '#e31e24'"
            style="color: white;">
            {{ isBlueTheme ? '🔵 AZUL' : '🔴 ROJO' }}
          </button>
          
          <div class="text-right">
            <div class="text-sm text-text-secondary">Agenda tu cita</div>
            <div class="text-lg font-bold" style="color: var(--accent)">+52 55 7426 4946</div>
          </div>
          <app-button routerLink="/contacto">
            RESERVAR CITA
          </app-button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-text-primary"
          (click)="toggleMobileMenu()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  [attr.d]="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'">
            </path>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div 
        class="md:hidden bg-bg-secondary border-t border-border transition-all duration-300"
        [class.hidden]="!mobileMenuOpen">
        <div class="px-4 py-6 space-y-4">
          <a 
            routerLink="/" 
            routerLinkActive="text-accent" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block text-lg font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
            (click)="toggleMobileMenu()">
            INICIO
          </a>
          <a 
            routerLink="/servicios" 
            routerLinkActive="text-accent"
            class="block text-lg font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
            (click)="toggleMobileMenu()">
            SERVICIOS
          </a>
          <a 
            routerLink="/suplementos" 
            routerLinkActive="text-accent"
            class="block text-lg font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
            (click)="toggleMobileMenu()">
            SUPLEMENTOS
          </a>
          <a 
            routerLink="/sobre-mi" 
            routerLinkActive="text-accent"
            class="block text-lg font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
            (click)="toggleMobileMenu()">
            SOBRE MÍ
          </a>
          <a 
            routerLink="/contacto" 
            routerLinkActive="text-accent"
            class="block text-lg font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
            (click)="toggleMobileMenu()">
            CONTACTO
          </a>
          <div class="pt-4 border-t border-border">
            <app-button class="w-full">
              RESERVAR CITA
            </app-button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isBlueTheme = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleColorTheme(): void {
    this.isBlueTheme = !this.isBlueTheme;
    
    if (this.isBlueTheme) {
      // Cambiar a tema azul #00bff3
      document.documentElement.style.setProperty('--accent', '#00bff3');
      document.documentElement.style.setProperty('--accent-hover', '#0095c7');
      document.documentElement.style.setProperty('--accent-rgb', '0, 191, 243');
      document.documentElement.style.setProperty('--text-highlight', '#00bff3');
    } else {
      // Volver al tema rojo original #e31e24
      document.documentElement.style.setProperty('--accent', '#e31e24');
      document.documentElement.style.setProperty('--accent-hover', '#c41e24');
      document.documentElement.style.setProperty('--accent-rgb', '227, 30, 36');
      document.documentElement.style.setProperty('--text-highlight', '#ffd700');
    }
  }
}