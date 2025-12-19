# 👨🏾‍💻 Section 10 — React Challenge: Text Expander Component

## 📋 Project Overview

This project implements a reusable **Text Expander** component in React with TypeScript. The component allows users to expand and collapse long text content, showing a preview with a customizable number of words and providing buttons to toggle between expanded and collapsed states.

### What This Project Does
- Creates a reusable `TextExpander` component that can wrap any text content
- Allows customization of the number of words shown when collapsed
- Provides customizable button text for expand/collapse actions
- Supports custom button colors via props
- Allows initial expanded state configuration
- Supports custom CSS classes for styling
- Implements proper TypeScript typing for all props

### Technology Stack
- **React 19.2.0** - UI library for building component-based interfaces
- **TypeScript 5.9.3** - Type-safe JavaScript for better development experience
- **Vite 7.2.4** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **React Hooks** - `useState` for managing component state

### Key Components
- **TextExpander** - Main component that handles text expansion/collapse logic
- **App** - Container component demonstrating multiple TextExpander instances with different configurations

---

## 📑 Table of Contents

- [👨🏾‍💻 Section 10 — React Challenge: Text Expander Component](#-section-10--react-challenge-text-expander-component)
  - [📋 Project Overview](#-project-overview)
    - [What This Project Does](#what-this-project-does)
    - [Technology Stack](#technology-stack)
    - [Key Components](#key-components)
  - [📑 Table of Contents](#-table-of-contents)
  - [📁 Visual Project Tree](#-visual-project-tree)
  - [📋 Project Overview (Detailed)](#-project-overview-detailed)
    - [Purpose](#purpose)
    - [Component Architecture](#component-architecture)
    - [Key Features Implementation](#key-features-implementation)
  - [🧳 Section 10 — React Challenge: Text Expander Component](#-section-10--react-challenge-text-expander-component-1)
    - [📚 Lecture 121: Building the Text Expander Component](#-lecture-121-building-the-text-expander-component)
      - [🧠 01.1 Context](#-011-context)
      - [⚙️ 01.2 Updating code according the context](#️-012-updating-code-according-the-context)
        - [01.2.1 Creating the TextExpander Component](#0121-creating-the-textexpander-component)
        - [01.2.2 Implementing the Component Logic](#0122-implementing-the-component-logic)
        - [01.2.3 Adding TypeScript Interfaces](#0123-adding-typescript-interfaces)
        - [01.2.4 Implementing the App Component](#0124-implementing-the-app-component)
        - [01.2.5 Styling and Final Touches](#0125-styling-and-final-touches)
      - [🧱 01.3 Pending Fixes (TODO)](#-013-pending-fixes-todo)

---

## 📁 Visual Project Tree

```
12-react-challenge-text-expander/
├── 📁 docs/
│   └── 📄 LECTURE_STEPS.md          # This documentation file
├── 📁 public/
│   └── 📄 vite.svg                   # Vite logo asset
├── 📁 src/
│   ├── 📁 assets/
│   │   └── 📄 react.svg              # React logo asset
│   ├── 📁 components/
│   │   └── 📄 TextExpander.tsx       # Main TextExpander component
│   ├── 📄 App.tsx                    # Main application component
│   ├── 📄 main.tsx                   # Application entry point
│   └── 📄 index.css                  # Global styles
├── 📄 .gitignore                     # Git ignore rules
├── 📄 eslint.config.js               # ESLint configuration
├── 📄 index.html                     # HTML entry point
├── 📄 package.json                   # Project dependencies and scripts
├── 📄 package-lock.json              # Dependency lock file
├── 📄 README.md                      # Project readme
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tsconfig.app.json              # TypeScript app configuration
└── 📄 vite.config.ts                 # Vite configuration
```

---

## 📋 Project Overview (Detailed)

### Purpose
This project serves as a practical React challenge to build a reusable text expansion component. It demonstrates:
- Component composition and reusability
- Props management and TypeScript interfaces
- State management with React hooks
- Conditional rendering based on state
- String manipulation for text truncation
- Inline styling and CSS class support

### Component Architecture
The project follows a simple component hierarchy:
- `main.tsx` → Renders `App` component
- `App.tsx` → Contains multiple `TextExpander` instances with different configurations
- `TextExpander.tsx` → Core component with expansion/collapse logic

### Key Features Implementation
1. **Text Truncation**: Splits text by spaces and shows only the first N words
2. **State Management**: Uses `useState` to track expanded/collapsed state
3. **Customizable Props**: Supports multiple configuration options
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Accessibility**: Button-based interaction for expand/collapse

---

## 🧳 Section 10 — React Challenge: Text Expander Component

### 📚 Lecture 121: Building the Text Expander Component

#### 🧠 01.1 Context

**Problem Statement:**
When displaying long text content in web applications, it's often necessary to show a preview or summary initially, allowing users to expand the full content on demand. This improves user experience by reducing visual clutter and allowing users to focus on content they're interested in.

**Why This Component is Needed:**
- **User Experience**: Long text blocks can overwhelm users. A collapsible text component allows progressive disclosure of information.
- **Space Efficiency**: In lists or cards, showing full text for all items takes up valuable screen space.
- **Performance**: Rendering less text initially can improve initial page load performance.
- **Reusability**: A well-designed component can be used across different parts of an application with different configurations.

**Solution Approach:**
We'll create a `TextExpander` component that:
1. Accepts text content as children
2. Tracks expanded/collapsed state internally
3. Truncates text to a specified number of words when collapsed
4. Provides a button to toggle between states
5. Allows customization of button text, colors, and initial state
6. Supports TypeScript for type safety

**Technical Background:**
- **React Hooks**: We'll use `useState` to manage the component's internal state
- **String Manipulation**: JavaScript's `split()`, `slice()`, and `join()` methods for text truncation
- **Conditional Rendering**: React's ability to render different content based on state
- **Props Pattern**: React's props system for component configuration
- **TypeScript Interfaces**: Type definitions for component props

#### ⚙️ 01.2 Updating code according the context

[codesandbox](https://codesandbox.io/p/sandbox/react-challenge-text-expander-starter-cqcm7s?file=%2Fsrc%2FApp.js%3A4%2C3-34%2C5)

##### 01.2.1 Creating the TextExpander Component

First, we create the main component file with the basic structure:

```tsx
/* src/components/TextExpander.tsx */
import { useState } from "react";

interface TextExpanderProps {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
  children: React.ReactNode;
}

const TextExpander: React.FC<TextExpanderProps> = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) => {
  // Component implementation will go here
};

export default TextExpander;
```

**Explanation:**
- We import `useState` from React for state management
- Define a TypeScript interface `TextExpanderProps` with all optional props (except `children`)
- Set default values for all optional props using ES6 default parameters
- Export the component as default

##### 01.2.2 Implementing the Component Logic

Now we implement the core logic for text expansion and collapse:

```tsx
/* src/components/TextExpander.tsx */
import { useState } from "react";

interface TextExpanderProps {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
  children: React.ReactNode;
}

const TextExpander: React.FC<TextExpanderProps> = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded); // 👈🏽 ✅ (1)

  const displayText =
    isExpanded || typeof children !== "string" // 👈🏽 ✅ (2)
      ? children
      : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."; // 👈🏽 ✅ (3)

  const buttonStyle = { // 👈🏽 ✅ (4)
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={buttonStyle as React.CSSProperties}
        onClick={() => setIsExpanded(!isExpanded)} // 👈🏽 ✅ (5)
      >
        {isExpanded ? collapseButtonText : expandButtonText} // 👈🏽 ✅ (6)
      </button>
    </div>
  );
};

export default TextExpander;
```

**Code Explanation:**
1. **State Management (1)**: Initialize `isExpanded` state with the `expanded` prop value. This allows the component to start in either expanded or collapsed state.
2. **Type Check (2)**: Check if the component is expanded OR if children is not a string. This handles cases where children might be React elements instead of plain text.
3. **Text Truncation (3)**: When collapsed and children is a string:
   - Split by spaces to get words
   - Take first `collapsedNumWords` words using `slice()`
   - Join them back with spaces
   - Append "..." to indicate truncated content
4. **Button Styling (4)**: Create inline style object for the button with custom color support
5. **Toggle Handler (5)**: Click handler that toggles the `isExpanded` state
6. **Conditional Button Text (6)**: Show collapse text when expanded, expand text when collapsed

**Expected Behavior:**
- Component starts in collapsed state (showing first 10 words by default)
- Clicking the button toggles between expanded and collapsed states
- Button text changes based on current state
- Button color matches the `buttonColor` prop

##### 01.2.3 Adding TypeScript Interfaces

The TypeScript interface ensures type safety:

```tsx
/* src/components/TextExpander.tsx */
interface TextExpanderProps {
  collapsedNumWords?: number;      // 👈🏽 ✅ (1) Number of words to show when collapsed
  expandButtonText?: string;       // 👈🏽 ✅ (2) Text for expand button
  collapseButtonText?: string;      // 👈🏽 ✅ (3) Text for collapse button
  buttonColor?: string;            // 👈🏽 ✅ (4) Color for button text (CSS color value)
  expanded?: boolean;               // 👈🏽 ✅ (5) Initial expanded state
  className?: string;               // 👈🏽 ✅ (6) Optional CSS class name
  children: React.ReactNode;        // 👈🏽 ✅ (7) Required: text content to display
}
```

**Type Safety Benefits:**
- Prevents passing incorrect prop types
- Provides IDE autocomplete and IntelliSense
- Documents component API through types
- Catches errors at compile time

##### 01.2.4 Implementing the App Component

Create the main App component that demonstrates different TextExpander configurations:

```tsx
/* src/App.tsx */
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <div>
      {/* 👈🏽 ✅ (1) Default configuration - 10 words, default colors */}
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of
        dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly
        venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.
      </TextExpander>

      {/* 👈🏽 ✅ (2) Custom configuration - 20 words, custom button texts and color */}
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and collaboration between countries, private companies, and
        international space organizations. And while it's not always easy (or cheap), the results are out of this world.
        Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      {/* 👈🏽 ✅ (3) Expanded by default with custom className */}
      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and have inspired future generations to keep
        reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!
      </TextExpander>
    </div>
  );
}

export default App;
```

**Usage Examples:**
1. **Default Configuration**: Uses all default values (10 words, "Show more"/"Show less", blue color)
2. **Custom Configuration**: Shows 20 words when collapsed, custom button texts, orange color
3. **Expanded by Default**: Starts expanded, includes custom CSS class for styling

##### 01.2.5 Styling and Final Touches

Add global styles and component-specific styling:

```css
/* src/index.css */
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
}

.box {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #f7f7f7;
}
```

**Styling Explanation:**
- Reset default browser styles
- Set a clean sans-serif font
- `.box` class provides a styled container for the third TextExpander instance

**Application Entry Point:**

```tsx
/* src/main.tsx */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Expected Results:**

When running the application (`npm run dev`), you should see:
- Three text expander components
- First component shows first 10 words with "Show more" button
- Second component shows first 20 words with "Show text" button in orange
- Third component is expanded by default with a styled box around it
- Clicking any button toggles between expanded and collapsed states
- Button text changes appropriately based on state

**Console Output:**
No console errors or warnings. The application should render smoothly with all three TextExpander instances working independently.

#### 🧱 01.3 Pending Fixes (TODO)

```md
- [ ] Add keyboard accessibility support (Enter/Space key handlers for button)
- [ ] Add ARIA attributes for screen readers (aria-expanded, aria-label)
- [ ] Handle edge cases: empty strings, very short text (less than collapsedNumWords)
- [ ] Add animation/transition when expanding/collapsing for better UX
- [ ] Support for React elements as children (currently only handles strings properly)
- [ ] Add unit tests using React Testing Library
- [ ] Consider using CSS-in-JS or styled-components for better styling flexibility
- [ ] Add prop validation with PropTypes or Zod for runtime type checking
- [ ] Optimize text splitting to handle multiple spaces and special characters
- [ ] Add support for custom button component/element instead of just text
- [ ] Consider adding a "read more" link style option instead of button
- [ ] Add TypeScript strict mode compliance checks
- [ ] Document component with JSDoc comments for better IDE support
- [ ] Add Storybook stories for component documentation and testing
- [ ] Consider memoization if component is used in large lists for performance
```

