import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPreview(markdown);
    }, 100); // Debounce for smoother updates
    return () => clearTimeout(timeoutId);
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
