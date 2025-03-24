// src/index.ts

const isValidUrl = (text: string): boolean => {
  try {
    new URL(text);
    return true;
  } catch {
    return false;
  }
};

const convertSelectionToLink = async (event: ClipboardEvent) => {
  // Get clipboard content
  const clipboardText = event.clipboardData?.getData('text') || '';
  
  // Check if clipboard contains a valid URL
  if (!isValidUrl(clipboardText)) {
    return; // Let default paste behavior happen
  }

  // Get current selection
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    return; // No text selected, let default paste behavior happen
  }

  // Get the selected text
  const selectedText = selection.toString().trim();
  if (!selectedText) {
    return; // Empty selection, let default paste behavior happen
  }

  // Prevent the default paste behavior
  event.preventDefault();

  // Create the markdown link
  const markdownLink = `[${selectedText}](${clipboardText})`;

  // Get the active element (should be a Roam editor)
  const activeElement = document.activeElement;
  if (!activeElement || !(activeElement as HTMLElement).classList.contains('rm-block-input')) {
    return;
  }

  // Replace the selection with the markdown link using Roam's API
  const block = (window as any).roamAlphaAPI.ui.getFocusedBlock();
  if (!block) return;

  const { string: currentText } = await (window as any).roamAlphaAPI.pull(
    '[:block/string]',
    block['block-uid']
  );

  // Calculate the positions to replace in the text
  const selStart = (activeElement as HTMLTextAreaElement).selectionStart;
  const selEnd = (activeElement as HTMLTextAreaElement).selectionEnd;

  // Create the new text by replacing the selection with the markdown link
  const newText = currentText.substring(0, selStart) + 
                 markdownLink + 
                 currentText.substring(selEnd);

  // Update the block text
  await (window as any).roamAlphaAPI.updateBlock({
    block: {
      uid: block['block-uid'],
      string: newText
    }
  });
};

const onload = ({ extensionAPI }: { extensionAPI: any }) => {
  console.log("URL to Selection plugin loading...");

  // Add paste event listener to the document
  document.addEventListener('paste', convertSelectionToLink);

  console.log("URL to Selection plugin loaded successfully!");
};

const onunload = () => {
  // Remove paste event listener
  document.removeEventListener('paste', convertSelectionToLink);

  console.log("URL to Selection plugin unloaded!");
};

export default {
  onload,
  onunload,
}; 