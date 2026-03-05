import { useEditorStore } from '../../store/useEditorStore'

export default function ThemeSelect() {
  const { theme, setTheme } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Theme</span>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
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
        <option value="vs-dark">VS Dark</option>
        <option value="light">Light</option>
        <option value="hc-black">High Contrast</option>
      </select>
    </div>
  )
}
