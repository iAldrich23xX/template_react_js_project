## ⚙️ Configurar versión de Node.js

Se recomienda administrar versiones de Node con NVM for Windows:
🔗 https://github.com/coreybutler/nvm-windows/tree/1.1.12

Una vez instalado NVM, asegúrate de usar la versión de Node compatible con el proyecto:
```bash
nvm install [version]
nvm use [version]
```

## 📦 Instalar dependencias
```bash
npm install
```

## 🧑‍💻 Ejecutar en modo desarrollo
```bash
npm run dev
```

## 📁 Estructura recomendada: SCREAMING ARCHITECTURE
```bash
project/
├── src/
│   ├── core/                            # Núcleo principal del sistema (el proyecto base)
│   │   ├── assets/                      # Recursos estáticos específicos del core
│   │   │   ├── docs/
│   │   │   │   └── politica-de-datos.pdf
│   │   │   └── images/
│   │   │       ├── icons/               # Iconos individuales o colecciones SVG utilizados en la UI
│   │   │       ├── logos/               # Identidad visual: logotipos oficiales en formato SVG o PNG
│   │   │       ├── banners/             # Imágenes promocionales para secciones destacadas PNG o WebP
│   │   │       ├── illustrations/       # Ilustraciones o gráficos decorativos en formatos SVG, PNG o WebP
│   │   │       └── photos/              # Fotografías o imágenes editoriales en formato JPG o WebP
│   │   │
│   │   ├── components/                  # Componentes UI del core (Atomic Design)
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── templates/
│   │   │
│   │   ├── contexts/                    # Definición de contextos base
│   │   ├── providers/                   # Lógica implementada de los contextos
│   │   ├── hooks/                       # Hooks propios del core
│   │   ├── services/                    # Servicios específicos (auth, usuarios, etc.)
│   │   ├── utils/                       # Funciones utilitarias propias del core
│   │   ├── data/                        # Datos o mocks locales
│   │   ├── layouts/                     # Layouts principales
│   │   │   ├── PublicLayout.jsx
│   │   │   ├── AuthLayout.jsx
│   │   │   └── PrivateLayout.jsx
│   │   ├── views/                       # Páginas o secciones principales
│   │   │   ├── auth/
│   │   │   ├── private/
│   │   │   └── public/
│   │   ├── routes/                      # Rutas del core
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx                      # Raíz del núcleo
│   │   └── index.js                     # Punto de entrada del módulo principal
│   │
│   ├── shared/                          # Submódulo compartido (reutilizable entre proyectos)
│   │   ├── components/                  # UI común (botones, inputs, modales, etc.)
│   │   ├── hooks/                       # Hooks globales (useFetch, useTheme, etc.)
│   │   ├── utils/                       # Funciones genéricas (formatDate, validations, etc.)
│   │   ├── api/                         # Configuración base de API (axios, interceptors, tokens)
│   │   └── styles/                      # Estilos globales, variables, mixins, etc.
│   │
│   ├── integrations/                    # Submódulos externos o apps integradas (repos separados)
│   │   ├── BOLD/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   │
│   │   ├── EPayCO/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   │
│   │   ├── Signio/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   │
│   │   └── index.js                     # Registro de integraciones disponibles
│   │
│   ├── store/                           # Estado global (Redux, Zustand, Jotai, etc.)
│   │   ├── slices/
│   │   └── store.js
│   │
│   ├── index.css                        # Estilos globales
│   └── main.jsx                         # Entrada principal de Vite/React
│
├── test/                                # Pruebas unitarias e integración
│   ├── core/
│   ├── shared/
│   ├── integrations/
│   └── setupTests.js
│
├── libs/                                # Librerías internas (opcional)
│   ├── ui-kit/                          # Componentes UI independientes (pueden publicarse en npm)
│   ├── api-client/                      # SDK de conexión a la API
│   └── utils/                           # Funciones o clases exportables (fechas, formatos, etc.)
│
├── .gitmodules                          # Configuración de submódulos Git (shared, integrations)
├── .editorconfig
├── .env
├── .gitignore
├── .node-version
├── .prettierrc
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── README.md
└── vite.config.js


```

## 📄 Autor

**Académicos Urbanos de American Capital S.A.S**  
🧑‍💻 Equipo de Desarrollo y TI
