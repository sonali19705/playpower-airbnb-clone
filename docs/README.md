# Airbnb-Clone App

A desktop-focused Airbnb listing page clone built as a full-stack web application. The project focuses on reproducing the reference listing experience with a React frontend, Node.js/Express backend, MongoDB database, photo tour, lightbox interactions, booking UI, reviews, amenities, calendar, and nearby listings.

## Features

### Listing Page
- Airbnb-style header and listing layout
- Property overview and listing information
- Guest Favourite section
- Highlights and description
- Sleeping arrangements
- Amenities with interactive view
- Availability calendar
- Booking card
- Reviews section
- Location section
- Host section
- Things to Know section
- Nearby listings carousel
- Sticky listing navigation

### Photo Experience
- Hero photo gallery
- Photo Tour view
- Full-screen Lightbox
- Previous/Next photo navigation
- Keyboard navigation with Arrow Left / Arrow Right
- Escape key support
- Focus management and body scroll handling

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Axios
- Component-based architecture

### Backend
- Node.js
- Express.js
- TypeScript
- Mongoose
- REST APIs
- CORS
- Environment-based configuration

### Database
- MongoDB
- Mongoose schemas/models for listing and review data

## Project Structure

```text
playpower-airbnb/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── ...
│   ├── public/
│   │   └── images/
│   └── package.json
├── server/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seed/
│   │   └── ...
│   └── package.json
├── docs/
│   └── architecture.png
├── .claude/
│   ├── agents/
│   └── skills/
├── AI_WORKFLOW.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm
- MongoDB or MongoDB Atlas

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the `server` directory.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit or submit real credentials.

## Database Seeding

If seed data is configured for the project:

```bash
cd server
npm run seed
```

## API

The frontend communicates with the Express backend through REST APIs.

Current listing-related endpoints include:

```text
GET /api/listings/:id
GET /api/listings/:listingId/reviews
GET /api/listings/:listingId/availability
```

The backend uses Mongoose to communicate with MongoDB.

## Architecture

The application follows a simple full-stack architecture:

```text
User
  │
  ▼
React + TypeScript + Vite
  │
  │ HTTP / JSON
  ▼
Node.js + Express
  │
  │ Mongoose
  ▼
MongoDB
```

Static property images used by the frontend are served from the project's public assets.

The detailed architecture diagram is available at:

```text
docs/architecture.png
```

## Accessibility & Interaction

The implementation includes:
- Semantic buttons for interactive controls
- Accessible labels for gallery/navigation controls
- Keyboard navigation in the lightbox
- Escape key support
- Focus handling when opening/closing the lightbox
- Body scroll locking while the lightbox is open
- Interaction states for controls

## AI-Assisted Development

AI tools were used during development for implementation, debugging, component creation, UI refinement, and code review.

The development prompt sequence and workflow are documented in:

```text
AI_WORKFLOW.md
```

AI agent and skill configuration files are included under:

```text
.claude/
```

## Scope

This implementation is focused on the desktop version required by the take-home task. Mobile-specific layouts are outside the current scope.

## Submission Notes

Before creating the final ZIP:

- Remove `node_modules/`
- Remove generated `dist/` folders if present
- Do not include real `.env` files or credentials
- Keep source code, configuration, architecture diagram, AI workflow, and `.claude` configuration files
- Do not push the project to a public GitHub repository
