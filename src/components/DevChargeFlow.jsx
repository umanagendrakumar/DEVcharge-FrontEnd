import React from 'react'

const DevChargeFlow = () => {
  const steps = [
        { title: "Landing Page", description: "You’re here 🎉" },
        { title: "Login or Sign Up", description: "Start your journey" },
        { title: "Profile", description: "Edit Your Profile" },
        { title: "Connect / Ignore", description: "Filter your feed" },
        { title: "Connections Page", description: "All your current dev-buddies" },
        { title: "Requests Received", description: "Who wants to connect with you" },
        { title: "Requests Sent", description: "Your pending requests" },
        { title: "Ignored Profiles", description: "Those you swiped left on 😬" },
        { title: "Feedback Page", description: "Tell us how we did 💬" },
    ];
  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto text-center px-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ccff] to-[#00fff7]">
                DevCharge Working Flow
            </h2>
            
            <div className="relative flex flex-col items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="relative p-6 bg-base-300 rounded-2xl shadow-xl border border-slate-700 w-full md:max-w-md mx-auto">
                            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-2xl font-bold bg-slate-950 px-4 py-1 rounded-full border-x border-b border-slate-700 text-transparent bg-clip-text bg-gradient-to-r from-[#9766fa] to-[#0edbff]">
                                {index + 1}
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-base md:text-lg">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-5 my-4"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </section>
  )
}

export default DevChargeFlow