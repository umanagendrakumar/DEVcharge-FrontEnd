const DevChargeWhat = () => {
  return (
    <section className="my-10">
      <div className="max-w-4xl mx-auto  md:p-12 ">
        <h2 className="text-3xl text-center md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00fff7] to-[#00ccff]">
          What DevCharge?
        </h2>
        <div className="p-8 bg-base-300 rounded-3xl border border-slate-700">
          <p className="text-lg text-gray-300 mb-4">
            DevCharge is a professional networking platform built for early professionals and freshers.      </p>
          <p className="text-lg text-gray-300 mb-4">
            Here, you can      </p>
          <ul className="list-none space-y-2 text-lg text-gray-300 ml-4">
            <li>&bull; Discover devs,</li>
            <li>&bull; Send/accept requests,</li>
            <li>&bull; Ask questions & share ideas directly through chat Feature.</li>
          </ul>
          <p className="text-lg text-gray-300 mt-6 font-semibold">
            In short: Less “corporate blah blah,” more real dev-to-dev energy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DevChargeWhat;