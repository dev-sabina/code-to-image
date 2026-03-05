import CodeEditor from './Editor'
import { useEditorStore } from '../store/useEditorStore'

export default function CodePreview() {
  const {
    fileName,
    setFileName,
    padding,
    width,
    bgColor1,
    bgColor2,
    backgroundType,
    angle,
    windowStyle,
    dark,
    isExporting
  } = useEditorStore()
  const { showBackground } = useEditorStore()
  const background =
    backgroundType === 'gradient'
      ? `linear-gradient(${angle}deg, ${bgColor1}, ${bgColor2})`
      : bgColor1

  return (
    <div
      id="code-preview"
      className="relative rounded-2xl shadow-2xl overflow-hidden transition-all"
      style={{
        width: `${width}px`,
        background: showBackground ? background : 'transparent',
        padding: `${padding}px`
      }}
    >
      <div
        className={`rounded-xl border border-[#2a2a2a] overflow-hidden ${
          dark ? 'bg-[#0d1117]' : 'bg-white'
        }`}
      >
        {windowStyle === 'mac' && (
          <div className="relative flex items-center px-4 py-2 border-b border-[#222] bg-[#111]">
            {/* MAC DOTS */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* FILE NAME */}
            <input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="
              absolute left-1/2 -translate-x-1/2
              text-xs text-gray-400
              bg-transparent
              outline-none
              text-center
              "
            />
          </div>
        )}

        <CodeEditor />
      </div>

      {/* WATERMARK (HIDDEN WHEN EXPORTING) */}
      {!isExporting && (
        <div className="absolute bottom-3 right-4 text-xs text-white/40 font-mono select-none">
          Sabina.Dev
        </div>
      )}
    </div>
  )
}
