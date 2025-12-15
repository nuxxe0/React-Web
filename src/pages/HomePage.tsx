import Header from "../components/ui/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex flex-1 items-center w-9/12 gap-12 py-10">
        <section className="space-y-6 w-5/12">
          <h1 className="text-indigo-600 font-extrabold text-4xl leading-tight">
            Aprende y crea sin límites
          </h1>

          <p className="text-gray-600">
            Descubre cursos diseñados para impulsar tu creatividad y ayudarte a
            desarrollar nuevas habilidades a tu propio ritmo, desde cualquier
            lugar.
          </p>

          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Explorar cursos
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition">
              Ver programas
            </button>
          </div>
        </section>

        <section className="w-7/12 h-[70dvh] overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Personas aprendiendo"
            className="w-full h-full object-cover"
          />
        </section>
      </main>
    </>
  );
}
