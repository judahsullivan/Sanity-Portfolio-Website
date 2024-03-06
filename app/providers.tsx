import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/global/Providers/ThemeProvider'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
