'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

const getQuestions = (t) => [
  {
    id: 1,
    key: 'goal',
    type: 'choice',
    question: t('quiz.steps.q1'),
    options: [
      {
        label: t('quiz.options.mass'), value: 'mass',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 4h12M6 20h12M4 12h16M9 4v16M15 4v16"/></svg>
      },
      {
        label: t('quiz.options.cut'), value: 'cut',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      },
      {
        label: t('quiz.options.health'), value: 'health',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      },
    ],
  },
  {
    id: 2,
    key: 'age',
    type: 'numeric',
    question: t('quiz.steps.q_age'),
    unit: t('quiz.labels.years'),
    min: 14, max: 99, defaultValue: 25
  },
  {
    id: 3,
    key: 'profile',
    type: 'numeric-group',
    question: t('quiz.steps.q_profile'),
    fields: [
      { key: 'height', label: t('quiz.steps.q_height'), unit: t('quiz.labels.cm'), min: 140, max: 220, defaultValue: 175 },
      { key: 'weight', label: t('quiz.steps.q_weight'), unit: t('quiz.labels.kg'), min: 40, max: 200, defaultValue: 75 }
    ]
  },
  {
    id: 4,
    key: 'location',
    type: 'choice',
    question: t('quiz.steps.q_location'),
    options: [
      {
        label: t('quiz.options.location_gym'), value: 'gym',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18h12M12 2v20M9 6v12M15 6v12M6 18c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2M9 12h6"/></svg>
      },
      {
        label: t('quiz.options.location_home'), value: 'home',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      },
      {
        label: t('quiz.options.location_outdoor'), value: 'outdoor',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>
      },
    ],
  },
  {
    id: 5,
    key: 'experience',
    type: 'choice',
    question: t('quiz.steps.q2'),
    options: [
      {
        label: t('quiz.options.beginner'), value: 'beginner',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      },
      {
        label: t('quiz.options.experienced'), value: 'experienced',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      },
    ],
  },
  {
    id: 6,
    key: 'lactose',
    type: 'choice',
    question: t('quiz.steps.q3'),
    options: [
      {
        label: t('quiz.options.no_lactose'), value: 'no_lactose',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      },
      {
        label: t('quiz.options.lactose'), value: 'lactose',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      },
    ],
  },
];

function getRecommendations(answers, lang) {
  const { goal, experience, location, lactose, age, weight } = answers;

  // Extended product pool with rich metadata for scoring
  const allProducts = [
    {
      id: 1,
      name: '100% Whey Isolate',
      category: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
      priceNum: 49.99,
      img: '/images/raw_1.png',
      tag: { en: 'Top Seller', fr: 'Top Vente', ru: 'Хит продаж' },
      desc: { en: 'Highest purity protein. Ideal for post-workout recovery without extra fats.', fr: 'Protéine de la plus haute pureté. Idéale pour la récupération sans graisses superflues.', ru: 'Самая чистая протеин. Идеально для восстановления без лишних жиров.' },
      lactoseSafe: true,
      scores: { mass: 9, cut: 10, health: 6, beginner: 8, experienced: 9, gym: 9, home: 7, outdoor: 6 },
    },
    {
      id: 2,
      name: 'Serious Mass',
      category: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
      priceNum: 54.99,
      img: '/images/raw_2.jpg',
      tag: { en: 'Mass Gainer', fr: 'Prise de Masse', ru: 'Для набора массы' },
      desc: { en: 'High-calorie gainer for serious mass. Perfect for those who struggle to gain weight.', fr: 'Gainer hypercalorique pour une masse sérieuse.', ru: 'Мощный гейнер для тех, кто с трудом набирает вес.' },
      lactoseSafe: false,
      scores: { mass: 10, cut: 0, health: 2, beginner: 7, experienced: 8, gym: 9, home: 6, outdoor: 4 },
    },
    {
      id: 4,
      name: 'GainLab Premium Whey',
      category: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
      priceNum: 59.99,
      img: '/images/product_tub_branded.png',
      tag: { en: 'Our Brand', fr: 'Notre Marque', ru: 'Наш бренд' },
      desc: { en: 'Flagship GainLab protein with enzymes for optimal absorption.', fr: 'Protéine phare GainLab avec enzymes pour une absorption optimale.', ru: 'Флагман GainLab с энзимами для оптимального усвоения.' },
      lactoseSafe: false,
      scores: { mass: 8, cut: 7, health: 7, beginner: 9, experienced: 8, gym: 8, home: 8, outdoor: 7 },
    },
    {
      id: 3,
      name: 'Pure Creatine Monohydrate',
      category: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
      priceNum: 19.99,
      img: '/images/raw_3.png',
      tag: { en: 'Core', fr: 'Base', ru: 'База' },
      desc: { en: 'Gold standard creatine for explosive strength and muscle volume.', fr: 'Créatine de référence pour la force explosive.', ru: 'Золотой стандарт для взрывной силы и роста мышц.' },
      lactoseSafe: true,
      scores: { mass: 10, cut: 6, health: 5, beginner: 7, experienced: 10, gym: 10, home: 6, outdoor: 4 },
    },
    {
      id: 18,
      name: 'Creatine + Matrix',
      category: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
      priceNum: 34.99,
      img: '/images/5969582290780230847_121.jpg',
      tag: { en: 'Complex', fr: 'Complexe', ru: 'Комплекс' },
      desc: { en: 'Multi-stage creatine blend with transport matrix for better absorption.', fr: 'Mélange de créatine multi-étapes pour une meilleure absorption.', ru: 'Многокомпонентный креатин с транспортной матрицей.' },
      lactoseSafe: true,
      scores: { mass: 9, cut: 5, health: 4, beginner: 5, experienced: 10, gym: 10, home: 5, outdoor: 3 },
    },
    {
      id: 12,
      name: 'BCAA Energy',
      category: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
      priceNum: 32.99,
      img: '/images/amino_1.png',
      tag: { en: 'Energy Kick', fr: 'Coup de Boost', ru: 'Заряд энергии' },
      desc: { en: 'BCAA formula with natural caffeine for focus and recovery.', fr: 'Formule BCAA avec caféine naturelle pour la concentration.', ru: 'BCAA с натуральным кофеином для фокуса и восстановления.' },
      lactoseSafe: true,
      scores: { mass: 7, cut: 9, health: 6, beginner: 6, experienced: 9, gym: 10, home: 7, outdoor: 9 },
    },
    {
      id: 14,
      name: 'EAA Essential Amino Acids',
      category: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
      priceNum: 39.99,
      img: '/images/amino_3.png',
      tag: { en: 'Essential', fr: 'Essentiel', ru: 'База' },
      desc: { en: 'Full EAA spectrum to prevent muscle breakdown and boost protein synthesis.', fr: 'Spectre complet d\'EAA pour prévenir le catabolisme musculaire.', ru: 'Полный спектр ЕАА против распада мышц и для синтеза белка.' },
      lactoseSafe: true,
      scores: { mass: 8, cut: 10, health: 7, beginner: 5, experienced: 10, gym: 9, home: 7, outdoor: 8 },
    },
    {
      id: 15,
      name: 'L-Carnitine 3000',
      category: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
      priceNum: 29.99,
      img: '/images/amino_4.png',
      tag: { en: 'Fat Burn', fr: 'Brûle-graisse', ru: 'Жиросжигание' },
      desc: { en: 'Potent L-Carnitine to support fat metabolism and endurance.', fr: 'L-Carnitine puissante pour soutenir le métabolisme des graisses.', ru: 'Мощный карнитин для жиросжигания и выносливости.' },
      lactoseSafe: true,
      scores: { mass: 1, cut: 10, health: 6, beginner: 7, experienced: 8, gym: 7, home: 7, outdoor: 10 },
    },
    {
      id: 19,
      name: 'Energy Boom Pre-Workout',
      category: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
      priceNum: 39.99,
      img: '/images/5969582290780230855_121.jpg',
      tag: { en: 'Pre-Workout', fr: 'Pré-entraînement', ru: 'Предтреник' },
      desc: { en: 'Explosive energy and focus for your hardest workouts. 300mg caffeine.', fr: 'Énergie explosive pour vos entraînements les plus durs.', ru: 'Взрывная энергия для самых тяжелых тренировок. 300 мг кофеина.' },
      lactoseSafe: true,
      scores: { mass: 8, cut: 7, health: 2, beginner: 3, experienced: 10, gym: 10, home: 3, outdoor: 5 },
    },
    {
      id: 22,
      name: 'Nitric Oxide Booster',
      category: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
      priceNum: 29.99,
      img: '/images/5969582290780230858_121.jpg',
      tag: { en: 'Pump', fr: 'Congestion', ru: 'Памп' },
      desc: { en: 'Stim-free pre-workout pump formula for extreme vascularity.', fr: 'Formule de congestion sans stimulant pour une vascularisation extrême.', ru: 'Предтреник без стимуляторов для максимального пампа.' },
      lactoseSafe: true,
      scores: { mass: 7, cut: 6, health: 5, beginner: 6, experienced: 9, gym: 10, home: 4, outdoor: 3 },
    },
    {
      id: 7,
      name: 'Ultra Mega Sport Stack',
      category: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
      priceNum: 34.99,
      img: '/images/sport-stack.jpg',
      tag: { en: 'Elite', fr: 'Élite', ru: 'Элитная серия' },
      desc: { en: 'Comprehensive multivitamin complex designed for high-performance athletes.', fr: 'Complexe multivitaminé pour les athlètes de haut niveau.', ru: 'Полный витаминный комплекс для профессиональных атлетов.' },
      lactoseSafe: true,
      scores: { mass: 7, cut: 7, health: 9, beginner: 6, experienced: 9, gym: 9, home: 8, outdoor: 9 },
    },
    {
      id: 8,
      name: 'Vitamin A-Z Master Complex',
      category: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
      priceNum: 29.99,
      img: '/images/vitamin-az.jpg',
      tag: { en: 'Big Pack', fr: 'Grand Pack', ru: 'Большая упаковка' },
      desc: { en: 'All-in-one vitamin & mineral solution. One jar = a whole year of health.', fr: 'Solution vitaminée tout-en-un. Un pot = une année entière de santé.', ru: 'Все-в-одном. Одной банки хватит на целый год.' },
      lactoseSafe: true,
      scores: { mass: 5, cut: 5, health: 10, beginner: 9, experienced: 7, gym: 6, home: 9, outdoor: 9 },
    },
    {
      id: 9,
      name: 'GainLab Nutritious Drink',
      category: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
      priceNum: 39.99,
      img: '/images/nutritious-drink.jpg',
      tag: { en: 'Whole Food', fr: 'Alimentation Totale', ru: 'Цельные продукты' },
      desc: { en: 'Nutrient-dense green drink with superfoods and digestive enzymes.', fr: 'Boisson verte dense en nutriments avec superaliments et enzymes.', ru: 'Питательный зеленый микс с суперфудами и ферментами.' },
      lactoseSafe: true,
      scores: { mass: 4, cut: 8, health: 10, beginner: 8, experienced: 7, gym: 6, home: 10, outdoor: 10 },
    },
  ];

  // Score each product based on all quiz answers
  const scored = allProducts
    .filter(p => lactose === 'no_lactose' ? p.lactoseSafe : true) // Filter lactose intolerant
    .map(p => {
      let score = 0;
      if (goal) score += (p.scores[goal] || 0) * 3;           // Weight: goal is most important
      if (experience) score += (p.scores[experience] || 0) * 2; // Weight: experience matters
      if (location) score += (p.scores[location] || 0) * 2;    // Weight: location matters
      // Age-based tweaks
      if (age > 40) score += p.scores.health || 0;             // Older: add health score bonus
      if (age < 22) score -= (p.scores.health || 0) * 0.5;    // Younger: slightly deprioritize pure health
      // Weight-based tweaks for mass goal
      if (goal === 'mass' && weight < 65) score += p.id === 2 ? 15 : 0;  // Underweight → push gainer
      if (goal === 'cut' && weight > 90) score += p.id === 15 ? 10 : 0;  // Overweight on cut → L-Carnitine
      return { ...p, totalScore: score };
    })
    .sort((a, b) => b.totalScore - a.totalScore);

  return scored.slice(0, 3);
}


export default function Quiz() {
  const { t, lang, formatPrice } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    age: 25,
    height: 175,
    weight: 75
  });
  const [result, setResult] = useState(null);
  const [addedIds, setAddedIds] = useState([]);
  const { addToCart } = useCart();

  const questions = getQuestions(t);

  const handleStart = () => setStep(1);

  const handleAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setResult(getRecommendations(newAnswers, lang));
      setStep('result');
    }
  };

  const handleNumericChange = (key, delta, min, max) => {
    setAnswers(prev => ({
      ...prev,
      [key]: Math.min(max, Math.max(min, prev[key] + delta))
    }));
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({ age: 25, height: 175, weight: 75 });
    setResult(null);
    setAddedIds([]);
  };

  const handleAddToCart = (product) => {
    const cartProduct = {
      ...product,
      category: product.category[lang],
      price: formatPrice(product.priceNum)
    };
    addToCart(cartProduct);
    setAddedIds(prev => [...prev, product.id]);
  };

  return (
    <div className="container page-wrapper">
      {step === 0 && (
        <div className="quiz-intro fade-in-up">
          <span className="hero-badge">{t('quiz.intro.badge')}</span>
          <h1>{t('quiz.intro.title')} <span className="text-accent">{t('quiz.intro.titleAccent')}</span></h1>
          <p className="quiz-intro-text">{t('quiz.intro.desc')}</p>
          <button className="btn btn-primary btn-lg" onClick={handleStart}>
            {t('quiz.intro.btnStart')}
          </button>
        </div>
      )}

      {step >= 1 && step <= questions.length && (
        <div className="quiz-question-wrap fade-in-up" key={step}>
          <div className="quiz-progress">
            {questions.map((_, i) => (
              <div key={i} className={`quiz-progress-dot ${i + 1 <= step ? 'active' : ''}`} />
            ))}
          </div>
          <div className="quiz-card">
            <span className="quiz-step-label">{t('quiz.steps.step')} {step} {t('quiz.steps.of')} {questions.length}</span>
            <h2 className="quiz-question" style={{ marginBottom: questions[step-1].type.includes('numeric') ? '1rem' : '1.8rem' }}>
              {questions[step - 1].question}
            </h2>

            {questions[step - 1].type === 'choice' && (
              <div className="quiz-options">
                {questions[step - 1].options.map(opt => (
                  <button
                    key={opt.value}
                    className="quiz-btn"
                    onClick={() => handleAnswer(questions[step - 1].key, opt.value)}
                  >
                    {opt.icon && <span className="quiz-btn-icon">{opt.icon}</span>}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {questions[step - 1].type === 'numeric' && (
              <div className="numeric-step-container" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
                  <button className="qty-btn" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }} onClick={() => handleNumericChange(questions[step-1].key, -1, questions[step-1].min, questions[step-1].max)}>-</button>
                  <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--accent-color)', minWidth: '120px' }}>
                    {answers[questions[step-1].key]}
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginLeft: '8px', fontWeight: '500' }}>{questions[step-1].unit}</span>
                  </div>
                  <button className="qty-btn" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }} onClick={() => handleNumericChange(questions[step-1].key, 1, questions[step-1].min, questions[step-1].max)}>+</button>
                </div>
                <button className="btn btn-primary btn-lg" style={{ marginTop: '1rem', width: '100%' }} onClick={() => handleAnswer(questions[step-1].key, answers[questions[step-1].key])}>
                  {t('quiz.labels.next')}
                </button>
              </div>
            )}

            {questions[step - 1].type === 'numeric-group' && (
              <div className="numeric-step-container">
                {questions[step - 1].fields.map(field => (
                  <div key={field.key} style={{ marginBottom: '2.5rem' }}>
                    <label style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>{field.label}</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                      <button className="qty-btn" onClick={() => handleNumericChange(field.key, -1, field.min, field.max)}>-</button>
                      <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', minWidth: '100px', textAlign: 'center' }}>
                        {answers[field.key]}
                        <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>{field.unit}</span>
                      </div>
                      <button className="qty-btn" onClick={() => handleNumericChange(field.key, 1, field.min, field.max)}>+</button>
                    </div>
                  </div>
                ))}
                <button className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem', width: '100%' }} onClick={() => handleAnswer(null, null)}>
                  {t('quiz.labels.next')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="quiz-result fade-in-up">
          <div className="quiz-result-header">
            <span className="result-emoji">💪</span>
            <h2>{t('quiz.result.title')}</h2>
            <p className="text-secondary">{t('quiz.result.subtitle')}</p>
          </div>
          <div className="result-products">
            {result && result.length > 0 ? result.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                isAdded={addedIds.includes(product.id)}
                formatPrice={formatPrice}
                customClass="result-card"
                imageHeight="220px"
                imageObjectFit="cover"
                actionText={addedIds.includes(product.id) ? t('catalog.btnAdded') : t('catalog.btnAddToCart')}
                actionClass="btn-primary"
                actionDisabled={addedIds.includes(product.id)}
                onActionClick={() => handleAddToCart(product)}
              />
            )) : (
              <div className="empty-state">
                <p>{t('quiz.result.empty')}</p>
              </div>
            )}
          </div>
          <div className="quiz-restart">
            <button className="btn btn-secondary" onClick={handleRestart}>{t('quiz.result.btnRestart')}</button>
          </div>
        </div>
      )}
    </div>
  );
}

