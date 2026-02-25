import Swal from "sweetalert2";

export const handlePlay = (e, item, startPos) => {
  const endPos = { x: e.clientX, y: e.clientY };
  const distance = Math.sqrt(
    (endPos.x - startPos.x) ** 2 + (endPos.y - startPos.y) ** 2
  );

  if (distance < 5) {
    const embedUrl = item.video.includes("youtube.com/embed/")
      ? item.video
      : item.video.replace("watch?v=", "embed/");

    Swal.fire({
      html: `
        <div class="flex flex-col items-center gap-4 overflow-hidden py-2 md:gap-6 md:py-4">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-brand-blue/30 bg-black md:rounded-2xl md:border-2">
            <iframe 
              src="${embedUrl}?autoplay=1" 
              class="absolute inset-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="text-center px-2 md:px-4">
            <h3 class="text-xl font-black text-white uppercase mb-2 tracking-tighter md:text-3xl md:mb-4">${item.titulo}</h3>
            <p class="text-sm font-light text-white/70 leading-relaxed max-w-2xl mx-auto md:text-lg">${item.descripcion}</p>
          </div>
        </div>`,
      width: '95%',
      background: '#090F16',
      showCloseButton: true,
      showConfirmButton: false,
      padding: '1rem',
      customClass: {
        popup: 'rounded-[24px] border border-brand-blue/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] md:max-w-[1000px] md:rounded-[32px] md:border-2 md:padding-[2rem]',
        closeButton: 'text-white hover:text-brand-blue transition-colors focus:outline-none'
      }
    });
  }
};