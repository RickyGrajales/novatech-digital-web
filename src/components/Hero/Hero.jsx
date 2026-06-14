function Hero() {
  return (
    <section id="inicio"
      data-aos="fade-up"
      className="relative min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Contenido */}
          <div className="text-center lg:text-left">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 mt-38 text-sm font-medium">
              Transformación Digital Empresarial
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Desarrollamos
              <span className="text-blue-500"> Software </span>
              que impulsa el crecimiento de tu empresa
            </h1>

            <p className="mt-8 text-xl text-slate-400 leading-relaxed max-w-2xl">
              Creamos sistemas ERP, CRM, aplicaciones web y soluciones
              empresariales que automatizan procesos, reducen costos y
              aumentan la productividad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-semibold shadow-lg">
                Solicitar Cotización
              </button>

              <button className="px-8 py-4 border border-slate-700 hover:border-blue-500 transition rounded-xl text-white font-semibold">
                Ver Servicios
              </button>

            </div>

          </div>

          {/* Dashboard Visual */}

          <div className="relative">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-6">

                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Productividad
                    </span>

                    <span className="text-green-400">
                      +85%
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Automatización
                    </span>

                    <span className="text-blue-400">
                      92%
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Procesos Integrados
                    </span>

                    <span className="text-cyan-400">
                      100%
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;