import './globals.css'

export const metadata = {
  title: 'Etude for OpenAI API',
  description: 'Brought to you by sforzando LLC. and Inc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
