My Angular Project
A hands-on Angular application built to explore and demonstrate core Angular concepts using the latest Angular 19+ with standalone components.
Features
Component Architecture

Standalone components — modern Angular approach without NgModules
Parent-child communication using @Input() and @Output() with EventEmitter
Modular component structure: Home, About, Fruits, and Child components

Data Binding & Forms

Two-way data binding with [(ngModel)]
Property binding with [src], [disabled], [ngClass], [ngStyle]
Event binding with (click) handlers
String interpolation with {{ }}

Directives

Structural directive: *ngIf for conditional rendering
Attribute directives: ngClass for dynamic CSS classes, ngStyle for inline styles

Routing

Multi-page navigation using RouterOutlet and RouterLink
Route configuration with Routes array and path redirects

Built-in Pipes

Text transformation: uppercase, lowercase, titlecase
Date formatting: shortDate, fullDate, custom formats
Currency formatting: USD, INR, EUR
Object display: json pipe

Server-Side Rendering (SSR)

Angular SSR with @angular/ssr and Express
Client hydration with event replay
Server and client route configuration

Testing

Unit tests with TestBed for all components

Tech Stack

Angular 19+ (standalone components)
TypeScript
Express (SSR server)
Karma/Jasmine (testing)

Getting Started
bash# Install dependencies
npm install

# Run development server
ng serve

# Run with SSR
npm run dev:ssr

# Run tests
ng test
Navigate to http://localhost:4200/ to view the application.
Project Structure
src/
├── app/
│   ├── about/          # About page component
│   ├── child/          # Child component (demonstrates @Input/@Output)
│   ├── fruits/         # Fruits page component
│   ├── home/           # Home component (core features demo)
│   ├── app.ts          # Root component with routing
│   ├── app.config.ts   # Application configuration
│   ├── app.routes.ts   # Route definitions
│   └── app.config.server.ts  # SSR configuration
├── main.ts             # Browser bootstrap
├── main.server.ts      # Server bootstrap
└── server.ts           # Express server for SSR
Author
Deepthi Sarvamangala Mouli
