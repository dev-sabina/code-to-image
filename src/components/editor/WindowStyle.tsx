import { useEditorStore } from '../../store/useEditorStore'

export default function WindowStyle() {
  const { windowStyle, setWindowStyle } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Window Style</span>

      <select
        value={windowStyle}
        onChange={(e) => setWindowStyle(e.target.value as any)}
        className="
        bg-[#111]
        border border-[#2a2a2a]
        rounded-md
        px-3
        py-2
        text-sm
        outline-none
        focus:border-[#444]
        "
      >
        <option value="mac">Mac</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}
