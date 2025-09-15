// Секции лендинга
export { default as Hero } from './Hero';
export { Services as default } from './Services'; // Services уже рефакторингован
export * from './About';
export * from './Gallery'; 
export * from './Testimonials';
export { default as Process } from './Process';
export { default as VIP } from './VIP';
export { default as Contact } from './Contact';

// Совместимость со старыми именами
export { SegurancaQualidade } from './About';
export { SocialProof, ClientsSection } from './Testimonials';
export { ResultsGallery } from './Gallery';