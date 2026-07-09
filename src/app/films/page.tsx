import PageHeader from "@/components/layout/PageHeader";

export default function FilmsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Cinematic Films" 
        subtitle="Experience the emotion, the vows, and the grand celebrations through our award-winning cinematic lenses."
      />
      <div className="container mx-auto px-6 py-24 text-center">
        <p className="text-white/50 font-sans">Films gallery coming soon in Phase 5...</p>
      </div>
    </main>
  );
}
