# SearchFlix

SearchFlix is a React-based web application that allows users to search for movies and TV shows. It provides a user-friendly interface to explore content, view details, and discover trending titles.

## Features

- Search for movies and TV shows by title
- View detailed information about each result
- Responsive and modern UI
- Fast and intuitive search experience

## Powered by OMDb API

SearchFlix uses the [OMDb API](https://www.omdbapi.com/) to fetch movie and TV show data.  
You will need a free OMDb API key to use this application.

### How to get an OMDb API Key

1. Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Sign up with your email address.
3. You will receive an API key via email.

### Configure your API Key

- Add your OMDb API key to the project configuration (e.g., in an `.env` file or directly in the code as required by your setup):

  ```
  VITE_OMDB_API_KEY=your_api_key_here
  ```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SearchFlix.git
   cd SearchFlix
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
SearchFlix/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Customization

- Update API keys or endpoints in the configuration files as needed.
- Modify components in the `src/components` directory to change UI or add features.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under
