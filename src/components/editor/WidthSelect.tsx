import { useEditorStore } from '../../store/useEditorStore'

export default function WidthSelect() {
  const { width, setWidth } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Width</span>

        <span className="text-xs text-gray-300">{width}px</span>
      </div>

      <input
        type="range"
        min={500}
        max={1200}
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        className="
        w-full
        accent-purple-500
        cursor-pointer
        "
      />
    </div>
  )
}
