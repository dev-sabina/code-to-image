import { useEditorStore } from '../../store/useEditorStore'

export default function FontSelect() {
  const { font, setFont } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Font</span>

      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
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
        <option value="Fira Code">Fira Code</option>
        <option value="JetBrains Mono">JetBrains Mono</option>
        <option value="Source Code Pro">Source Code Pro</option>
        <option value="IBM Plex Mono">IBM Plex Mono</option>
        <option value="Roboto Mono">Roboto Mono</option>
      </select>
    </div>
  )
}
