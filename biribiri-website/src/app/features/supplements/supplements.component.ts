import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { DataService } from '../../core/services/data.service';
import { Supplement } from '../../core/models';

@Component({
  selector: 'app-supplements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent, ProductCardComponent],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div class="max-w-container mx-auto px-4 text-center">
        <div class="animate-fade-up">
          <div class="inline-block bg-accent px-4 py-2 rounded-full mb-6">
            <span class="text-sm font-bold uppercase tracking-wider text-text-primary">
              🌿 PRODUCTOS NATURALES
            </span>
          </div>
          <h1 class="text-title font-black uppercase tracking-wider text-text-primary mb-6">
            PRODUCTOS NATURALES
            <span class="block text-accent">PREMIUM</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Catálogo completo de productos naturales: aceites esenciales, cápsulas, líquidos,
            cremas y jabones artesanales para tu bienestar integral.
          </p>
          
          <!-- Hero Stats -->
          <div class="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div class="text-center">
              <div class="text-2xl font-black text-accent">100%</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">Pureza</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-accent">24H</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">Envío</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-accent">30D</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">Garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="py-12 bg-bg-secondary sticky top-32 z-40 border-b border-border">
      <div class="max-w-container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
          
          <!-- Search Bar -->
          <div class="relative flex-1 max-w-md">
            <input 
              type="text"
              [(ngModel)]="searchTerm"
              (input)="applyFilters()"
              placeholder="Buscar productos naturales..."
              class="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 pl-12 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors">
            <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-3">
            <button 
              (click)="filterByCategory('all')"
              [class]="getCategoryButtonClasses('all')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              TODOS
            </button>
            <button 
              (click)="filterByCategory('oils')"
              [class]="getCategoryButtonClasses('oils')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              ACEITES
            </button>
            <button 
              (click)="filterByCategory('capsules')"
              [class]="getCategoryButtonClasses('capsules')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              CÁPSULAS
            </button>
            <button 
              (click)="filterByCategory('liquids')"
              [class]="getCategoryButtonClasses('liquids')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              LÍQUIDOS
            </button>
            <button 
              (click)="filterByCategory('creams')"
              [class]="getCategoryButtonClasses('creams')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              CREMAS
            </button>
            <button 
              (click)="filterByCategory('soaps')"
              [class]="getCategoryButtonClasses('soaps')"
              class="px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              JABONES
            </button>
          </div>

          <!-- Sort Options -->
          <div class="flex items-center space-x-3">
            <span class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Ordenar:
            </span>
            <select 
              [(ngModel)]="sortBy"
              (change)="applyFilters()"
              class="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:border-accent focus:outline-none">
              <option value="name">Nombre</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Valorados</option>
              <option value="popularity">Más Populares</option>
            </select>
          </div>
        </div>

        <!-- Results Count -->
        <div class="mt-6 flex items-center justify-between">
          <p class="text-text-secondary">
            Mostrando {{ filteredSupplements.length }} de {{ supplements.length }} productos
          </p>
          
          <!-- View Toggle -->
          <div class="flex items-center space-x-2 bg-bg-primary rounded-lg p-1">
            <button 
              (click)="viewMode = 'grid'"
              [class]="viewMode === 'grid' ? 'bg-accent text-text-primary' : 'text-text-secondary hover:text-accent'"
              class="p-2 rounded transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <button 
              (click)="viewMode = 'list'"
              [class]="viewMode === 'list' ? 'bg-accent text-text-primary' : 'text-text-secondary hover:text-accent'"
              class="p-2 rounded transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid/List -->
    <section class="py-12 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        
        <!-- Grid View -->
        <div 
          *ngIf="viewMode === 'grid'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <app-product-card 
            *ngFor="let supplement of filteredSupplements; trackBy: trackBySupplementId"
            [product]="supplement">
          </app-product-card>
        </div>

        <!-- List View -->
        <div 
          *ngIf="viewMode === 'list'"
          class="space-y-6">
          <div 
            *ngFor="let supplement of filteredSupplements; trackBy: trackBySupplementId"
            class="bg-bg-secondary rounded-lg shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="flex flex-col md:flex-row">
              
              <!-- Product Image -->
              <div class="md:w-1/4 h-48 md:h-auto relative">
                <img 
  [src]="getSupplementImage(supplement.id)"
                  [alt]="supplement.name"
                  class="w-full h-full object-cover">
                <div 
                  *ngIf="!supplement.inStock"
                  class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <span class="text-text-primary font-bold uppercase tracking-wider">AGOTADO</span>
                </div>
              </div>

              <!-- Product Info -->
              <div class="md:w-3/4 p-6 flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <h3 class="text-xl font-bold uppercase tracking-wider text-text-primary mb-2">
                        {{ supplement.name }}
                      </h3>
                      <div class="inline-block bg-text-highlight text-bg-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                        {{ getCategoryName(supplement.category) }}
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="text-2xl font-black text-accent mb-1">
                        \${{ supplement.price }}
                      </div>
                      <div class="flex items-center space-x-1">
                        <span class="text-text-highlight">★</span>
                        <span class="text-sm text-text-secondary">{{ supplement.rating }} ({{ supplement.reviews }})</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-text-secondary mb-4 leading-relaxed">
                    {{ supplement.description }}
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center border border-border rounded-lg">
                      <button class="px-3 py-1 text-text-secondary hover:text-accent transition-colors">-</button>
                      <span class="px-4 py-1 text-text-primary font-semibold">1</span>
                      <button class="px-3 py-1 text-text-secondary hover:text-accent transition-colors">+</button>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-3">
                    <button class="text-accent hover:text-accent-hover transition-colors">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <app-button [disabled]="!supplement.inStock">
                      {{ supplement.inStock ? 'AÑADIR AL CARRITO' : 'AGOTADO' }}
                    </app-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div 
          *ngIf="filteredSupplements.length === 0"
          class="text-center py-20">
          <div class="text-6xl mb-6">🔍</div>
          <h3 class="text-2xl font-bold text-text-primary mb-4">
            No se encontraron productos
          </h3>
          <p class="text-text-secondary mb-8">
            Prueba ajustando los filtros o términos de búsqueda
          </p>
          <app-button (click)="clearFilters()">
            LIMPIAR FILTROS
          </app-button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            ¿POR QUÉ ELEGIR BIRIBIRI?
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Compromiso con la excelencia en cada producto
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              PUREZA 100%
            </h3>
            <p class="text-text-secondary text-sm">
              Aceites esenciales puros sin aditivos ni diluyentes
            </p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              ENTREGA RÁPIDA
            </h3>
            <p class="text-text-secondary text-sm">
              Envío en 24-48 horas a toda la República Mexicana
            </p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              GARANTÍA TOTAL
            </h3>
            <p class="text-text-secondary text-sm">
              30 días de garantía de satisfacción o devolución
            </p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              ASESORÍA ESPECIALIZADA
            </h3>
            <p class="text-text-secondary text-sm">
              Orientación profesional en aromaterapia y uso seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SupplementsComponent implements OnInit {
  supplements: Supplement[] = [];
  filteredSupplements: Supplement[] = [];
  searchTerm = '';
  activeCategory = 'all';
  sortBy = 'name';
  viewMode: 'grid' | 'list' = 'grid';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSupplements().subscribe(supplements => {
      this.supplements = supplements;
      this.filteredSupplements = supplements;
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.supplements];

    // Category filter
    if (this.activeCategory !== 'all') {
      filtered = filtered.filter(supplement => supplement.category === this.activeCategory);
    }

    // Search filter
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(supplement => 
        supplement.name.toLowerCase().includes(searchLower) ||
        supplement.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.reviews - a.reviews;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    this.filteredSupplements = filtered;
  }

  getCategoryButtonClasses(category: string): string {
    const baseClasses = 'border-2 transition-all duration-300';
    const activeClasses = 'bg-accent border-accent text-text-primary';
    const inactiveClasses = 'bg-transparent border-border text-text-secondary hover:border-accent hover:text-accent';
    
    return `${baseClasses} ${this.activeCategory === category ? activeClasses : inactiveClasses}`;
  }

  getCategoryName(category: string): string {
    const categories: { [key: string]: string } = {
      'oils': 'ACEITES',
      'capsules': 'CÁPSULAS',
      'liquids': 'LÍQUIDOS',
      'creams': 'CREMAS',
      'soaps': 'JABONES'
    };
    return categories[category] || category.toUpperCase();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.activeCategory = 'all';
    this.sortBy = 'name';
    this.applyFilters();
  }

  trackBySupplementId(index: number, supplement: Supplement): string {
    return supplement.id;
  }

  getSupplementImage(id: string): string {
    const images: { [key: string]: string } = {
      // ACEITES ESENCIALES
      '1': 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Canela
      '2': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Pino
      '3': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Bergamota
      '4': 'https://images.unsplash.com/photo-1571841842169-9e1b6203af2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Romero
      '5': 'https://images.unsplash.com/photo-1542843137-8791a6904d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Pomelo
      '6': 'https://images.unsplash.com/photo-1581839761415-e3e42515abac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Anís Estrella
      '7': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Limón
      '8': 'https://images.unsplash.com/photo-1611892448416-b4d8e4929dbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Lavanda
      '9': 'https://images.unsplash.com/photo-1599181064012-06d23de5c58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jengibre
      '10': 'https://images.unsplash.com/photo-1570546421935-aa4de82d75d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Menta
      '11': 'https://images.unsplash.com/photo-1576773740275-46ac73f37eed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Clavo
      '12': 'https://images.unsplash.com/photo-1616690553171-c60fc6f8ecff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Eucalipto
      '13': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Naranja
      '14': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Sándalo
      '15': 'https://images.unsplash.com/photo-1471947295511-d5ae59bfb1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Tomillo
      '16': 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Árbol del Té
      '17': 'https://images.unsplash.com/photo-1615379292090-3a5e5adf19e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Hierbabuena
      '18': 'https://images.unsplash.com/photo-1584552080143-56c94e5ba2b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Aceite Tos y Gripe
      '19': 'https://images.unsplash.com/photo-1608798139665-9e7b8ec63a9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Relajación y Estrés
      '20': 'https://images.unsplash.com/photo-1597747216704-5b851b17fe18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Caída del Pelo
      
      // CÁPSULAS
      '21': 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Glucosamina
      '22': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Hongos Complex
      '23': 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Hígado y Vesícula
      '24': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Alivgast Cápsulas
      '25': 'https://images.unsplash.com/photo-1602503799142-e31ba78a0e80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Melena de León
      '26': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Cholesterol Decrease
      '27': 'https://images.unsplash.com/photo-1610308866249-54a9d90d0e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Vitex and Maca
      '28': 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Ajo Negro
      '29': 'https://images.unsplash.com/photo-1569427433168-b8bf27ed4b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Ácido Úrico
      '30': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Baixar Pes
      '31': 'https://images.unsplash.com/photo-1550792743-c9da17f77eac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Cordyceps
      '32': 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Contdiabet
      '33': 'https://images.unsplash.com/photo-1593075631564-af0bdaaf98d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Reishi
      '34': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Ladocan
      '35': 'https://images.unsplash.com/photo-1526736330106-96fc65a4ac57?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Care Kidneys
      '36': 'https://images.unsplash.com/photo-1586254331156-4d4ca46b9e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Citrato de Magnesio
      '37': 'https://images.unsplash.com/photo-1608664547613-d9fdaa5c2d9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Cúrcuma + Pimienta
      
      // LÍQUIDOS
      '38': 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Alivgast Líquido
      '39': 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Circuvaric
      '40': 'https://images.unsplash.com/photo-1607613022516-acf87ec5e8dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Relaksim
      '41': 'https://images.unsplash.com/photo-1609205851270-e3a9be32e9ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Dolopian
      
      // CREMAS
      '42': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Antiarrugas
      '43': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Gel Reafirmante
      '44': 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Sérum Acné
      '45': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Peeling Químico
      '46': 'https://images.unsplash.com/photo-1612817288484-6661b1b88949?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Crema Despigmentadora
      '47': 'https://images.unsplash.com/photo-1608248543925-0c8b4dbaf329?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Contorno de Ojos
      
      // JABONES ARTESANALES
      '48': 'https://images.unsplash.com/photo-1600857544200-a6be9e-3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Romero
      '49': 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Anticaída
      '50': 'https://images.unsplash.com/photo-1585838062925-03b52b5cbfb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Avena y Miel
      '51': 'https://images.unsplash.com/photo-1600857544200-a6be9e7b6987?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Carbón Activado
      '52': 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Naranja y Café
      '53': 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Arroz
      '54': 'https://images.unsplash.com/photo-1602694595691-fa19b2f90db3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Lavanda
      '55': 'https://images.unsplash.com/photo-1617103996816-c04e8549e97a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Azufre
      '56': 'https://images.unsplash.com/photo-1588260739738-c3a43e2b35f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Perejil
      '57': 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Reductor
      '58': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Arcilla
      '59': 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Caléndula
      '60': 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Jabón Algas Marinas
      '61': 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'  // Jabón Ruda
    };
    return images[id] || 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
  }
}