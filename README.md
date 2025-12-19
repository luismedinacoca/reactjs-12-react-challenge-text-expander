# Text Expander Component

A reusable React component built with TypeScript that allows users to expand and collapse long text content. The component displays a truncated preview of text with a customizable number of words and provides an interactive button to toggle between expanded and collapsed states.

## Features

- **Text Truncation**: Automatically truncates text to a specified number of words when collapsed
- **Customizable Configuration**: Supports custom button text, colors, and initial expanded state
- **TypeScript Support**: Fully typed with TypeScript interfaces for type safety
- **Flexible Styling**: Supports custom CSS classes and inline button styling
- **State Management**: Uses React hooks for efficient state management
- **Reusable Component**: Can be used across different parts of an application with various configurations

## Key Concepts

- **Component Composition**: Demonstrates reusable component patterns in React
- **Props Management**: Uses TypeScript interfaces for prop validation and type safety
- **State Management**: Implements local state with `useState` hook
- **Conditional Rendering**: Renders different content based on component state
- **String Manipulation**: Uses JavaScript string methods for text truncation

## Tech Stack

- **React** 19.2.0 - UI library for building component-based interfaces
- **TypeScript** 5.9.3 - Type-safe JavaScript for better development experience
- **Vite** 7.2.4 - Fast build tool and development server
- **ESLint** - Code linting and quality assurance

## Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Step-by-Step Installation

1. Clone the repository or navigate to the project directory:
```bash
cd 12-react-challenge-text-expander
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### Basic Usage

```tsx
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <TextExpander>
      Your long text content goes here. This will be truncated to 10 words by default.
    </TextExpander>
  );
}
```

### Advanced Usage with Custom Props

```tsx
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <>
      {/* Custom number of words and button text */}
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Your text content here...
      </TextExpander>

      {/* Expanded by default with custom styling */}
      <TextExpander 
        expanded={true} 
        className="custom-class"
      >
        Your text content here...
      </TextExpander>
    </>
  );
}
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Required | The text content to display |
| `collapsedNumWords` | `number` | `10` | Number of words to show when collapsed |
| `expandButtonText` | `string` | `"Show more"` | Text displayed on the expand button |
| `collapseButtonText` | `string` | `"Show less"` | Text displayed on the collapse button |
| `buttonColor` | `string` | `"#1f09cd"` | Color of the button text (CSS color value) |
| `expanded` | `boolean` | `false` | Initial expanded state |
| `className` | `string` | `undefined` | Optional CSS class name for the container |

## Project Structure

```
12-react-challenge-text-expander/
├── docs/
│   └── LECTURE_STEPS.md          # Detailed documentation
├── public/
│   └── vite.svg                  # Vite logo asset
├── src/
│   ├── assets/
│   │   └── react.svg             # React logo asset
│   ├── components/
│   │   └── TextExpander.tsx      # Main TextExpander component
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── .gitignore                    # Git ignore rules
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # TypeScript app configuration
└── vite.config.ts                # Vite configuration
```

## Configuration

### TypeScript Configuration

The project uses TypeScript with strict type checking. Configuration files:
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific TypeScript configuration

### ESLint Configuration

ESLint is configured for code quality and follows React best practices. Configuration is in `eslint.config.js`.

### Vite Configuration

Vite is configured for fast development and optimized builds. Configuration is in `vite.config.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

## Testing & Quality

- **ESLint**: Configured with React-specific rules and hooks validation
- **TypeScript**: Provides compile-time type checking
- **Code Quality**: Follows React best practices and modern JavaScript patterns

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style and formatting
- Use TypeScript for all new code
- Ensure ESLint passes without errors
- Write descriptive commit messages

## Roadmap

Potential future improvements:

- [ ] Add keyboard accessibility support (Enter/Space key handlers)
- [ ] Add ARIA attributes for screen readers
- [ ] Handle edge cases (empty strings, very short text)
- [ ] Add animation/transition when expanding/collapsing
- [ ] Support for React elements as children
- [ ] Add unit tests using React Testing Library
- [ ] Add Storybook stories for component documentation
- [ ] Optimize text splitting to handle multiple spaces and special characters

## License

This project is private and not licensed for public use.

## Acknowledgments

This project is part of a React learning series focusing on component development, state management, and TypeScript integration.

