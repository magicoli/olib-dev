# olib-dev

Dev libraries that might or might not be useful.

## Provides

- **makereadmetxt**: Builds or updates the WordPress standard plugin readme.txt compiling and reformatting README.md, INSTALLATION.md, FAQ.md, CHANGELOG.md.  
- **i18n**: Prepares internationalization assets, updating text domains, generating POT, and converting PO files to MO.  
- **makemo**: Converts PO files to MO using WP CLI.

## Installation

1. Clone the repository into your plugin’s subfolder (e.g., at src/olib-dev).  
2. Exclude this subfolder from distribution (e.g., add src/olib-dev to your .distignore).  
3. Add the following workspace configuration to your plugin’s package.json:
   ```json
   "workspaces": {
     "packages": [
       "src/olib-dev"
     ]
   }
   ```
4. Run "npm install" to install dependencies.
5. In your plugin's Gruntfile.js
   - Define your plugin slug name slug (e.g. 'my-plugin')
   - Load the custom tasks with:
     ```javascript
     // ...existing code...
     const pluginName = 'YOURPLUGINSLUG'; // replace with your slug
     require('./src/olib-dev/grunt-custom-tasks.js')(grunt, pluginName);
     // ...existing code...
     ```
6. Run "grunt" or invoke specific tasks (e.g., "grunt i18n") as needed.
