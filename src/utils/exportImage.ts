import * as htmlToImage from 'html-to-image'
import { useEditorStore } from '../store/useEditorStore'

function getNode() {
  return document.getElementById('code-preview') as HTMLElement | null
}

function getSafeFileName() {
  const { fileName } = useEditorStore.getState()

  // remove extensions like .ts .tsx .js
  return fileName.replace(/\.[^/.]+$/, '')
}

export async function exportAsPNG() {
  const node = getNode()
  if (!node) return

  try {
    const dataUrl = await htmlToImage.toPng(node)

    const link = document.createElement('a')
    link.download = `${getSafeFileName()}.png`
    link.href = dataUrl
    link.click()
  } catch (err) {
    console.error('PNG export failed', err)
  }
}

export async function exportAsSVG() {
  const node = getNode()
  if (!node) return

  try {
    const dataUrl = await htmlToImage.toSvg(node)

    const link = document.createElement('a')
    link.download = `${getSafeFileName()}.svg`
    link.href = dataUrl
    link.click()
  } catch (err) {
    console.error('SVG export failed', err)
  }
}

export async function exportAsJPG() {
  const node = getNode()
  if (!node) return

  try {
    const dataUrl = await htmlToImage.toJpeg(node)

    const link = document.createElement('a')
    link.download = `${getSafeFileName()}.jpg`
    link.href = dataUrl
    link.click()
  } catch (err) {
    console.error('JPG export failed', err)
  }
}

export async function copyImage() {
  const node = getNode()
  if (!node) return

  try {
    const blob = await htmlToImage.toBlob(node)
    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob
      })
    ])

    alert('Image copied to clipboard!')
  } catch (err) {
    console.error('Copy failed', err)
  }
}
