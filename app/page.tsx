import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SocialProof } from '@/components/social-proof';
import { CatalystMethod } from '@/components/catalyst-method';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <Header />
      <Hero />
      <SocialProof />
      <CatalystMethod />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
