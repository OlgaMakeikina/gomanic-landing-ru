import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Gomanic',
  description: 'Политика обработки персональных данных',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#3B3B3A]" style={{ color: '#FEFEFE' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl mb-8 text-center"
            style={{ fontFamily: 'Horizon, serif' }}
          >
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
          </h1>
          
          <div className="space-y-8" style={{ fontFamily: 'Garet, sans-serif' }}>
            <section>
              <h2 className="text-2xl mb-4">1. Общие положения</h2>
              <p className="text-lg leading-7 mb-4">
                Настоящая Политика обработки персональных данных действует в отношении 
                всех персональных данных, которые сайт может получить о Пользователе во 
                время использования им сайта.
              </p>
              <p className="text-lg leading-7">
                Использование сайта означает безоговорочное согласие Пользователя с 
                настоящей Политикой и указанными в ней условиями обработки его 
                персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">2. Персональные данные</h2>
              <p className="text-lg leading-7 mb-4">
                Под персональными данными понимается любая информация, относящаяся к 
                прямо или косвенно определенному или определяемому физическому лицу.
              </p>
              <p className="text-lg leading-7">
                Сайт собирает и обрабатывает следующие персональные данные:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">3. Цели обработки данных</h2>
              <p className="text-lg leading-7 mb-4">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Связь с клиентами для записи на услуги</li>
                <li>Предоставление информации об услугах</li>
                <li>Обработка заявок и бронирований</li>
                <li>Улучшение качества обслуживания</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">4. Правовые основания</h2>
              <p className="text-lg leading-7">
                Обработка персональных данных осуществляется на основании согласия 
                субъекта персональных данных на обработку его персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-lg leading-7">
                Персональные данные не передаются третьим лицам, за исключением 
                случаев, предусмотренных действующим законодательством Российской 
                Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">6. Права субъекта персональных данных</h2>
              <p className="text-lg leading-7 mb-4">
                Субъект персональных данных имеет право:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие в суде</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">7. Контактная информация</h2>
              <p className="text-lg leading-7">
                По всем вопросам, связанным с обработкой персональных данных, 
                Вы можете обратиться в Telegram: {' '}
                <a 
                  href="https://t.me/gomanicteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: '#FEFEFE' }}
                >
                  @gomanicteam
                </a>
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/"
              className="inline-block px-8 py-3 rounded-lg transition-opacity hover:opacity-80"
              style={{ 
                backgroundColor: '#FEFEFE', 
                color: '#3B3B3A',
                fontFamily: 'Garet, sans-serif'
              }}
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}