const founders = [
  { id: 1, name: 'TechFlow Labs' },
  { id: 2, name: 'Aurora Ventures' },
  { id: 3, name: 'Nexus Capital' },
  { id: 4, name: 'Velocity Inc' },
  { id: 5, name: 'Zenith Partners' },
];

export function SocialProof() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-md border-y border-border/30">
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 font-semibold uppercase tracking-wide text-sm">
          Trusted by elite performers and founders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {founders.map((founder) => (
            <div key={founder.id} className="flex items-center gap-2 px-4 py-2 rounded-md bg-card/40 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition opacity-70 hover:opacity-100">
              <div className="relative h-6 w-6 rounded bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-xs font-bold text-accent-foreground">
                {founder.name[0]}
              </div>
              <span className="text-sm font-medium text-foreground">{founder.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
