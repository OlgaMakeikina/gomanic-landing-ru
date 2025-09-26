// Секции лендинга
export { default as Hero } from './Hero';
export { default as Services } from './Services'; // Services уже рефакторингован
export * from './About';
export * from './Gallery'; 
export * from './Testimonials';
export { default as Process } from './Process';
export { default as VIP } from './VIP';
export { default as Contact } from './Contact';

// Совместимость со старыми именами
export { QualitySafety } from './About';
export { SocialProof, ClientsSection } from './Testimonials';
export { ResultsGallery } from './Gallery';