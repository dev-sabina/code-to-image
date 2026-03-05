import { useEditorStore } from '../../store/useEditorStore'

export default function LanguageSelect() {
  const { language, setLanguage } = useEditorStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Language</span>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
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
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="java">Java</option>
        <option value="go">Go</option>
        <option value="rust">Rust</option>
        <option value="php">PHP</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="json">JSON</option>
      </select>
    </div>
  )
}
