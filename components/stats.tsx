export default function StatsSection() {
    return (
        <section className="py-1 md:py-10 mb-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+0</div>
                        <p>Stars on GitHub</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+$3,500</div>
                        <p>Sales</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+5</div>
                        <p>Projects</p>

                    </div>
                </div>
                <p></p>
            </div>
        </section>
    )
}
