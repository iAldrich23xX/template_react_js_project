import React from "react";

export default function Index() {
    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">

                {/* Glow */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                    Project Template
                    <span className="block text-primary-soft">
                        Base UI System
                    </span>
                </h1>

                <p className="max-w-xl text-muted-foreground text-lg mb-10">
                    Punto de partida para crear landing pages, dashboards o productos con tu sistema de diseño.
                </p>

                <div className="flex gap-4">
                    <button className="
                        px-8 py-3 rounded-xl
                        bg-primary text-foreground-invert
                        hover:bg-primary/80
                        border border-primary/50
                        transition-all
                        focus:outline-none focus:ring-2 focus:ring-ring
                    ">
                        Acción primaria
                    </button>

                    <button className="
                        px-8 py-3 rounded-xl
                        bg-card
                        text-foreground
                        border border-border
                        hover:border-primary/50
                        transition-all
                    ">
                        Acción secundaria
                    </button>
                </div>
            </section>

            {/* SECTION */}
            <section className="py-24 px-6 bg-card">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                    Templates
                </h2>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Landing", desc: "Plantilla para páginas de presentación de producto." },
                        { title: "Dashboard", desc: "Layout base para paneles administrativos." },
                        { title: "Auth", desc: "Pantallas de login y registro." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="
                                p-6 rounded-xl
                                bg-background
                                border border-border
                                hover:border-primary/50
                                transition-all
                                hover:-translate-y-1
                                shadow-sm
                            "
                        >
                            <h3 className="text-lg font-semibold text-primary-soft mb-2">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}