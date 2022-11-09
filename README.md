# 💻 Portfolio Web - #YoProgramo
![GitHub Release Date](https://img.shields.io/github/release-date/FlorCollosso/Portfolio-FrontEnd)

*NOTA: En este repositorio se encuentra todo lo relacionado al **Frontend** del proyecto, para dirigirse al repositorio del **Backend** **[hacer click aquí](https://github.com/FlorCollosso/Portfolio-BackEnd "aquí").***
## 📝 Descripción
- ***Portfolio Web Fullstack*** realizado como Proyecto Final del curso **Argentina Programa - #YoProgramo**.

- Se trata de una **Single Page Application (SPA)** realizada utilizando tecnologías Frontend como ser **HTML, CSS, Angular y Bootstrap**.

- La **primera versión** se encuentra disponible [en este enlace](http://burgosmanuel.ar "en este enlace").

## 🔧 Instalación
- Si queremos correr la aplicación en un entorno local debemos tener en cuenta lo siguiente: 

1. Clonar el repositorio utilizando GIT o descargando el archivo ZIP:

    `git clone https://github.com/BurgosManuel/portfolio-Frontend.git`

2. Instalar las dependencias a través de NPM.

    `npm install`

3. Configurar las variables de entornos en src/enviroments/enviroment.ts, donde configuraremos 3 propiedades:

- **baseUrl**: La URL de base para las conexiones con nuestra API REST. EJ:

  `baseUrl: "http://localhost:8080"`
  
- **authApi**: La URL para realizar las autenticaciones en nuestra API REST. EJ: 

  `authApi: "http://localhost:8080/api/auth"`

- **frontUrl**: La URL para redireccionar y realizar distintas operaciones en nuestro Frontend. EJ:

  `frontUrl: "http://localhost:4200/portfolio/"` (incluir el *slash* o *barra diagonal* al final).

4. Compilar y montar el proyecto utilizando el comando `ng serve`

5. **IMPORTANTE:** Debemos tener un servidor con el proyecto *Backend* activo para poder obtener los datos y registrar usuarios, caso contrario, no se renderizarán los componentes de Angular. Para más información ir al **[repositorio backend.](https://github.com/FlorCollosso/Portfolio-BackEnd "repositorio backend.")**

## 📩 Contacto
>🙋‍♀️ Por si necesitas ponerte en contacto conmigo: **[LinkedIn ](https://www.linkedin.com/in/florencia-collosso/) - [Github ](https://github.com/FlorCollosso) - [Web](https://)**
