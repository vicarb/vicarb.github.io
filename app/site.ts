export const site = {
  name: 'Víctor Cárdenas',
  email: '',
  whatsapp: '',
  linkedin: '',
};

export function contactUrl() {
  if (site.whatsapp) return `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me gustaría conversar sobre un proceso que quiero automatizar.')}`;
  if (site.email) return `mailto:${site.email}?subject=${encodeURIComponent('Conversemos sobre una automatización')}`;
  return null;
}
