import { useEditorStore } from '../../store/useEditorStore'

export default function BackgroundControls() {
  const {
    backgroundType,
    setBackgroundType,
    bgColor1,
    bgColor2,
    setBgColor1,
    setBgColor2
  } = useEditorStore()

  return (
    <div className="border border-[#2a2a2a] rounded-xl p-5 bg-[#161616] flex flex-col gap-6">
      {/* TITLE */}
      <span className="text-xs text-gray-400 uppercase tracking-wider">
        Background
      </span>

      {/* SOLID / GRADIENT */}
      <div className="flex gap-3">
        <button
          onClick={() => setBackgroundType('solid')}
          className={`
            flex-1 py-2 rounded-md border text-sm transition
            ${
              backgroundType === 'solid'
                ? 'bg-[#262626] border-[#3a3a3a]'
                : 'border-[#2a2a2a] hover:bg-[#1f1f1f]'
            }
          `}
        >
          Solid
        </button>

        <button
          onClick={() => setBackgroundType('gradient')}
          className={`
            flex-1 py-2 rounded-md border text-sm transition
            ${
              backgroundType === 'gradient'
                ? 'bg-[#262626] border-[#3a3a3a]'
                : 'border-[#2a2a2a] hover:bg-[#1f1f1f]'
            }
          `}
        >
          Gradient
        </button>
      </div>

      {/* COLORS */}
      <div className="grid grid-cols-2 gap-6">
        {/* START */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-400">Gradient Start</span>

          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgColor1}
              onChange={(e) => setBgColor1(e.target.value)}
              className="w-10 h-10 rounded border border-[#2a2a2a]"
            />

            <input
              value={bgColor1}
              onChange={(e) => setBgColor1(e.target.value)}
              className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2 text-sm w-full"
            />
          </div>
        </div>

        {/* END */}
        {backgroundType === 'gradient' && (
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400">Gradient End</span>

            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bgColor2}
                onChange={(e) => setBgColor2(e.target.value)}
                className="w-10 h-10 rounded border border-[#2a2a2a]"
              />

              <input
                value={bgColor2}
                onChange={(e) => setBgColor2(e.target.value)}
                className="bg-[#111] border border-[#2a2a2a] rounded px-3 py-2 text-sm w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
