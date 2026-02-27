'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const sections = [
  {
    id: 'about',
    title: 'О нас',
    subtitle: 'Математический эталон в мире безопасности',
    problem: 'Хаос в документах и процессах — главная причина убытков и проверок. Многие компании живут в режиме постоянного тушения пожаров.',
    solution: 'Эталон-ПБ — это системный подход к производственной безопасности. Наша команда объединяет экспертов с многолетним опытом.',
    result: 'Наши клиенты возвращаются снова и снова, потому что однажды попробовав системный подход, невозможно вернуться к хаосу.',
    image: '/about.png',
    link: '/about'
  },
  {
    id: 'supervising',
    title: 'Супервайзинг',
    subtitle: '«Глаза» владельца на объекте',
    problem: 'Подрядчики нарушают сроки и технологию, качество работ страдает, а владелец узнаёт о проблемах слишком поздно.',
    solution: 'Полевой контроль 24/7. Наши супервайзеры находятся на объекте, контролируя соблюдение всех норм в режиме реального времени.',
    result: 'Экономия бюджета до 30% за счёт превентивного контроля. Полная прозрачность процессов.',
    image: '/supervising.png',
    link: '/supervising'
  },
  {
    id: 'risks',
    title: 'Управление рисками',
    subtitle: 'Превращаем хаос в предсказуемость',
    problem: 'Угрозы становятся убытками прежде, чем вы успеваете отреагировать. Большинство компаний работают в реактивном режиме.',
    solution: 'Прогнозирование на основе данных и аналитики позволяет выявлять скрытые риски и принимать превентивные меры.',
    result: 'Снижение аварийности, оптимизация затрат и уверенность в завтрашнем дне.',
    image: '/risks.png',
    link: '/risks'
  },
  {
    id: 'audit',
    title: 'Аудит',
    subtitle: 'Честное зеркало вашего бизнеса',
    problem: 'Инспекторы находят нарушения, о которых вы не знали. Штрафы, приостановка деятельности, репутационные потери.',
    solution: 'Беспристрастная проверка на соответствие производственным стандартам. Найдём слабые места раньше контролирующих органов.',
    result: 'Детальный отчёт с рекомендациями — ваша дорожная карта к безопасности.',
    image: '/audit.png',
    link: '/audit'
  },
  {
    id: 'support',
    title: 'Сопровождение',
    subtitle: 'Аутсорсинг безопасности «под ключ»',
    problem: 'Содержать штат специалистов дорого. Отслеживать изменения в законодательстве некогда. Проверки застают врасплох.',
    solution: 'Снимаем с вас всю головную боль по безопасности. Вы занимаетесь бизнесом, мы — всем остальным.',
    result: 'Предсказуемый бюджет, гарантированный результат. Проактивное предотвращение проблем.',
    image: '/support.png',
    link: '/support'
  },
  {
    id: 'training',
    title: 'Обучение',
    subtitle: 'Культура безопасности как навык',
    problem: 'Сотрудники знают правила, но не понимают их смысл. Формальные лекции не меняют поведение.',
    solution: 'Не скучные лекции, а реальные навыки. Интерактивные методики, построенные на реальных кейсах.',
    result: 'Культура безопасности становится частью ДНК компании.',
    image: '/training.png',
    link: '/training'
  },
  {
    id: 'docs',
    title: 'Документация',
    subtitle: 'Юридическая броня',
    problem: 'Документы составлены «для галочки». При проверке выясняется, что они не защищают.',
    solution: 'Разработка приказов, планов и регламентов — это не бюрократия, а ваша защита.',
    result: 'Полный комплект документации по производственной безопасности.',
    image: '/docs.png',
    link: '/docs'
  },
  {
    id: 'system',
    title: 'Построение системы',
    subtitle: 'Архитектура безопасности',
    problem: 'Разрозненные документы и процессы не работают как единая система. Эффективность минимальна.',
    solution: 'Создаём скелет производственной безопасности с нуля. Единая работающая система.',
    result: 'Система, которая адаптируется, учится и предсказывает.',
    image: '/system.png',
    link: '/system'
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12">
                <Image src="/логотип.png" alt="Эталон-ПБ" fill className="object-contain" />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-wide">ЭТАЛОН-ПБ</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => scrollToSection('about')} className="nav-link">О нас</button>
              <button onClick={() => scrollToSection('supervising')} className="nav-link">Супервайзинг</button>
              <button onClick={() => scrollToSection('risks')} className="nav-link">Риски</button>
              <button onClick={() => scrollToSection('audit')} className="nav-link">Аудит</button>
              <button onClick={() => scrollToSection('support')} className="nav-link">Сопровождение</button>
              <button onClick={() => scrollToSection('training')} className="nav-link">Обучение</button>
              <button onClick={() => scrollToSection('docs')} className="nav-link">Документация</button>
              <button onClick={() => scrollToSection('system')} className="nav-link">Система</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => scrollToSection('about')} className="mobile-nav-btn">О нас</button>
                <button onClick={() => scrollToSection('supervising')} className="mobile-nav-btn">Супервайзинг</button>
                <button onClick={() => scrollToSection('risks')} className="mobile-nav-btn">Риски</button>
                <button onClick={() => scrollToSection('audit')} className="mobile-nav-btn">Аудит</button>
                <button onClick={() => scrollToSection('support')} className="mobile-nav-btn">Сопровождение</button>
                <button onClick={() => scrollToSection('training')} className="mobile-nav-btn">Обучение</button>
                <button onClick={() => scrollToSection('docs')} className="mobile-nav-btn">Документация</button>
                <button onClick={() => scrollToSection('system')} className="mobile-nav-btn">Система</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="bg-white">
        {/* Hero Section */}
        <section id="hero" className="py-16 lg:py-24 text-center bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              РЕШЕНИЯ В ПРОИЗВОДСТВЕННОЙ
              <br />
              <span className="text-emerald-600">БЕЗОПАСНОСТИ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ваше спокойствие — наша работа
            </p>
            
            {/* Cube Image with Pulse Animation */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto mb-8">
              {/* Cube image - base layer */}
              <div className="cube-container">
                <Image 
                  src="/куб.png" 
                  alt="Цифровой кодекс" 
                  fill 
                  className="object-contain opacity-90"
                  priority
                />
              </div>
              {/* Pulse rings - overlay layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pulse-ring-1" />
                <div className="pulse-ring-2" />
                <div className="pulse-ring-3" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="glow-ring" />
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Оставить заявку
            </button>
          </div>
        </section>

        {/* Service Sections */}
        {sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id} 
            className={`py-20 lg:py-28 ${index % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-lg text-emerald-600 font-medium mb-6">
                    {section.subtitle}
                  </p>
                  
                  <div className="space-y-5">
                    <div className="content-block">
                      <p className="text-sm font-semibold text-red-600 mb-1">ПРОБЛЕМА</p>
                      <p className="text-gray-600">{section.problem}</p>
                    </div>
                    <div className="content-block">
                      <p className="text-sm font-semibold text-emerald-600 mb-1">РЕШЕНИЕ</p>
                      <p className="text-gray-700">{section.solution}</p>
                    </div>
                    <div className="content-block">
                      <p className="text-sm font-semibold text-blue-600 mb-1">РЕЗУЛЬТАТ</p>
                      <p className="text-gray-700">{section.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href={section.link} className="btn-secondary">
                      Подробнее
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="btn-primary-outline"
                    >
                      Оставить заявку
                    </button>
                  </div>
                </div>
                
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                    <Image 
                      src={section.image} 
                      alt={section.title} 
                      fill 
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-white border-t border-gray-100">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Оставьте заявку, и мы ответим в течение 30 минут
            </p>
            
            <form className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input type="text" className="form-input" placeholder="Иван Петров" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input type="tel" className="form-input" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea className="form-textarea" rows={4} placeholder="Опишите вашу задачу..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/логотип.png" alt="Эталон-ПБ" fill className="object-contain" />
              </div>
              <span className="font-bold text-gray-900">ЭТАЛОН-ПБ</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .nav-link {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-link:hover {
          color: #10b981;
          background: #f3f4f6;
        }
        .mobile-nav-btn {
          padding: 12px;
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          background: #f9fafb;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .mobile-nav-btn:hover {
          color: #10b981;
          background: #f3f4f6;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
          text-decoration: none;
        }
        .btn-primary:hover {
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #10b981;
          background: white;
          border: 2px solid #10b981;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #10b981;
          color: white;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
        }
        .btn-primary-outline {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
        }
        .btn-primary-outline:hover {
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }
        .content-block {
          padding: 12px 16px;
          background: white;
          border-radius: 12px;
          border: 1px solid #f3f4f6;
        }
        .form-input {
          width: 100%;
          padding: 14px 16px;
          font-size: 15px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          background: white;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          font-size: 15px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          resize: vertical;
          background: white;
          transition: all 0.2s;
        }
        .form-textarea:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        /* Cube container - blended with background */
        .cube-container {
          position: absolute;
          inset: 0;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.15));
          mix-blend-mode: normal;
        }
        /* Glow effect around cube */
        .glow-ring {
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: glow-pulse 2s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        /* Pulse animation for cube - waves passing through */
        .pulse-ring-1 {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(16, 185, 129, 0.4);
          border-radius: 50%;
          animation: pulse 3s ease-out infinite;
        }
        .pulse-ring-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(16, 185, 129, 0.3);
          border-radius: 50%;
          animation: pulse 3s ease-out infinite 1s;
        }
        .pulse-ring-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          animation: pulse 3s ease-out infinite 2s;
        }
        @keyframes pulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
