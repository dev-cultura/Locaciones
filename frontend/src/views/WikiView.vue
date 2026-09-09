<template>
  <div>
    <h1 class="mb-4">Wiki del proyecto</h1>

    <nav class="mb-4">
      <a href="#guia-git" class="btn btn-sm btn-outline-secondary me-2">Guia de Git</a>
      <a href="#guia-vue" class="btn btn-sm btn-outline-secondary me-2">Guia de Vue</a>
      <a href="#guia-grid" class="btn btn-sm btn-outline-secondary me-2">Guia de Grid</a>
      <a href="#guia-inputs" class="btn btn-sm btn-outline-secondary">Guia de Inputs</a>
    </nav>

    <section id="guia-git">
      <h2 class="mb-3">Guia rapida de Git</h2>

      <div class="card mb-4">
        <div class="card-body">
          <ul class="list-unstyled mb-0">
            <li class="mb-3">
              <p class="mb-1">Ver en que rama estas:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git status</code>
            </li>
            <li class="mb-3">
              <p class="mb-1">Ver las ramas locales:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git branch</code>
            </li>
            <li class="mb-3">
              <p class="mb-1">Obtener la lista de todas las ramas remotas:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git pull</code>
            </li>
            <li class="mb-3">
              <p class="mb-1">Traer los ultimos cambios de main:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git pull origin main</code>
            </li>
            <li class="mb-3">
              <p class="mb-1">Agregar todos los archivos al area de staging (antes de poder hacer commit):</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git add .</code>
            </li>
            <li class="mb-3">
              <p class="mb-1">Hacer un commit:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git commit -m "add a new .vue file called index"</code>
            </li>
            <li>
              <p class="mb-1">Subir tus cambios a la rama main:</p>
              <code class="d-block bg-dark text-light rounded px-2 py-1">$ git push</code>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="mb-3">Commit: Tipos y recomendaciones</h3>

      <div class="table-responsive mb-4">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 140px">Tipo</th>
              <th>Cuando usarlo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>new</code></td>
              <td>Nueva funcionalidad, regla o modulo.</td>
            </tr>
            <tr>
              <td><code>fix</code></td>
              <td>Reparar algun bug.</td>
            </tr>
            <tr>
              <td><code>style</code></td>
              <td>Modificaciones a puro estilo, cuando es frontend.</td>
            </tr>
            <tr>
              <td><code>refactor</code></td>
              <td>Modificacion del codigo fuente sin cambiar su comportamiento (limpiar el codigo).</td>
            </tr>
            <tr>
              <td><code>test</code></td>
              <td>Adiciones o modificaciones a casos de prueba.</td>
            </tr>
            <tr>
              <td><code>docs</code></td>
              <td>Cuando se agrega documentacion al proyecto (Repex, recurso de idioma, etc.).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="alert alert-secondary">
        <strong>MERGE</strong>: es cuando Git automaticamente te pide hacer un merge si has afectado alguna linea de codigo.
      </div>
      <div class="alert alert-secondary">
        <strong>VERSION 000</strong>: cuando se genera una nueva version en saas.
      </div>

      <h3 class="mb-3">Ejemplo de commit</h3>

      <ul class="list-unstyled">
        <li class="mb-2">
          ✅ <code>fix: se agrega validacion para campo de fecha en ComboBox</code>
          <span class="text-muted">(forma correcta de un commit)</span>
        </li>
        <li class="mb-2">
          ❌ <code>fix: Se agrega validacion para campo de fecha en ComboBox</code>
          <span class="text-muted">(no mayusculas)</span>
        </li>
        <li class="mb-2">
          ❌ <code>fix: se agregó validación para campo de fecha en ComboBox</code>
          <span class="text-muted">(no tiempo pasado)</span>
        </li>
      </ul>
    </section>

    <hr class="my-5" />

    <section id="guia-vue">
      <h2 class="mb-3">Guia rapida de Vue 3 (Options API)</h2>
      <p>
        Este proyecto usa Vue 3 con Options API (<code>data</code>, <code>methods</code>, <code>components</code>),
        que es el estilo usado en todos los archivos <code>.vue</code> de <code>src/views</code> y
        <code>src/components</code>.
      </p>

      <div class="card mb-4">
        <div class="card-header">Estructura de un componente <code>.vue</code></div>
        <div class="card-body">
          <pre v-pre class="bg-dark text-light rounded p-3 small mb-0"><code>&lt;template&gt;
  &lt;!-- HTML de la vista --&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MiComponente',
  data() {
    return {
      // variables reactivas del componente
    };
  },
  methods: {
    // funciones que se pueden llamar desde el template
  },
};
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="table-responsive mb-4">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 160px">Elemento</th>
              <th>Para que sirve</th>
              <th>Ejemplo (tomado del proyecto)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code v-pre>{{ }}</code></td>
              <td>Interpolacion: muestra el valor de una variable en el HTML.</td>
              <td><code v-pre>{{ error }}</code></td>
            </tr>
            <tr>
              <td><code>v-if</code></td>
              <td>Muestra u oculta un elemento segun una condicion.</td>
              <td><code v-pre>&lt;div v-if="error" class="alert alert-danger"&gt;</code></td>
            </tr>
            <tr>
              <td><code>v-for</code></td>
              <td>Repite un elemento por cada item de un arreglo.</td>
              <td><code v-pre>&lt;li v-for="u in usuarios" :key="u.id"&gt;</code></td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td>Enlaza un input con una variable de <code>data</code> (two-way binding).</td>
              <td><code v-pre>&lt;input v-model="email" type="email" /&gt;</code></td>
            </tr>
            <tr>
              <td><code>:atributo</code> <span class="text-muted">(v-bind)</span></td>
              <td>Enlaza un atributo HTML al valor de una variable.</td>
              <td><code v-pre>&lt;button :disabled="cargando"&gt;</code></td>
            </tr>
            <tr>
              <td><code>@evento</code> <span class="text-muted">(v-on)</span></td>
              <td>Ejecuta un metodo cuando ocurre un evento (click, submit, etc.).</td>
              <td><code v-pre>&lt;form @submit.prevent="enviarLogin"&gt;</code></td>
            </tr>
            <tr>
              <td><code>router-link</code></td>
              <td>Crea un enlace de navegacion sin recargar la pagina.</td>
              <td><code v-pre>&lt;router-link to="/login"&gt;Iniciar sesion&lt;/router-link&gt;</code></td>
            </tr>
            <tr>
              <td><code>router-view</code></td>
              <td>Dibuja el componente de la ruta activa (se usa una vez en <code>App.vue</code>).</td>
              <td><code v-pre>&lt;router-view /&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card mb-4">
        <div class="card-header">Ejemplo real: formulario de login (<code>LoginView.vue</code>)</div>
        <div class="card-body">
          <pre v-pre class="bg-dark text-light rounded p-3 small mb-0"><code>&lt;template&gt;
  &lt;form @submit.prevent="enviarLogin"&gt;
    &lt;input v-model="email" type="email" required /&gt;
    &lt;input v-model="password" type="password" required /&gt;
    &lt;div v-if="error" class="alert alert-danger"&gt;{{ error }}&lt;/div&gt;
    &lt;button type="submit" :disabled="cargando"&gt;Entrar&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return { email: '', password: '', error: '', cargando: false };
  },
  methods: {
    async enviarLogin() {
      // this.email y this.password ya tienen lo que el usuario escribio
      // gracias a v-model
    },
  },
};
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="alert alert-secondary mb-0">
        <strong>Tip:</strong> <code>this.algo</code> dentro de <code>methods</code> lee/escribe las variables
        declaradas en <code>data()</code>. Los componentes que se importan se registran en
        <code>components: { MiComponente }</code> y se usan en el template como
        <code v-pre>&lt;MiComponente /&gt;</code>.
      </div>
    </section>

    <hr class="my-5" />

    <section id="guia-grid">
      <h2 class="mb-3">Guia rapida del Grid (Bootstrap 5)</h2>

      <div class="alert alert-info">
        <strong>¿Que es un "grid"?</strong> Imagina una hoja dividida en <strong>12 franjas iguales</strong>, una
        al lado de la otra. Un "grid" (cuadricula) es simplemente eso: una forma de acomodar cosas en columnas sin
        tener que calcular medidas en pixeles a mano. Tu decides cuantas de esas 12 franjas ocupa cada cosa.
      </div>

      <p class="mb-1">Estas son las 12 franjas (columnas) en las que Bootstrap divide el ancho de la pantalla:</p>
      <div class="row g-1 mb-4 text-center">
        <div v-for="n in 12" :key="n" class="col bg-light border py-2 small">{{ n }}</div>
      </div>

      <p>
        Para usar el grid siempre se escriben 3 niveles, uno adentro del otro:
      </p>
      <div class="row mb-4 text-center g-2">
        <div class="col-md-4">
          <div class="border rounded p-3 h-100">
            <strong>1. container</strong>
            <p class="small text-muted mb-0">La caja grande que envuelve todo.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border rounded p-3 h-100">
            <strong>2. row</strong>
            <p class="small text-muted mb-0">Una fila, adentro del container.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border rounded p-3 h-100">
            <strong>3. col-*</strong>
            <p class="small text-muted mb-0">Las columnas, adentro de la fila.</p>
          </div>
        </div>
      </div>
      <pre v-pre class="bg-dark text-light rounded p-3 small">&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;...&lt;/div&gt;
    &lt;div class="col"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

      <h3 class="mb-3 mt-4">Ejemplos en vivo</h3>
      <div class="card mb-4">
        <div class="card-header">Vista previa en vivo</div>
        <div class="card-body">
          <p class="text-muted small">Achica o agranda la ventana del navegador para ver como se reacomodan.</p>

          <p class="mb-1">
            <code>col</code> (2 columnas de ancho automatico: Bootstrap reparte el espacio en partes iguales solo):
          </p>
          <div class="row mb-4 text-center">
            <div class="col bg-primary text-white py-3 border">col</div>
            <div class="col bg-primary text-white py-3 border">col</div>
          </div>

          <p class="mb-1"><code>col-6</code> + <code>col-6</code> (mitad y mitad, 6 + 6 = 12):</p>
          <div class="row mb-4 text-center">
            <div class="col-6 bg-info text-white py-3 border">col-6</div>
            <div class="col-6 bg-info text-white py-3 border">col-6</div>
          </div>

          <p class="mb-1"><code>col-4</code> x 3 (tres partes iguales, 4 + 4 + 4 = 12):</p>
          <div class="row mb-4 text-center">
            <div class="col-4 bg-secondary text-white py-3 border">col-4</div>
            <div class="col-4 bg-secondary text-white py-3 border">col-4</div>
            <div class="col-4 bg-secondary text-white py-3 border">col-4</div>
          </div>

          <p class="mb-1"><code>col-3</code> x 4 (cuatro partes iguales, 3 + 3 + 3 + 3 = 12):</p>
          <div class="row mb-4 text-center">
            <div class="col-3 bg-secondary text-white py-3 border">col-3</div>
            <div class="col-3 bg-secondary text-white py-3 border">col-3</div>
            <div class="col-3 bg-secondary text-white py-3 border">col-3</div>
            <div class="col-3 bg-secondary text-white py-3 border">col-3</div>
          </div>

          <p class="mb-1">
            <code>col-8</code> + <code>col-4</code> (dos columnas de distinto tamaño, tipo "contenido + barra lateral"):
          </p>
          <div class="row mb-4 text-center">
            <div class="col-8 bg-primary text-white py-3 border">col-8</div>
            <div class="col-4 bg-info text-white py-3 border">col-4</div>
          </div>

          <p class="mb-1">
            <code>row justify-content-center</code> + <code>col-md-5</code> (asi se ve el formulario de Login):
          </p>
          <div class="row mb-4 justify-content-center text-center">
            <div class="col-md-5 bg-success text-white py-3 border">col-md-5</div>
          </div>

          <p class="mb-1"><code>col-md-4 offset-md-4</code> (columna centrada dejando espacio en blanco a los lados):</p>
          <div class="row mb-4 text-center">
            <div class="col-md-4 offset-md-4 bg-warning text-dark py-3 border">col-md-4 offset-md-4</div>
          </div>

          <p class="mb-1">
            <code>col-12 col-md-6</code> (en celular ocupa toda la fila, en pantalla mediana en adelante se parte a la mitad):
          </p>
          <div class="row text-center">
            <div class="col-12 col-md-6 bg-danger text-white py-3 border">col-12 col-md-6</div>
            <div class="col-12 col-md-6 bg-danger text-white py-3 border">col-12 col-md-6</div>
          </div>
        </div>
      </div>

      <div class="alert alert-secondary">
        <strong>Receta rapida:</strong> para saber que numero poner, divide 12 entre cuantas columnas iguales
        quieres. ¿2 columnas iguales? 12 / 2 = <code>col-6</code>. ¿3 columnas iguales? 12 / 3 = <code>col-4</code>.
        ¿4 columnas iguales? 12 / 4 = <code>col-3</code>. ¿6 columnas iguales? 12 / 6 = <code>col-2</code>.
      </div>

      <div class="card mb-4">
        <div class="card-header">Ejemplo real: formulario centrado (<code>LoginView.vue</code>)</div>
        <div class="card-body">
          <pre v-pre class="bg-dark text-light rounded p-3 small mb-0"><code>&lt;div class="row justify-content-center"&gt;
  &lt;div class="col-md-5"&gt;
    &lt;!-- el formulario ocupa 5 de 12 columnas, solo desde el breakpoint md --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="table-responsive mb-4">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 220px">Clase</th>
              <th>Para que sirve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>container</code></td>
              <td>Contenedor con ancho maximo y margenes automaticos (centrado).</td>
            </tr>
            <tr>
              <td><code>container-fluid</code></td>
              <td>Contenedor de ancho 100%, sin maximo (lo usa <code>NavBar.vue</code>).</td>
            </tr>
            <tr>
              <td><code>row</code></td>
              <td>Fila; agrupa columnas y les aplica el espaciado negativo necesario para que encajen.</td>
            </tr>
            <tr>
              <td><code>col</code></td>
              <td>Columna de ancho automatico (se reparte el espacio en partes iguales).</td>
            </tr>
            <tr>
              <td><code>col-6</code>, <code>col-4</code>, ...</td>
              <td>Columna de ancho fijo en base a 12 (ej. <code>col-6</code> = mitad de la fila).</td>
            </tr>
            <tr>
              <td><code>col-md-5</code>, <code>col-lg-4</code>, ...</td>
              <td>
                Igual, pero aplica solo a partir de ese breakpoint. Breakpoints:
                <code>sm</code> (≥576px), <code>md</code> (≥768px), <code>lg</code> (≥992px), <code>xl</code> (≥1200px).
              </td>
            </tr>
            <tr>
              <td><code>justify-content-center</code></td>
              <td>Centra las columnas horizontalmente dentro de la fila.</td>
            </tr>
            <tr>
              <td><code>offset-md-3</code></td>
              <td>Deja un espacio en blanco de 3 columnas antes de esta columna.</td>
            </tr>
            <tr>
              <td><code>g-3</code>, <code>gx-3</code>, <code>gy-3</code></td>
              <td>Espacio (gutter) entre columnas/filas.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="alert alert-secondary mb-0">
        <strong>Tip:</strong> las columnas de una misma fila deben sumar como maximo 12. Si te pasas de 12,
        las columnas de mas "brincan" a una nueva linea automaticamente.
      </div>
    </section>

    <hr class="my-5" />

    <section id="guia-inputs">
      <h2 class="mb-3">Guia rapida de Inputs y formularios</h2>
      <p>
        Los formularios del proyecto combinan clases de Bootstrap para el estilo con <code>v-model</code> de Vue
        para conectar cada input a una variable de <code>data()</code>.
      </p>

      <div class="card mb-4">
        <div class="card-header">Vista previa en vivo (funciona de verdad, prueba a escribir)</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Texto (<code>form-control</code>)</label>
                <input v-model="demoTexto" type="text" class="form-control" placeholder="Escribe algo..." />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="demoEmail" type="email" class="form-control" placeholder="correo@ejemplo.com" />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="demoPassword" type="password" class="form-control" placeholder="********" />
              </div>
              <div class="mb-3">
                <label class="form-label">Textarea</label>
                <textarea v-model="demoTextarea" class="form-control" rows="2" placeholder="Un texto mas largo..."></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Select (<code>form-select</code>)</label>
                <select v-model="demoSelect" class="form-select">
                  <option value="">Elige una opcion</option>
                  <option value="admin">Administrador</option>
                  <option value="usuario">Usuario</option>
                </select>
              </div>
              <div class="mb-3 form-check">
                <input id="demoCheck" v-model="demoCheck" class="form-check-input" type="checkbox" />
                <label class="form-check-label" for="demoCheck">Checkbox (<code>form-check-input</code>)</label>
              </div>
              <div class="mb-3">
                <div class="form-check form-check-inline">
                  <input id="demoRadio1" v-model="demoRadio" class="form-check-input" type="radio" value="opcionA" />
                  <label class="form-check-label" for="demoRadio1">Opcion A</label>
                </div>
                <div class="form-check form-check-inline">
                  <input id="demoRadio2" v-model="demoRadio" class="form-check-input" type="radio" value="opcionB" />
                  <label class="form-check-label" for="demoRadio2">Opcion B</label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Ejemplo de error de validacion</label>
                <input type="text" class="form-control is-invalid" value="dato incorrecto" readonly />
                <div class="invalid-feedback">Este campo tiene un error (<code v-pre>is-invalid</code> + <code v-pre>invalid-feedback</code>)</div>
              </div>
              <button type="button" class="btn btn-primary me-2" :disabled="!demoTexto">
                Habilitado solo si escribes en "Texto"
              </button>
              <button type="button" class="btn btn-secondary" disabled>Deshabilitado</button>
            </div>
          </div>

          <p class="text-muted small mt-3 mb-0">
            Esto es <code>v-model</code> en vivo: lo que escribas queda guardado en <code>data()</code> del
            componente. Ejemplo: <code>demoTexto</code> = "{{ demoTexto || '(vacio)' }}"
          </p>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header">Ejemplo real: campo de texto (<code>RegisterView.vue</code>)</div>
        <div class="card-body">
          <pre v-pre class="bg-dark text-light rounded p-3 small mb-0"><code>&lt;div class="mb-3"&gt;
  &lt;label class="form-label" for="nombre"&gt;Nombre&lt;/label&gt;
  &lt;input id="nombre" v-model="nombre" type="text" class="form-control" required /&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="table-responsive mb-4">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 220px">Clase / atributo</th>
              <th>Para que sirve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>form-label</code></td>
              <td>Estilo para la etiqueta (<code>&lt;label&gt;</code>) de un campo.</td>
            </tr>
            <tr>
              <td><code>form-control</code></td>
              <td>Estilo estandar para <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, etc.</td>
            </tr>
            <tr>
              <td><code>form-select</code></td>
              <td>Estilo estandar para <code>&lt;select&gt;</code>.</td>
            </tr>
            <tr>
              <td><code>form-check</code> / <code>form-check-input</code></td>
              <td>Estilo para checkboxes y radio buttons.</td>
            </tr>
            <tr>
              <td><code>is-invalid</code> / <code>invalid-feedback</code></td>
              <td>Marca un campo con error y muestra el mensaje de validacion debajo.</td>
            </tr>
            <tr>
              <td><code>type="text|email|password|number|date"</code></td>
              <td>Tipo de input nativo de HTML; cambia el teclado/validacion del navegador.</td>
            </tr>
            <tr>
              <td><code>required</code></td>
              <td>Evita enviar el formulario si el campo esta vacio (validacion nativa del navegador).</td>
            </tr>
            <tr>
              <td><code>v-model="variable"</code></td>
              <td>Conecta el valor del input con <code>this.variable</code> en ambas direcciones.</td>
            </tr>
            <tr>
              <td><code>:disabled="cargando"</code></td>
              <td>Deshabilita el boton/input mientras <code>cargando</code> sea <code>true</code> (ej. request en curso).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card mb-4">
        <div class="card-header">Ejemplo real: formulario completo (<code>LoginView.vue</code>)</div>
        <div class="card-body">
          <pre v-pre class="bg-dark text-light rounded p-3 small mb-0"><code>&lt;form @submit.prevent="enviarLogin"&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="email"&gt;Email&lt;/label&gt;
    &lt;input id="email" v-model="email" type="email" class="form-control" required /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="password"&gt;Password&lt;/label&gt;
    &lt;input id="password" v-model="password" type="password" class="form-control" required /&gt;
  &lt;/div&gt;
  &lt;div v-if="error" class="alert alert-danger"&gt;{{ error }}&lt;/div&gt;
  &lt;button type="submit" class="btn btn-primary" :disabled="cargando"&gt;Entrar&lt;/button&gt;
&lt;/form&gt;</code></pre>
        </div>
      </div>

      <div class="alert alert-secondary mb-0">
        <strong>Tip:</strong> siempre usa <code>@submit.prevent</code> en el <code>&lt;form&gt;</code> para que Vue
        maneje el envio por JavaScript en vez de recargar la pagina.
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WikiView',
  data() {
    return {
      demoTexto: '',
      demoEmail: '',
      demoPassword: '',
      demoSelect: '',
      demoCheck: false,
      demoRadio: '',
      demoTextarea: '',
    };
  },
};
</script>
