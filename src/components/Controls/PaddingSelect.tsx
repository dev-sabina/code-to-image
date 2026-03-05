import { useEditorStore } from '../../store/useEditorStore'

export default function PaddingSelect() {
  const { padding, setPadding } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Padding</span>

      <select
        value={padding}
        onChange={(e) => setPadding(Number(e.target.value))}
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
        <option value={16}>16</option>
        <option value={24}>24</option>
        <option value={32}>32</option>
        <option value={40}>40</option>
        <option value={48}>48</option>
        <option value={64}>64</option>
      </select>
    </div>
  )
}
