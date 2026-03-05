import Editor from '@monaco-editor/react'
import { useEditorStore } from '../store/useEditorStore'

export default function CodeEditor() {
  const { code, language, theme, font, dark, setCode, showLineNumbers } =
    useEditorStore()

  return (
    <Editor
      height="220px"
      language={language}
      value={code}
      theme={dark ? theme : 'light'}
      onChange={(value) => setCode(value || '')}
      options={{
        fontFamily: font,
        fontSize: 16,
        fontLigatures: true,
        lineNumbers: showLineNumbers ? 'on' : 'off',

        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: 'on',

        folding: false,
        glyphMargin: false,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 3,

        renderLineHighlight: 'none',
        overviewRulerBorder: false,

        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },

        padding: {
          top: 24,
          bottom: 24
        },

        /* FIX INDENTATION */
        tabSize: 2,
        insertSpaces: true,
        detectIndentation: false,
        automaticLayout: true,

        smoothScrolling: true
      }}
    />
  )
}
