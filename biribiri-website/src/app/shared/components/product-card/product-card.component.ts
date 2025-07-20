import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Supplement } from '../../../core/models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="group bg-bg-secondary rounded-lg shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      
      <!-- Product Image -->
      <div class="relative h-64 overflow-hidden">
        <img 
          [src]="getProductImage()"
          [alt]="product.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        
        <!-- Stock Overlay -->
        <div 
          *ngIf="!product.inStock"
          class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div class="text-center">
            <div class="text-2xl font-black text-text-primary uppercase tracking-wider mb-2">
              AGOTADO
            </div>
            <div class="text-sm text-text-secondary">
              Próximamente disponible
            </div>
          </div>
        </div>

        <!-- Category Badge -->
        <div class="absolute top-4 left-4 bg-text-highlight text-bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {{ getCategoryName() }}
        </div>

        <!-- Sale Badge -->
        <div 
          *ngIf="isOnSale()"
          class="absolute top-4 right-4 bg-accent text-text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
          🔥 OFERTA
        </div>

        <!-- Quick Actions -->
        <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="flex space-x-2">
            <button class="flex-1 bg-bg-primary bg-opacity-90 text-text-primary py-2 px-4 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-accent transition-colors">
              Vista Rápida
            </button>
            <button class="bg-bg-primary bg-opacity-90 text-accent p-2 rounded-lg hover:bg-accent hover:text-text-primary transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Product Content -->
      <div class="p-6">
        <!-- Product Name -->
        <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2 group-hover:text-accent transition-colors">
          {{ product.name }}
        </h3>

        <!-- Product Description -->
        <p class="text-text-secondary mb-4 text-sm leading-relaxed">
          {{ product.description }}
        </p>

        <!-- Rating and Reviews -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-1">
            <div class="flex text-text-highlight">
              <span *ngFor="let star of getStars()">★</span>
            </div>
            <span class="text-sm text-text-secondary ml-2">
              {{ product.rating }} ({{ product.reviews }} reseñas)
            </span>
          </div>
        </div>

        <!-- Price -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <span 
              *ngIf="isOnSale()"
              class="text-lg text-text-secondary line-through mr-2">
              \${{ getOriginalPrice() }}
            </span>
            <span class="text-2xl font-black text-accent">
              \${{ product.price }}
            </span>
          </div>
          <div 
            *ngIf="isOnSale()"
            class="bg-accent text-text-primary px-2 py-1 rounded text-xs font-bold">
            -{{ getSalePercentage() }}%
          </div>
        </div>

        <!-- Quantity Selector (if in stock) -->
        <div 
          *ngIf="product.inStock"
          class="flex items-center space-x-3 mb-6">
          <span class="text-sm text-text-secondary font-semibold uppercase tracking-wider">
            Cantidad:
          </span>
          <div class="flex items-center border border-border rounded-lg">
            <button 
              (click)="decreaseQuantity()"
              class="px-3 py-1 text-text-secondary hover:text-accent transition-colors">
              -
            </button>
            <span class="px-4 py-1 text-text-primary font-semibold">
              {{ quantity }}
            </span>
            <button 
              (click)="increaseQuantity()"
              class="px-3 py-1 text-text-secondary hover:text-accent transition-colors">
              +
            </button>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <app-button 
          [class]="'w-full'"
          [disabled]="!product.inStock"
          (click)="addToCart()">
          <span *ngIf="product.inStock; else outOfStock">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6m1.5-6h10m0 0v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4z"></path>
            </svg>
            AÑADIR AL CARRITO
          </span>
          <ng-template #outOfStock>
            AGOTADO
          </ng-template>
        </app-button>

        <!-- Additional Info -->
        <div class="mt-4 text-center">
          <button class="text-accent hover:text-accent-hover font-semibold uppercase tracking-wider text-sm transition-colors">
            Ver Detalles Completos
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  @Input() product!: Supplement;
  quantity = 1;

  getProductImage(): string {
    return `https://via.placeholder.com/400x400/2a2a2a/e31e24?text=${encodeURIComponent(this.product.name)}`;
  }

  getCategoryName(): string {
    const categories: { [key: string]: string } = {
      'protein': 'PROTEÍNA',
      'vitamins': 'VITAMINAS',
      'performance': 'RENDIMIENTO',
      'recovery': 'RECUPERACIÓN'
    };
    return categories[this.product.category] || this.product.category.toUpperCase();
  }

  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  isOnSale(): boolean {
    return Math.random() > 0.7;
  }

  getOriginalPrice(): number {
    return Math.round(this.product.price * 1.2);
  }

  getSalePercentage(): number {
    return Math.round(((this.getOriginalPrice() - this.product.price) / this.getOriginalPrice()) * 100);
  }

  increaseQuantity(): void {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product.inStock) {
      console.log(`Adding ${this.quantity} of ${this.product.name} to cart`);
    }
  }
}