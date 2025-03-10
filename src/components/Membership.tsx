export default function Membership() {
  const handleClick = (fileName: string) => {
    const filePath = `/assets/documents/${fileName}`;
    window.open(filePath, '_blank');
  };

  return (
    <div
      className="relative isolate bg-white px-6 py-10 sm:py-32 lg:px-8 animate-fade-in"
      id="features"
    >
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Staňte se členom ešte dnes
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
        Vyberte si plán, ktorý najlepšie vyhovuje vašim potrebám.
      </p>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {/* Hobby Plan */}
        <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10 animate-slide-up">
          <h3 className="text-base text-center font-semibold text-indigo-600">
            Individuálny člen
          </h3>
          <div className="mt-6 flex justify-center">
            <img
              src="/assets/images/use.png"
              alt="Individuálny člen"
              className="h-48 w-auto object-contain"
            />
          </div>
          <a
            href="#"
            onClick={() => handleClick('zz-prihlaska-individualny-clen.doc')}
            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Vyplniť prihlášku{' '}
          </a>
        </div>
        {/* Kolektivny clen */}
        <div className="rounded-3xl bg-yellow-300 p-8 ring-1 shadow-2xl ring-gray-900/10 sm:p-10 animate-slide-up">
          <h3 className="text-base text-center font-semibold text-black">
            Kolektívny člen
          </h3>
          <div className="mt-6 flex justify-center">
            <img
              src="/assets/images/group.svg"
              alt="Individuálny člen"
              className="h-48 w-auto object-contain"
            />
          </div>
          <a
            href="#"
            onClick={() => handleClick('zz-prihlaska-kolektivny-clen.doc')}
            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Vyplniť prihlášku{' '}
          </a>
        </div>

        {/* Rokovací poraidok */}
        <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10 animate-slide-up">
          <h3 className="text-base text-center font-semibold text-black">
            Rokovací poriadok
          </h3>
          <div className="mt-6 flex justify-center">
            <img
              src="/assets/images/policy.svg"
              alt="Individuálny člen"
              className="h-48 w-auto object-contain"
            />
          </div>
          <a
            href="#"
            onClick={() => handleClick('Stanovy-OSRS_po_zminach-1.pdf')}
            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Stiahnuť Rokovací poriadok{' '}
          </a>
        </div>
      </div>
    </div>
  );
}
