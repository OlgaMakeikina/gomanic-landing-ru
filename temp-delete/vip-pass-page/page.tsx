import { Metadata } from 'next';
import VIPPassForm from '@/components/tracking/VIPPassForm';
import VIPPassValidator from '@/components/tracking/VIPPassValidator';
import SimpleNavigation from '@/components/ui/SimpleNavigation';

export const metadata: Metadata = {
  title: 'VIP Pass - Gomanic Brasil | Experiência Premium de Manicure',
  description: 'Adquira seu VIP Pass Gomanic e garanta acesso exclusivo aos nossos serviços premium. Agendamento direto no Fresha com validade de 90 dias.',
  keywords: 'vip pass, manicure premium, agendamento, fresha, gomanic brasil',
  openGraph: {
    title: 'VIP Pass Gomanic - Experiência Premium',
    description: 'Garanta sua experiência premium com nosso VIP Pass exclusivo.',
    type: 'website',
  }
};

export default function VIPPassPage() {
  return (
    <>
      <SimpleNavigation />
      <div className="min-h-screen bg-[#fdfffe]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-horizon text-[#444f55] mb-4">
              VIP Pass Gomanic
            </h1>
            <p className="text-xl text-[#444f55]/70 max-w-2xl mx-auto">
              Sua experiência premium garantida. Escolha seu pacote, compre seu VIP Pass 
              e agende diretamente no Fresha quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <VIPPassForm />
            <VIPPassValidator />
          </div>

          <div className="bg-[#FEFEFE] border border-[#444f55]/10 rounded-lg p-8">
            <h2 className="text-2xl font-horizon text-[#444f55] mb-6">Como Funciona o VIP Pass</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#444f55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-medium text-[#444f55] mb-2">Escolha & Compre</h3>
                <p className="text-sm text-[#444f55]/70">
                  Selecione seu pacote VIP preferido e finalize a compra com seus dados.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#444f55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-medium text-[#444f55] mb-2">Receba seu Código</h3>
                <p className="text-sm text-[#444f55]/70">
                  Você receberá imediatamente seu código VIP único e link direto para agendamento.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#444f55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-medium text-[#444f55] mb-2">Agende no Fresha</h3>
                <p className="text-sm text-[#444f55]/70">
                  Use seu código no Fresha para agendar quando for mais conveniente.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#444f55]/5 rounded-lg">
              <h3 className="font-medium text-[#444f55] mb-3">Vantagens do VIP Pass:</h3>
              <ul className="space-y-2 text-sm text-[#444f55]/80">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#444f55] rounded-full mr-3"></span>
                  Validade de 90 dias - agende quando quiser
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#444f55] rounded-full mr-3"></span>
                  Agendamento direto na plataforma Fresha
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#444f55] rounded-full mr-3"></span>
                  Garantia de disponibilidade para serviços premium
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#444f55] rounded-full mr-3"></span>
                  Código único e seguro
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#444f55] rounded-full mr-3"></span>
                  Suporte completo via WhatsApp
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}