'use client';

export default function FontTest() {
  const testText = "ГОМАНИК ТЕСТ ШРИФТА";
  
  const toggleFallback = () => {
    const html = document.documentElement;
    html.classList.toggle('no-cyrillic-support');
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl mb-6 text-gray-800">Тест поддержки кириллических шрифтов</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg text-gray-600 mb-2">vogue-masthead</h3>
          <div className="vogue-masthead text-6xl">{testText}</div>
        </div>
        
        <div>
          <h3 className="text-lg text-gray-600 mb-2">vogue-headline</h3>
          <div className="vogue-headline text-4xl">{testText}</div>
        </div>
        
        <div>
          <h3 className="text-lg text-gray-600 mb-2">vogue-subhead</h3>
          <div className="vogue-subhead text-2xl">{testText}</div>
        </div>
        
        <div>
          <h3 className="text-lg text-gray-600 mb-2">vogue-logo</h3>
          <div className="vogue-logo text-lg">{testText}</div>
        </div>
      </div>
      
      <button 
        onClick={toggleFallback}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Переключить на резервные шрифты
      </button>
    </div>
  );
}
