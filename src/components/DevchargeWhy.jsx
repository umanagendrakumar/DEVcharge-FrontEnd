import React from 'react'
import {
    ArrowRight,
    Code2,
    Users,
    Zap,
    Info,
    Rocket,
    MessageCircleMore,
    Link2,
    ListTodo,
    SlidersHorizontal // Changed from 'Switch' to resolve the import error
} from 'lucide-react';
const DevchargeWhy = () => {
  return (
    <section className="h-[calc(100svh-80px)] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9766fa] to-[#3764f9]">
                      Why DevCharge?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 items-stretch">
                      <div className="bg-base-300 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700">
                          <div className="flex items-center text-red-400 mb-4">
                              <Info className="h-8 w-8 mr-3 flex-shrink-0" />
                              <h3 className="text-2xl font-semibold">The Problem</h3>
                          </div>
                          <p className="text-gray-300 text-lg">
                              Big platforms like LinkedIn or any can feel like walking into a giant conference room where:
                          </p>
                          <ul className="list-none space-y-2 text-gray-300 text-lg mt-4 ml-4">
                              <li>&bull; Half the crowd is talking marketing,</li>
                              <li>&bull; Another chunk is sharing memes,</li>
                              <li>&bull; And you’re just… a fresher with a resume.</li>
                          </ul>
                          <p className="text-gray-400 mt-4 text-sm italic">
                              We get it. It’s overwhelming. 😅
                          </p>
                      </div>
                      <div className="bg-base-300 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700">
                          <div className="flex items-center text-green-400 mb-4">
                              <Rocket className="h-8 w-8 mr-3 flex-shrink-0" />
                              <h3 className="text-2xl font-semibold">The Solution</h3>
                          </div>
                          <p className="text-gray-300 text-lg mb-4">
                              DEVcharge is built just for developers:
                          </p>
                          <ul className="list-none space-y-2 text-gray-300 text-lg ml-4">
                              <li>&bull; No noisy newsfeeds, no ads, no endless scrolling.</li>
                              <li>&bull; Just clean workflows → request, connect, chat, build networks.</li>
                          </ul>
                          <p className="text-gray-400 mt-4 text-sm italic">
                              Simple. Purpose-driven. Exactly what devs need.
                          </p>
                          <p className="text-gray-400 mt-2 text-sm italic">
                              Think of DEVcharge as your debugged version of networking.
                          </p>
                      </div>
                  </div>
              </div>
    </section>
  )
}

export default DevchargeWhy