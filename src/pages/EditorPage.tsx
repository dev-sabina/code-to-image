import { useEditorStore } from '../store/useEditorStore'

export default function EditorPage() {
  const { code, setCode, dark, width } = useEditorStore()

  return (
    <div
      className={
        dark
          ? 'bg-black text-white min-h-screen'
          : 'bg-gray-100 text-black min-h-screen'
      }
    >
      <div className="flex justify-center p-6">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full max-w-[900px] h-[400px] p-4 border rounded bg-[#111] text-white"
          style={{ width: width }}
        />
      </div>
    </div>
  )
}
