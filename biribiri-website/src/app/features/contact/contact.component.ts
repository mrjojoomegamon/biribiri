import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div class="max-w-container mx-auto px-4 text-center">
        <div class="animate-fade-up">
          <h1 class="text-title font-black uppercase tracking-wider text-text-primary mb-6">
            COMIENZA TU
            <span class="block text-accent">TRANSFORMACIÓN</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Primera consulta gratuita para evaluar tu situación actual y diseñar 
            un plan personalizado que te lleve al siguiente nivel.
          </p>
          
          <!-- Contact Stats -->
          <div class="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div class="text-center">
              <div class="text-2xl font-black text-accent">24H</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">Respuesta</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-accent">FREE</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">1ª Consulta</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-accent">7/7</div>
              <div class="text-xs font-semibold uppercase tracking-wider text-text-secondary">Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="py-12 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Phone -->
          <div class="bg-bg-primary p-6 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              LLAMADA DIRECTA
            </h3>
            <p class="text-text-secondary mb-4 text-sm">
              Habla directamente conmigo para casos urgentes
            </p>
            <a href="tel:+1234567890" class="text-accent hover:text-accent-hover font-bold text-lg transition-colors">
              +1 234 567 8900
            </a>
          </div>

          <!-- WhatsApp -->
          <div class="bg-bg-primary p-6 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              WHATSAPP
            </h3>
            <p class="text-text-secondary mb-4 text-sm">
              Respuesta rápida y asesoramiento inmediato
            </p>
            <a href="https://wa.me/1234567890" class="text-green-500 hover:text-green-400 font-bold text-lg transition-colors">
              Enviar Mensaje
            </a>
          </div>

          <!-- Email -->
          <div class="bg-bg-primary p-6 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              EMAIL
            </h3>
            <p class="text-text-secondary mb-4 text-sm">
              Para consultas detalladas y documentación
            </p>
            <a href="mailto:info@biribiri.com" class="text-accent hover:text-accent-hover font-bold text-lg transition-colors">
              info@biribiri.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <!-- Form -->
          <div>
            <div class="mb-8">
              <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
                AGENDA TU CONSULTA
              </h2>
              <p class="text-text-secondary">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </div>

            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <!-- Personal Info -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">
                    Nombre Completo *
                  </label>
                  <input 
                    type="text"
                    formControlName="name"
                    [class]="getInputClasses('name')"
                    placeholder="Tu nombre completo">
                  <div 
                    *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                    class="mt-1 text-accent text-sm">
                    El nombre es obligatorio
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    formControlName="email"
                    [class]="getInputClasses('email')"
                    placeholder="tu@email.com">
                  <div 
                    *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    class="mt-1 text-accent text-sm">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">El email es obligatorio</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Email no válido</span>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">
                    Teléfono *
                  </label>
                  <input 
                    type="tel"
                    formControlName="phone"
                    [class]="getInputClasses('phone')"
                    placeholder="+34 600 000 000">
                  <div 
                    *ngIf="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched"
                    class="mt-1 text-accent text-sm">
                    El teléfono es obligatorio
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">
                    Tipo de Servicio
                  </label>
                  <select 
                    formControlName="service"
                    [class]="getInputClasses('service')">
                    <option value="">Selecciona un servicio</option>
                    <option value="sports">Fisioterapia Deportiva</option>
                    <option value="rehabilitation">Rehabilitación</option>
                    <option value="wellness">Bienestar Preventivo</option>
                    <option value="consultation">Consulta General</option>
                  </select>
                </div>
              </div>

              <!-- Appointment Type -->
              <div>
                <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
                  Tipo de Cita
                </label>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="relative">
                    <input 
                      type="radio" 
                      name="appointmentType" 
                      value="consultation"
                      formControlName="appointmentType"
                      class="sr-only">
                    <div [class]="getRadioClasses('consultation')">
                      <div class="text-center">
                        <div class="text-2xl mb-2">🩺</div>
                        <div class="font-bold text-sm uppercase tracking-wider">CONSULTA</div>
                        <div class="text-xs text-text-secondary mt-1">Evaluación inicial gratuita</div>
                      </div>
                    </div>
                  </label>

                  <label class="relative">
                    <input 
                      type="radio" 
                      name="appointmentType" 
                      value="treatment"
                      formControlName="appointmentType"
                      class="sr-only">
                    <div [class]="getRadioClasses('treatment')">
                      <div class="text-center">
                        <div class="text-2xl mb-2">💪</div>
                        <div class="font-bold text-sm uppercase tracking-wider">TRATAMIENTO</div>
                        <div class="text-xs text-text-secondary mt-1">Sesión de fisioterapia</div>
                      </div>
                    </div>
                  </label>

                  <label class="relative">
                    <input 
                      type="radio" 
                      name="appointmentType" 
                      value="followup"
                      formControlName="appointmentType"
                      class="sr-only">
                    <div [class]="getRadioClasses('followup')">
                      <div class="text-center">
                        <div class="text-2xl mb-2">📋</div>
                        <div class="font-bold text-sm uppercase tracking-wider">SEGUIMIENTO</div>
                        <div class="text-xs text-text-secondary mt-1">Revisión de progreso</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">
                  Mensaje
                </label>
                <textarea 
                  formControlName="message"
                  rows="4"
                  [class]="getInputClasses('message')"
                  placeholder="Cuéntanos sobre tu situación actual, objetivos, lesiones previas o cualquier información relevante..."></textarea>
              </div>

              <!-- Privacy Policy -->
              <div class="flex items-start space-x-3">
                <input 
                  type="checkbox"
                  id="privacy"
                  formControlName="privacy"
                  class="mt-1 h-4 w-4 text-accent bg-bg-secondary border-border rounded focus:ring-accent focus:ring-2">
                <label for="privacy" class="text-sm text-text-secondary">
                  Acepto la <a href="#" class="text-accent hover:text-accent-hover underline">política de privacidad</a> 
                  y el tratamiento de mis datos personales para contactarme sobre los servicios solicitados.
                </label>
              </div>
              <div 
                *ngIf="contactForm.get('privacy')?.invalid && contactForm.get('privacy')?.touched"
                class="text-accent text-sm -mt-4">
                Debes aceptar la política de privacidad
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <app-button 
                  type="submit"
                  size="lg" 
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="w-full">
                  <span *ngIf="!isSubmitting">ENVIAR SOLICITUD</span>
                  <span *ngIf="isSubmitting" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </span>
                </app-button>
              </div>
            </form>

            <!-- Success Message -->
            <div 
              *ngIf="showSuccessMessage"
              class="mt-6 p-6 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 class="font-bold text-green-400 mb-1">¡Mensaje enviado correctamente!</h3>
                  <p class="text-green-300 text-sm">Te contactaremos en las próximas 24 horas.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Info Sidebar -->
          <div class="space-y-8">
            
            <!-- Office Info -->
            <div class="bg-bg-secondary p-8 rounded-lg shadow-card">
              <h3 class="text-xl font-bold uppercase tracking-wider text-text-primary mb-6">
                INFORMACIÓN DE CONTACTO
              </h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-text-primary mb-1">CLÍNICA BIRIBIRI</h4>
                    <p class="text-text-secondary text-sm">
                      Calle Fisioterapia, 123<br>
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-text-primary mb-1">HORARIOS</h4>
                    <p class="text-text-secondary text-sm">
                      Lunes a Viernes: 8:00 - 20:00<br>
                      Sábados: 9:00 - 14:00<br>
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-text-primary mb-1">TELÉFONO</h4>
                    <p class="text-text-secondary text-sm">
                      +34 123 456 789<br>
                      <span class="text-accent">Emergencias 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div class="bg-bg-secondary p-8 rounded-lg shadow-card">
              <h3 class="text-xl font-bold uppercase tracking-wider text-text-primary mb-6">
                PREGUNTAS FRECUENTES
              </h3>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold text-text-primary mb-2">¿La primera consulta es realmente gratuita?</h4>
                  <p class="text-text-secondary text-sm">
                    Sí, ofrecemos una evaluación inicial gratuita de 30 minutos para conocer tu caso.
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-text-primary mb-2">¿Trabajáis con seguros médicos?</h4>
                  <p class="text-text-secondary text-sm">
                    Colaboramos con las principales aseguradoras. Consulta con tu seguro.
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-text-primary mb-2">¿Cuánto dura un tratamiento típico?</h4>
                  <p class="text-text-secondary text-sm">
                    Depende del caso, pero la mayoría de tratamientos duran entre 4-8 semanas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-0">
      <div class="w-full h-96 bg-bg-secondary relative">
        <!-- Placeholder for map -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-xl font-bold text-text-primary mb-2">NUESTRA UBICACIÓN</h3>
            <p class="text-text-secondary">Calle Fisioterapia, 123 - Madrid</p>
            <app-button class="mt-4" size="sm">
              ABRIR EN GOOGLE MAPS
            </app-button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      service: [''],
      appointmentType: ['consultation'],
      message: [''],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset({
          appointmentType: 'consultation'
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getInputClasses(fieldName: string): string {
    const baseClasses = 'w-full bg-bg-secondary border-2 rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none transition-colors';
    const field = this.contactForm.get(fieldName);
    
    if (field?.invalid && field?.touched) {
      return `${baseClasses} border-accent focus:border-accent`;
    } else if (field?.valid && field?.touched) {
      return `${baseClasses} border-green-500 focus:border-green-500`;
    } else {
      return `${baseClasses} border-border focus:border-accent`;
    }
  }

  getRadioClasses(value: string): string {
    const baseClasses = 'cursor-pointer border-2 rounded-lg p-4 transition-all duration-300 hover:border-accent';
    const isSelected = this.contactForm.get('appointmentType')?.value === value;
    
    if (isSelected) {
      return `${baseClasses} border-accent bg-accent bg-opacity-20 text-text-primary`;
    } else {
      return `${baseClasses} border-border bg-bg-secondary text-text-secondary`;
    }
  }
}