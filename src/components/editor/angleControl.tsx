import { useEditorStore } from '../../store/useEditorStore'

export default function AngleControl() {
  const { angle, setAngle } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Gradient Angle</span>

        <span className="text-xs text-gray-300">{angle}°</span>
      </div>

      <input
        type="range"
        min={0}
        max={360}
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="
        w-full
        accent-purple-500
        cursor-pointer
        "
      />
    </div>
  )
}
