export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">About</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <p className="text-gray-700 leading-relaxed">
            I’m a product-focused developer who loves crafting crisp interfaces and smooth interactions. My work blends design sensibility with engineering rigor — from component systems and accessibility to performance and delightful micro-animations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-xs text-gray-500">Expertise</p>
              <p className="mt-1 font-semibold text-gray-900">React, FastAPI, 3D</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-xs text-gray-500">Approach</p>
              <p className="mt-1 font-semibold text-gray-900">Design-first, detail-oriented</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-xs text-gray-500">Location</p>
              <p className="mt-1 font-semibold text-gray-900">Remote-friendly</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-xs text-gray-500">Availability</p>
              <p className="mt-1 font-semibold text-gray-900">Open to new work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
