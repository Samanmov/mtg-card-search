# Magic: The Gathering Card Search App

This project is a React-based application that allows users to search for Magic: The Gathering cards using the Scryfall API. The app includes features such as card search, similar card display, and a random image generator. It is built with a modern tech stack, including Redux for state management, Styled Components for styling, and various custom UI components.
 d

## Available Scripts

Install dependencies

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Features

### 1. Card Search
- Search for Magic: The Gathering cards based on attributes like:
    - **Type**
    - **Cost**
    - **Description**
    - **Power**
    - **Toughness**
    - **Name**
- Displays matching cards with details such as name, type, and image.

### 2. View Search Results
- Displays the generated card and similar cards, including a breakdown of color identity percentages.
- Uses a custom **ColorPercentageCircle** component to visualize color identity.
- Provides a user-friendly interface to edit and refine search queries.

### 3. Random Image Generator
- The `RandomImageContainer` component displays a random Magic: The Gathering card image.
- Includes a button to fetch a new random image.
- Uses a placeholder and loading skeleton while the image is being fetched.

### 4. UI Components
- **Custom Image Component**: Displays images with a skeleton loader and placeholder for a better user experience. If the image fails to load, it shows a default placeholder.
- **Styled Components**: All components are styled using styled-components for modular and reusable styles.
- **Button and Button Toolbar**: For interactive elements and layout.
- **Select and Input Components**: Customizable inputs for searching and filtering cards.

### 5. Redux State Management
- **Redux Toolkit** is used for managing global state, including card search queries, results, and loading states.

## Technology Stack

This project leverages the following technologies and libraries:

- **[React](https://reactjs.org/)** : A JavaScript library for building user interfaces, enabling a modular and component-based structure for the app.
- **[Redux](https://redux.js.org/)** : Used for state management, making it easier to manage complex state changes and share data across components.
- **[Styled Components](https://styled-components.com/)** : Allows writing CSS directly within JavaScript, making it easier to create dynamic and reusable UI components with scoped styles.
- **[Formik](https://formik.org/)** : A library for managing form state and validation in React applications, simplifying the process of handling forms, validating inputs, and managing form submissions.
- **[TypeScript](https://www.typescriptlang.org/)** : A strongly typed programming language that builds on JavaScript, helping to identify and correct errors early in the development process.
- **React Router**: Enables routing in the application, allowing users to navigate between different pages without a full page reload.
- **React-Loading-Skeleton**: Used to display loading skeletons for a better user experience when content is loading.
- **[Scryfall API](https://scryfall.com/docs/api)** : An open API for Magic: The Gathering cards, used to fetch and display card data within the app.


## Folder Structure

```plaintext
src
├── common                  # Common UI components and containers used across features
│   ├── ui
│   │   ├── component       # Reusable components (Button, Select, Spinner, etc.)
│   │   ├── container       # Container components for layouts (MainContainer, GridContainer)
├── features                # Feature-based modules
│   ├── cardSearch          # Card search functionality, actions, and reducers
│   │   ├── actions         # Redux actions for card search
│   │   ├── container       # Containers for UI components related to card search
│   │   ├── hook            # Custom hooks related to card search
│   │   ├── model           # TypeScript models for card data
│   │   ├── reducers        # Reducers for managing card search state
│   ├── randomImage         # Feature module for random image generation
│   │   ├── actions         # Redux actions for random image fetching
│   │   ├── container       # UI components related to random image display
│   │   ├── hook            # Custom hooks for random image feature
│   ├── searchResults       # Search results handling and display
│   │   ├── container       # UI components for displaying search results
│   │   ├── hook            # Custom hooks for search results
│   ├── store.ts            # Root Redux store configuration
├── App.tsx                 # Main App component
└── index.tsx               # Entry point of the application


