# URL to Selection

URL to Selection is a Roam Research extension that automatically converts selected text into markdown links when pasting URLs. It streamlines the process of creating links in your Roam notes by combining text selection and URL pasting into a single action.

![demo](TODO: Add demo screenshot)

## Features

1. **Smart Link Creation**
   - Automatically converts selected text into markdown links when pasting URLs
   - Works with any valid URL in your clipboard
   - Preserves the original text selection as the link text

2. **Seamless Integration**
   - Works with standard paste commands (Cmd+V / Ctrl+V)
   - No additional keyboard shortcuts needed
   - Instant conversion without any extra steps

3. **Intelligent Detection**
   - Automatically detects URLs in clipboard content
   - Only converts to link when clipboard contains a valid URL
   - Regular text pasting remains unchanged when no URL is detected

## Installation

1. In Roam Research, go to Settings > Roam Depot > Community extensions
2. Search for "URL to Selection"
3. Click "Install"

## Usage

1. Select the text you want to turn into a link
2. Copy a URL to your clipboard
3. Press Cmd+V (Mac) or Ctrl+V (Windows/Linux)
4. The selected text will automatically be converted into a markdown link: `[selected text](url)`

### Example

1. Select the text "Check out this website"
2. Copy the URL "https://example.com"
3. Press Cmd+V/Ctrl+V
4. The text will be converted to: `[Check out this website](https://example.com)`

## Notes

- The extension only activates when you have text selected AND a URL in your clipboard
- Regular text pasting (when no URL is in clipboard) works as normal
- Works with any valid URL format
