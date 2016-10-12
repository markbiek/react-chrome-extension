This is a minimal Chrome Extension using ReactJS.

The extension has a simple popup which displays the current Chrome user's email address by using the Chrome Identity API.

## Setup & Installation

### Clone the project
1. `git clone https://github.com/markbiek/react-chrome-extension.git`

### Build the project
1. `npm install`
2. `composer install`
3. `gulp`

### Install the extension
1. Open Chrome and go to `chrome://extensions`
2. Check the **Developer mode** checkbox.
3. Click the **Load upacked extension** button and select the directory where you cloned the project

You should see a new extension called **Simple Extension** appear in the list of available extensions.
<img src="https://i.imgur.com/waUeYRW.png" />

and you should also see a new icon in Chrome toolbar.
<img src="https://i.imgur.com/TZKUh0I.png" />

Clicking the new icon will display a dialog like the following:
<img src="https://i.imgur.com/4obJ21J.png" />
