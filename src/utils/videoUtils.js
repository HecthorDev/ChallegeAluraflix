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
        <div class="flex flex-col items-center gap-6 overflow-hidden py-4">
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-blue/30 bg-black">
            <iframe 
              src="${embedUrl}?autoplay=1" 
              class="absolute inset-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-center px-4">
            <h3 class="text-3xl font-black text-white uppercase mb-4 tracking-tighter">${item.titulo}</h3>
            <p class="text-lg font-light text-white/70 leading-relaxed max-w-2xl mx-auto">${item.descripcion}</p>
          </div>
        </div>`,
      width: '90%',
      maxWidth: '1000px',
      background: '#090F16',
      showCloseButton: true,
      showConfirmButton: false,
      padding: '2rem',
      customClass: {
        popup: 'rounded-[32px] border-2 border-brand-blue/20 shadow-[0_0_80px_rgba(0,0,0,0.8)]',
        closeButton: 'text-white hover:text-brand-blue transition-colors focus:outline-none'
      }
    });
  }
};