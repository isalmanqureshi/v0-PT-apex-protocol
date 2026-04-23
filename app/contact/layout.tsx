import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Marcus | Apex Protocol',
  description: 'Connect with Marcus Thorne and the Apex Protocol team. Ask questions about the Catalyst Method.',
  openGraph: {
    title: 'Contact Marcus | Apex Protocol',
    description: 'Connect with Marcus Thorne about the Catalyst Method',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
