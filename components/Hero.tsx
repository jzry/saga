'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-b from-gray-50 via-gray-200 to-gray-300 pt-16">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-screen-xl xl:mx-auto px-6 md:px-10">
        <div className="space-y-6 pt-28 pb-[300px] md:pb-[200px] lg:pb-[300px]">
          <h1 className="max-w-2xl xs:max-w-none text-3xl md:text-3xl font-bold tracking-tight text-gray-900">
            Move, store, or lend money
          </h1>
          <p className="max-w-[460px] text-base sm:text-lg text-gray-700">
            Build financial products with modern banking infrastructure. 
            Fast integration, powerful features, and exceptional support.
          </p>
          <div className="flex items-center space-x-2">
            <a href="/signup">
              <button 
                type="button" 
                className="group flex shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-md text-sm font-medium transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden px-[12px] py-[10px] sm:px-[15px] bg-gray-800 text-white hover:bg-gray-900 focus:ring-green-200 basis-1/2 sm:basis-auto"
              >
                <div>Start building</div>
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <a href="/documentation">
              <button 
                type="button" 
                className="group flex shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-md text-sm font-medium transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden px-[12px] py-[10px] sm:px-[15px] border border-gray-100 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:ring-green-200 basis-1/2 sm:basis-auto"
              >
                <div>View documentation</div>
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Chart Background */}
      <div className="relative w-full max-w-screen-xl xl:mx-auto px-6 md:px-10">
        <div className="pointer-events-none aspect-[128/75] absolute top-[-700px] left-[-50px] z-0 w-[750px] origin-left rotate-[-20deg] sm:top-[-420px] sm:left-[-100px] sm:w-[1000px] md:w-[1200px] lg:w-[1500px] lg:origin-top-left">
          <div className="relative h-full w-full">
            {/* Bar 1 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.3s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #DEFF34, #8CF97C)',
                left: '0%',
                height: '78%',
                width: '15%',
                top: '22%'
              }}
              className="absolute z-10 origin-bottom animate-[squigglebar_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_backwards]"
            />

            {/* Diagonal 1 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.43s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #65F75F, #12F0AA)',
                left: '15%',
                height: '70.67%',
                width: '13.33%',
                top: '22%',
                clipPath: 'polygon(0 0, 100% 41%, 100% 100%, 0 59%)'
              }}
              className="absolute animate-[squigglediagonal_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.43s_backwards]"
            />

            {/* Bar 2 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.56s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #45F4BC, #33DFDF)',
                left: '28.33%',
                height: '78%',
                width: '15%',
                top: '14.67%'
              }}
              className="absolute z-10 origin-bottom animate-[squigglebar_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.56s_backwards]"
            />

            {/* Diagonal 2 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.69s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #01D3D8, #02B7F1)',
                left: '43.33%',
                height: '70.67%',
                width: '13.33%',
                top: '14.67%',
                clipPath: 'polygon(0 0, 100% 41%, 100% 100%, 0 59%)'
              }}
              className="absolute animate-[squigglediagonal_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.69s_backwards]"
            />

            {/* Bar 3 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.82s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #34C8F4, #34BCFF)',
                left: '56.67%',
                height: '78%',
                width: '15%',
                top: '7.33%'
              }}
              className="absolute z-10 origin-bottom animate-[squigglebar_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.82s_backwards]"
            />

            {/* Diagonal 3 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '0.18s',
                animationDelay: '0.95s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                background: 'linear-gradient(100deg, #02A7FF, #02A7FF)',
                left: '71.67%',
                height: '70.67%',
                width: '13.33%',
                top: '7.33%',
                clipPath: 'polygon(0 0, 100% 41%, 100% 100%, 0 59%)'
              }}
              className="absolute animate-[squigglediagonal_0.18s_cubic-bezier(0.25,0.46,0.45,0.94)_0.95s_backwards]"
            />

            {/* Bar 4 */}
            <div 
              style={{
                animationFillMode: 'backwards',
                animationDuration: '1s',
                animationDelay: '1.08s',
                animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                background: 'linear-gradient(100deg, #34BCFF, #34BCFF)',
                left: '85%',
                height: '78%',
                width: '15%',
                top: '0%'
              }}
              className="absolute z-10 origin-bottom animate-[squigglebar_1s_cubic-bezier(0.23,1,0.32,1)_1.08s_backwards]"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes squigglebar {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes squigglediagonal {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}