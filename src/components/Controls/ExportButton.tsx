import { useState } from 'react'
import { toPng, toJpeg, toSvg } from 'html-to-image'
import { useEditorStore } from '../../store/useEditorStore'

export default function ExportButton() {
  const [format, setFormat] = useState<'png' | 'jpg' | 'svg'>('png')

  const { fileName, setIsExporting } = useEditorStore()

  const exportImage = async () => {
    const node = document.getElementById('code-preview')
    if (!node) return

    try {
      setIsExporting(true)

      // allow watermark to hide before screenshot
      await new Promise((r) => setTimeout(r, 120))

      let dataUrl = ''

      if (format === 'png') dataUrl = await toPng(node)
      if (format === 'jpg') dataUrl = await toJpeg(node)
      if (format === 'svg') dataUrl = await toSvg(node)

      const link = document.createElement('a')
      link.download = `${fileName}.${format}`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Export failed', err)
    }

    setIsExporting(false)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* FORMAT SELECT */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400">Format</span>

        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as any)}
          className="
            bg-[#111]
            border border-[#2a2a2a]
            rounded-md
            px-3 py-2
            text-sm
            focus:outline-none
            "
        >
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="svg">SVG</option>
        </select>
      </div>

      {/* EXPORT BUTTON */}
      <button
        onClick={exportImage}
        className=" w-[100%] py-13 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] hover:bg-[#222] transition "
      >
        Export
      </button>
    </div>
  )
}
