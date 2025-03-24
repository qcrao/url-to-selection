# URL to Selection

URL to Selection is a Roam Research extension that turns selected text into markdown links when you paste URLs. It simplifies creating links in Roam by combining text selection and URL pasting in one step.

![demo](https://github.com/qcrao/url-to-selection/raw/main/assets/demo.gif)

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

## Notes

- The extension only activates when you have text selected AND a URL in your clipboard
- Regular text pasting (when no URL is in clipboard) works as normal
- Works with any valid URL format
