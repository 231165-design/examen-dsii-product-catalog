import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <div class="card bg-primary text-white mb-4">
        <div class="card-body text-center">
          <h1>CATÁLOGO DE PRODUCTOS - DSII</h1>
          <p class="mb-0">Examen Práctico | Sistema Dinámico</p>
        </div>
      </div>

      <div class="alert alert-info">
        <strong>Modo DEMO:</strong> Backend no disponible. Mostrando datos de prueba.
      </div>

      <div class="row">
        <!-- Categorías -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Categorías</h5>
            </div>
            <div class="card-body">
              <select class="form-select mb-3" (change)="onFilter($event)">
                <option value="">Todas</option>
                <option value="1">Electrónica</option>
                <option value="2">Ropa</option>
                <option value="3">Hogar</option>
              </select>
              
              <div class="list-group">
                <div class="list-group-item">
                  <strong>Electrónica</strong>
                  <small class="d-block text-muted">3 productos</small>
                </div>
                <div class="list-group-item">
                  <strong>Ropa</strong>
                  <small class="d-block text-muted">2 productos</small>
                </div>
                <div class="list-group-item">
                  <strong>Hogar</strong>
                  <small class="d-block text-muted">1 producto</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Productos -->
        <div class="col-md-8">
          <div class="card">
            <div class="card-header bg-warning">
              <h5 class="mb-0">Productos (6)</h5>
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Smartphone Pro</td>
                    <td class="text-success fw-bold">$799.99</td>
                    <td><span class="badge bg-success">25</span></td>
                    <td><span class="badge bg-primary">Electrónica</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Laptop Gaming</td>
                    <td class="text-success fw-bold">$1,299.99</td>
                    <td><span class="badge bg-warning">12</span></td>
                    <td><span class="badge bg-primary">Electrónica</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Camiseta</td>
                    <td class="text-success fw-bold">$24.99</td>
                    <td><span class="badge bg-success">100</span></td>
                    <td><span class="badge bg-success">Ropa</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-center text-muted">
        <p class="mb-0">
          <strong>Examen DSII</strong> | Angular + Spring Boot | Arquitectura N-Capas
        </p>
      </div>
    </div>
  `
})
export class AppComponent {
  onFilter(event: any) {
    console.log('Filtrando:', event.target.value);
  }
}
