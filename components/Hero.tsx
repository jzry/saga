import { ArrowRight } from 'lucide-react';
export default function Hero() {
return (
    <div className="relative bg-gradient-to-b overflow-hidden">

        {/* Background Image */}
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundPosition: 'bottom'
          }}
        />
        
        {/* Content */}
        <section className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-[100px] pt-30 pb-10 md:py-32 lg:py-40">
        <div className="max-w-4xl">
        <h1 className="text-5xl text-gray-900 md:text-7xl font-bold tracking-tight mb-6 leading-tight font-sans">
                    Move, store, or lend money
        <br></br>
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl leading-relaxed">
                    Build financial products with modern banking infrastructure.
                    <br></br>
                    Fast integration, powerful features, and exceptional support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md text-base hover:bg-gray-800 transition flex items-center justify-center">
                      Start building
        <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <button className="cursor-pointer border border-gray-300 text-gray-900 px-6 py-3 rounded-md text-base bg-white hover:border-gray-400 transition">
                      View documentation
        </button>
        </div>
        </div>
        </section>
    </div>
  );
}