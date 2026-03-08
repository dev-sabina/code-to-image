import CodePreview from './components/CodePreview'
import { Code2, Github } from 'lucide-react'
import FontSelect from './components/Controls/FontSelect'
import LanguageSelect from './components/Controls/LanguageSelect'
import PaddingSelect from './components/Controls/PaddingSelect'
import ThemeSelect from './components/Controls/ThemeSelect'
import BackgroundControls from './components/Controls/BackgroundControls'
import AngleControl from './components/editor/angleControl'
import WidthSelect from './components/editor/WidthSelect'
import WindowStyle from './components/editor/WindowStyle'
import FormatSelect from './components/Controls/ExportButton'
import DarkToggle from './components/Controls/ThemeSelect'

import {
  exportAsPNG,
  exportAsSVG,
  copyImage,
  exportAsJPG
} from './utils/exportImage'
import { useEditorStore } from './store/useEditorStore'

export default function App() {
  const {
    reset,
    toggleBackground,
    toggleLineNumbers,
    showBackground,
    showLineNumbers
  } = useEditorStore()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER */}

      <header className="w-full px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Code2 size={26} className="text-purple-500" strokeWidth={2.5} />

          <h1 className="text-lg md:text-xl font-semibold tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Code to Image
          </h1>
        </div>

       <a
  href="https://github.com/dev-sabina/code-to-image"
  target="_blank"
  rel="noopener noreferrer"
  title="View source on GitHub"
  className="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition"
>
  <Github size={20} className="text-purple-500" />
</a>
      </header>

      {/* MAIN */}

      <main className="w-full flex flex-col items-center pt-6 md:pt-10 pb-16 gap-12">
        {/* PREVIEW */}

        <div className="flex justify-center w-full px-4">
          <div className="max-w-5xl w-full flex justify-center overflow-x-auto">
            <CodePreview />
          </div>
        </div>

        {/* CONTROLS PANEL */}

        <div
          className="
        w-full
        max-w-3xl
        mx-4
        border border-neutral-800
        rounded-xl
        bg-[#111]/80
        backdrop-blur-sm
        p-4
        shadow-[0_0_30px_rgba(0,0,0,0.4)]
        "
        >
          {/* GRID */}

          <div
            className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-3
          "
          >
            {/* ROW 1 */}

            <FontSelect />
            <PaddingSelect />
            <LanguageSelect />
            <DarkToggle />

            {/* ROW 2 */}

            <div className="col-span-2 md:col-span-2">
              <BackgroundControls />
            </div>

            <FormatSelect />

            <div className="flex flex-col gap-4">
              <WindowStyle />

              {/* Background Toggle */}
              <div className="flex items-center justify-between border border-neutral-800 rounded-lg px-3 py-2">
                <span className="text-sm text-gray-400">Background</span>

                <button
                  onClick={toggleBackground}
                  className={`relative w-12 h-7 rounded-full transition ${
                    showBackground ? 'bg-purple-500' : 'bg-neutral-700'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
                      showBackground ? 'translate-x-5' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Line Numbers Toggle */}
              <div className="flex items-center justify-between border border-neutral-800 rounded-lg px-3 py-2">
                <span className="text-sm text-gray-400">Lines</span>

                <button
                  onClick={toggleLineNumbers}
                  className={`relative w-12 h-7 rounded-full transition ${
                    showLineNumbers ? 'bg-purple-500' : 'bg-neutral-700'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
                      showLineNumbers ? 'translate-x-5' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ROW 3 */}

            <AngleControl />
            <WidthSelect />

            {/* RESET */}

            <button
              onClick={reset}
              className="
              px-4 py-2
              text-sm
              rounded-lg
              bg-neutral-900
              border border-neutral-700
              hover:bg-neutral-800
              transition
              "
            >
              Reset
            </button>

            {/* COPY */}

            <button
              onClick={copyImage}
              className="
              px-4 py-2
              text-sm
              rounded-lg
              bg-neutral-900
              border border-neutral-700
              hover:bg-neutral-800
              transition
              "
            >
              Copy
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
