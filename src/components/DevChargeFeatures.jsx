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

const DevChargeFeatures = () => {
  const features = [
        { text: "Profile creation & editing", icon: <ListTodo /> },
        { text: "Send / accept / reject / ignore requests", icon: <SlidersHorizontal /> },
        { text: "Real-time chat with your connections", icon: <MessageCircleMore /> },
        { text: "Organized sections (Connections, Requests, Ignored, etc..)", icon: <Link2 /> },
        { text: "Feedback system for continuous improvement", icon: <Info /> }
    ];
  return (
    <section className="h-[calc(100svh-80px)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3764f9] to-[#0edbff]">
                Features of DevCharge
            </h2>
            <div className="flex flex-col justify-center gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-base-300 p-6 rounded-2xl border border-slate-700">
                        <div className="text-[#00ccff] mt-1 flex-shrink-0">{feature.icon}</div>
                        <p className="text-lg text-gray-300 text-left">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default DevChargeFeatures