import { create } from 'zustand'

interface EditorState {
  code: string
  language: string
  theme: string
  font: string
  padding: number
  width: number
  format: 'png' | 'jpg' | 'svg'
  showBackground: boolean
  showLineNumbers: boolean

  toggleBackground: () => void
  toggleLineNumbers: () => void
  dark: boolean

  backgroundType: 'solid' | 'gradient'
  bgColor1: string
  bgColor2: string
  angle: number

  windowStyle: 'mac' | 'none'

  watermark: boolean

  fileName: string

  isExporting: boolean

  setIsExporting: (v: boolean) => void

  setCode: (v: string) => void
  setLanguage: (v: string) => void
  setTheme: (v: string) => void
  setFont: (v: string) => void
  setPadding: (v: number) => void
  setWidth: (v: number) => void
  setFormat: (v: 'png' | 'jpg' | 'svg') => void

  toggleDark: () => void
  toggleWatermark: () => void
  setWatermark: (v: boolean) => void

  setBackgroundType: (v: 'solid' | 'gradient') => void
  setBgColor1: (v: string) => void
  setBgColor2: (v: string) => void
  setAngle: (v: number) => void

  setWindowStyle: (v: 'mac' | 'none') => void

  setFileName: (v: string) => void

  reset: () => void
}

export const useEditorStore = create<EditorState>((set) => ({
  code: `console.log("Hello World")`,

  language: 'javascript',
  theme: 'vs-dark',
  font: 'Fira Code',

  padding: 32,
  width: 800,
  format: 'png',
  showBackground: true,
  showLineNumbers: true,

  dark: true,

  backgroundType: 'gradient',
  bgColor1: '#6bcba4',
  bgColor2: '#1a4175',
  angle: 135,

  windowStyle: 'mac',

  watermark: true,

  fileName: 'Untitled.tsx',

  isExporting: false,

  setIsExporting: (v) => set({ isExporting: v }),

  setCode: (v) => set({ code: v }),
  setLanguage: (v) => set({ language: v }),
  setTheme: (v) => set({ theme: v }),
  setFont: (v) => set({ font: v }),
  setPadding: (v) => set({ padding: v }),
  setWidth: (v) => set({ width: v }),
  setFormat: (v) => set({ format: v }),

  setWatermark: (v) => set({ watermark: v }),

  setFileName: (v) => set({ fileName: v }),

  toggleDark: () =>
    set((s) => ({
      dark: !s.dark,
      theme: s.dark ? 'light' : 'vs-dark'
    })),

  toggleWatermark: () =>
    set((s) => ({
      watermark: !s.watermark
    })),
  toggleBackground: () =>
    set((s) => ({
      showBackground: !s.showBackground
    })),

  toggleLineNumbers: () =>
    set((s) => ({
      showLineNumbers: !s.showLineNumbers
    })),

  setBackgroundType: (v) => set({ backgroundType: v }),
  setBgColor1: (v) => set({ bgColor1: v }),
  setBgColor2: (v) => set({ bgColor2: v }),
  setAngle: (v) => set({ angle: v }),

  setWindowStyle: (v) => set({ windowStyle: v }),

  reset: () =>
    set({
      code: `console.log("Hello World")`,

      language: 'javascript',
      theme: 'vs-dark',
      font: 'Fira Code',

      padding: 32,
      width: 800,
      format: 'png',

      dark: true,

      backgroundType: 'gradient',
      bgColor1: '#6bcba4',
      bgColor2: '#1a4175',
      angle: 135,

      windowStyle: 'mac',

      watermark: true,

      fileName: 'Untitled.tsx',

      isExporting: false
    })
}))
