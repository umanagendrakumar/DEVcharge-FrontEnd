import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevChargeFuture = () => {
  const improvements = [
        { title: "DEVcharge Pro", description: "Reconnect with ignored profiles (because hey, maybe they’ve leveled up 👀)." },
        { title: "Connection Cleanup", description: "Remove already connected users if things go stale." },
        { title: "AI Chatbot 🤖", description: "Your DEVcharge guide, answering everything from 'How to use?' to 'Why is my request ignored?'" },
    ];
  return (
    <section className="my-10">
      <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#9766fa] to-[#00ccff]">
                Future Improvements
            </h2>
            <p className="text-gray-400 text-lg mb-12">
                We’re just getting started. Here’s what’s charging next.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                {improvements.map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-base-300 p-6 rounded-2xl shadow-xl border border-slate-700">
                        <Rocket className="h-10 w-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-base">{item.description}</p>

                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20'>
            <Link to="/auth" className="w-40 sm:w-50 bg-gradient-to-r from-[#9766fa] via-[#3764f9] to-[#0edbff] py-4 rounded flex items-center justify-center cursor-pointer mx-auto">
                    GET STARTED
                </Link>
        </div>
    </section>
  )
}

export default DevChargeFuture