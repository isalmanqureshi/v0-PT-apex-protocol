import Image from 'next/image';

const founders = [
  { id: 1, name: 'Founder 1' },
  { id: 2, name: 'Founder 2' },
  { id: 3, name: 'Founder 3' },
  { id: 4, name: 'Founder 4' },
  { id: 5, name: 'Founder 5' },
];

export function SocialProof() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 font-semibold">
          Trusted by elite performers and founders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {founders.map((founder) => (
            <div key={founder.id} className="relative h-12 w-32">
              <Image
                src={`/placeholder.svg?height=48&width=128`}
                alt={founder.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
