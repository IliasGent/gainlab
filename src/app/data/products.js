export const mockProducts = [
  {
    id: 1,
    img: '/images/raw_1.png',
    priceNum: 49.99,
    tag: { en: 'Top Seller', fr: 'Top Vente', ru: 'Хит продаж' },
    name: { en: '100% Whey Isolate', fr: '100% Whey Isolate', ru: '100% Whey Isolate' },
    category: 'protein',
    categoryNames: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
    flavors: { en: ['Vanilla', 'Chocolate', 'Banana'], fr: ['Vanille', 'Chocolat', 'Banane'], ru: ['Ваниль', 'Шоколад', 'Банан'] },
    fullDesc: {
      en: 'Highest degree of protein purification. Ideal for post-workout recovery, providing muscles with essential amino acids without extra fats and carbs.',
      fr: 'Le plus haut degré de purification des protéines. Idéal pour la récupération après l\'entraînement, fournissant aux muscles des acides aminés essentiels sans graisses ni glucides supplémentaires.',
      ru: 'Высочайшая степень очистки белка. Идеально подходит для восстановления после тренировок, обеспечивая мышцы необходимыми аминокислотами без лишних жиров и углеводов.'
    },
    specs: { protein: '25g', fat: '0.5g', carbs: '1g', calories: '110' },
    usage: {
      en: 'Mix one scoop (30g) with 200-250 ml of water or fat-free milk. Take immediately after workout or in the morning.',
      fr: 'Mélangez une mesure (30g) avec 200-250 ml d\'eau ou de lait écrémé. Prendre immédiatement après la séance ou le matin.',
      ru: 'Смешайте одну мерную ложку (30г) со 200-250 мл воды или обезжиренного молока. Принимайте сразу после тренировки или утром.'
    },
    reviews: [
      { user: 'Thomas', rating: 5, date: '12.03.2024', comment: { en: 'Vanilla flavor is top notch, mixes perfectly!', fr: 'Le goût vanille est génial, se mélange parfaitement !', ru: 'Вкус ваниль просто топовый, размешивается без комочков!' } },
      { user: 'Sophie', rating: 4, date: '05.03.2024', comment: { en: 'Good isolate, though a bit pricey. Quality is premium.', fr: 'Bon isolat, bien qu\'un peu cher. La qualité est premium.', ru: 'Хороший изолят, но цена кусается. Зато качество на высоте.' } },
      { user: 'Marc', rating: 5, date: '28.02.2024', comment: { en: 'Best protein I have tried. Chocolate is very rich.', fr: 'Meilleure protéine que j\'ai essayée. Le chocolat est très riche.', ru: 'Лучший протеин из тех что пробовал. Брал шоколад - очень насыщенный.' } },
      { user: 'Elena', rating: 5, date: '20.03.2024', comment: { en: 'Perfect for weight loss. No extra calories.', fr: 'Parfait pour perdre du poids. Pas de calories supplémentaires.', ru: 'Отлично для сушки. Никаких лишних калорий.' } },
      { user: 'Julian', rating: 5, date: '15.03.2024', comment: { en: 'Mixability is 10/10 with cold water.', fr: 'La solubilité est de 10/10 avec de l\'eau froide.', ru: 'Размешивается на 10/10 даже в ледяной воде.' } },
      { user: 'Claire', rating: 4, date: '10.03.2024', comment: { en: 'Clean protein, light on the stomach.', fr: 'Protéine propre, légère pour l\'estomac.', ru: 'Чистый белок, никакой тяжести в животе.' } },
      { user: 'Anton', rating: 5, date: '01.03.2024', comment: { en: 'Used it for 2 months, recovery is noticeably faster.', fr: 'Utilisé depuis 2 mois, la récupération est visiblement plus rapide.', ru: 'Пью два месяца, восстановление стало заметно быстрее.' } },
      { user: 'Isabelle', rating: 5, date: '22.02.2024', comment: { en: 'The best quality on the market right now.', fr: 'La meilleure qualité du marché actuellement.', ru: 'Лучшее качество на рынке сейчас.' } },
      { user: 'Michael', rating: 4, date: '15.02.2024', comment: { en: 'Premium feel, high quality isolate.', fr: 'Sensation premium, isolat de haute qualité.', ru: 'Премиальный продукт, чувствуется качество.' } },
      { user: 'Olga', rating: 5, date: '05.02.2024', comment: { en: 'Love the vanilla taste in my oatmeal.', fr: 'J\'adore le goût vanille dans mon porridge.', ru: 'Обожаю ванильный вкус в овсянке.' } }
    ]
  },
  {
    id: 2,
    img: '/images/raw_2.jpg',
    priceNum: 54.99,
    tag: { en: 'Mass Gainer', fr: 'Prise de Masse', ru: 'Для набора массы' },
    name: { en: 'Serious Mass', fr: 'Serious Mass', ru: 'Serious Mass' },
    category: 'protein',
    categoryNames: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
    flavors: { en: ['Chocolate', 'Banana'], fr: ['Chocolat', 'Banane'], ru: ['Шоколад', 'Банан'] },
    fullDesc: {
      en: 'Powerful gainer for those who find it hard to gain weight. Contains complex carbs and protein for maximum growth.',
      fr: 'Gainer puissant pour ceux qui ont du mal à prendre du poids. Contient des glucides complexes et des protéines pour une croissance maximale.',
      ru: 'Мощный гейнер для тех, кто испытывает трудности с набором веса. Содержит комплекс сложных углеводов и протеина для максимального роста.'
    },
    specs: { protein: '50g', fat: '4g', carbs: '250g', calories: '1250' },
    usage: {
      en: '2 scoops with 700 ml of water. If you are a beginner, start with half a serving.',
      fr: '2 mesures avec 700 ml d\'eau. Si vous êtes débutant, commencez par une demi-portion.',
      ru: '2 мерные ложки на 700 мл воды. Если вы новичок, начните с половины порции.'
    },
    reviews: [
      { user: 'Lukas', rating: 5, date: '20.02.2024', comment: { en: 'Gained 4 kg in a month! Growth is real.', fr: 'J\'ai pris 4 kg en un mois ! La croissance est réelle.', ru: 'Набрал 4 кг за месяц! Результат реальный.' } },
      { user: 'Emma', rating: 4, date: '15.02.2024', comment: { en: 'Very sweet, better mixed with more water.', fr: 'Très sucré, mieux vaut mélanger avec plus d\'eau.', ru: 'Очень сладкий, лучше разбавлять большим количеством воды.' } },
      { user: 'Dmitry', rating: 5, date: '10.03.2024', comment: { en: 'Perfect for skiny guys like me.', fr: 'Parfait pour les gars minces comme moi.', ru: 'Лучшее решение для эктоморфов.' } },
      { user: 'Sarah', rating: 4, date: '05.03.2024', comment: { en: 'Good calories, chocolate tastes great but is thick.', fr: 'Bonnes calories, le chocolat a bon goût mais est épais.', ru: 'Много калорий, вкус шоколада отличный, но смесь густая.' } },
      { user: 'Maxim', rating: 5, date: '01.03.2024', comment: { en: 'Finally started seeing scale movement.', fr: 'J\'ai enfin commencé à voir du mouvement sur la balance.', ru: 'Наконец-то стрелка весов сдвинулась.' } },
      { user: 'Pierre', rating: 5, date: '25.02.2024', comment: { en: 'Best gainer on the market, period.', fr: 'Meilleur gainer du marché, point final.', ru: 'Лучший гейнер на рынке, без вариантов.' } },
      { user: 'Anna', rating: 4, date: '18.02.2024', comment: { en: 'Works well for energy during long sessions too.', fr: 'Fonctionne bien pour l\'énergie pendant les longues sessions aussi.', ru: 'Хорошо дает энергию для долгих тренировок.' } },
      { user: 'Jack', rating: 5, date: '12.02.2024', comment: { en: 'Chocolate is like a milkshake. Amazing!', fr: 'Le chocolat est comme un milkshake. Incroyable !', ru: 'Шоколадный вкус как настоящий молочный коктейль.' } },
      { user: 'Victor', rating: 5, date: '05.02.2024', comment: { en: 'High carb quality, no bloat.', fr: 'Haute qualité de glucides, pas de ballonnement.', ru: 'Качественные угли, никакой тяжести и вздутия.' } },
      { user: 'Yana', rating: 5, date: '01.02.2024', comment: { en: 'Pricey but worth every penny for gain.', fr: 'Cher mais vaut chaque centime pour la prise de masse.', ru: 'Дороговато, но для набора массы оно того стоит.' } }
    ]
  },
  {
    id: 3,
    img: '/images/raw_3.png',
    priceNum: 19.99,
    tag: { en: 'New', fr: 'Nouveau', ru: 'Новинка' },
    name: { en: 'Pure Creatine Monohydrate', fr: 'Créatine Monohydrate Pure', ru: 'Pure Creatine Monohydrate' },
    category: 'creatine',
    categoryNames: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
    flavors: { en: ['Unflavored', 'Orange', 'Raspberry'], fr: ['Sans goût', 'Orange', 'Framboise'], ru: ['Натуральный', 'Апельсин', 'Малинка'] },
    fullDesc: {
      en: 'The gold standard of creatine. Increases strength and muscle volume.',
      fr: 'Le standard de la créatine. Augmente la force et le volume musculaire.',
      ru: 'Золотой стандарт креатина. Увеличивает силовые показатели и объем мышц.'
    },
    specs: { purity: '99.9%', servings: '60', weight: '300g' },
    usage: {
      en: '5g daily. Can be mixed with protein or juice.',
      fr: '5g par jour. Peut être mélangé avec des protéines ou du jus.',
      ru: '5г в день. Можно смешивать с протеином или соком.'
    },
    reviews: [
      { user: 'Chloe', rating: 5, date: '01.03.2024', comment: { en: 'Classic performance booster. Works as expected.', fr: 'Booster de performance classique. Fonctionne comme prévu.', ru: 'Классика. Работает как надо.' } },
      { user: 'Igor', rating: 5, date: '12.03.2024', comment: { en: 'No flavor, perfect for mixing with morning shake.', fr: 'Sans goût, parfait pour mélanger avec le shake du matin.', ru: 'Без вкуса, идеально мешать с утренним протеином.' } },
      { user: 'Jean', rating: 4, date: '10.03.2024', comment: { en: 'Good purity, fine powder.', fr: 'Bonne pureté, poudre fine.', ru: 'Хорошая очистка, мелкий помол.' } },
      { user: 'Alice', rating: 5, date: '05.03.2024', comment: { en: 'Increases my strength significantly.', fr: 'Augmente considérablement ma force.', ru: 'Заметно прибавил в силовых.' } },
      { user: 'Sergey', rating: 5, date: '01.03.2024', comment: { en: 'Price/quality ratio is unbeatable.', fr: 'Le rapport qualité/prix est imbattable.', ru: 'Лучшее соотношение цена/качество.' } },
      { user: 'Lucie', rating: 4, date: '25.02.2024', comment: { en: 'Basic supplement but effective.', fr: 'Supplément de base mais efficace.', ru: 'Базовая добавка, но работает безотказно.' } },
      { user: 'Boris', rating: 5, date: '20.02.2024', comment: { en: 'Been using for months, great results.', fr: 'Utilisé depuis des mois, d\'excellents résultats.', ru: 'Пью несколько месяцев, результаты супер.' } },
      { user: 'Nikita', rating: 5, date: '15.02.2024', comment: { en: 'No stomach issues, very fine powder.', fr: 'Pas de problèmes d\'estomac, poudre très fine.', ru: 'Никаких проблем с ЖКТ, очень мелкий помол.' } },
      { user: 'Mila', rating: 5, date: '10.02.2024', comment: { en: 'Orange flavor is refreshing.', fr: 'Le goût orange est rafraîchissant.', ru: 'Апельсиновый вкус очень освежает.' } },
      { user: 'Robert', rating: 4, date: '05.02.2024', comment: { en: 'Trustworthy brand and product.', fr: 'Marque et produit dignes de confiance.', ru: 'Проверенный бренд и продукт.' } }
    ]
  },
  {
    id: 4,
    img: '/images/product_tub_branded.png',
    priceNum: 59.99,
    tag: { en: 'Our Brand', fr: 'Notre Marque', ru: 'Наш бренд' },
    name: { en: 'GainLab Premium Whey', fr: 'GainLab Premium Whey', ru: 'GainLab Premium Whey' },
    category: 'protein',
    categoryNames: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
    flavors: { en: ['Vanilla', 'Chocolate'], fr: ['Vanille', 'Chocolat'], ru: ['Ваниль', 'Шоколад'] },
    fullDesc: {
      en: 'GainLab flagship product. Mix of concentrate and isolate with enzymes for absorption.',
      fr: 'Produit phare de GainLab. Mélange de concentré et d\'isolat avec des enzymes pour l\'absorption.',
      ru: 'Флагманский продукт GainLab. Смесь концентрата и изолята с энзимами.'
    },
    specs: { protein: '24g', bcaa: '5.5g', fat: '1.5g', calories: '120' },
    usage: {
      en: '1-2 servings daily between meals or after training.',
      fr: '1 à 2 portions par jour entre les repas ou après l\'entraînement.',
      ru: 'Принимайте 1-2 порции в день между приемами пищи или после тренировки.'
    },
    reviews: [
      { user: 'Leo', rating: 5, date: '10.03.2024', comment: { en: 'Very gentle on the stomach. Premium quality.', fr: 'Très doux pour l\'estomac. Qualité premium.', ru: 'Очень легкий для желудка. Качество супер.' } },
      { user: 'Sasha', rating: 5, date: '25.03.2024', comment: { en: 'The chocolate flavor is not too sweet, just right.', fr: 'Le goût chocolat n\'est pas trop sucré, juste ce qu\'il faut.', ru: 'Шоколадный вкус не приторный, в самый раз.' } },
      { user: 'David', rating: 4, date: '15.03.2024', comment: { en: 'Premium mix, enzymes really help with digestion.', fr: 'Mélange premium, les enzymes aident vraiment à la digestion.', ru: 'Премиальный состав, энзимы реально помогают усвоению.' } },
      { user: 'Julie', rating: 5, date: '10.03.2024', comment: { en: 'GainLab is my new favorite brand.', fr: 'GainLab est ma nouvelle marque préférée.', ru: 'GainLab теперь мой любимый бренд.' } },
      { user: 'Arthur', rating: 5, date: '05.03.2024', comment: { en: 'Fantastic product, high protein content.', fr: 'Produit fantastique, haute teneur en protéines.', ru: 'Фантастический продукт, много белка на порцию.' } },
      { user: 'Maria', rating: 4, date: '01.03.2024', comment: { en: 'A bit expensive but you pay for the quality.', fr: 'Un peu cher mais on paie pour la qualité.', ru: 'Дороговато, но за качество стоит переплатить.' } },
      { user: 'Pavel', rating: 5, date: '20.02.2024', comment: { en: 'Best digestion ever with this whey.', fr: 'Meilleure digestion jamais vue с этим сывороточным протеином.', ru: 'Лучшее усвоение из всех протеинов, что я пил.' } },
      { user: 'Emma', rating: 5, date: '15.02.2024', comment: { en: 'Clean ingredients, no fillers.', fr: 'Ingrédients propres, sans agents de remplissage.', ru: 'Чистые ингредиенты, никаких наполнителей.' } },
      { user: 'Lucas', rating: 4, date: '10.02.2024', comment: { en: 'High quality isolate/concentrate blend.', fr: 'Mélange isolat/concentré de haute qualité.', ru: 'Качественная смесь изолята и концентрата.' } },
      { user: 'Nina', rating: 5, date: '05.02.2024', comment: { en: 'Vanilla goes great with fruits.', fr: 'La vanille se marie très bien avec les fruits.', ru: 'Ваниль отлично сочетается с фруктами.' } }
    ]
  },
  {
    id: 5,
    img: '/images/vitamin-c.jpg',
    priceNum: 14.99,
    tag: { en: 'Immunity', fr: 'Immunité', ru: 'Иммунитет' },
    name: { en: 'Vitamin C 1000', fr: 'Vitamine C 1000', ru: 'Витамин C 1000' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'High-dose Vitamin C for immune support and antioxidant protection during intense training.',
      fr: 'Vitamine C à haute dose pour le soutien immunitaire et la protection antioxydante pendant l\'entraînement intense.',
      ru: 'Высокодозированный Витамин С для поддержки иммунитета и антиоксидантной защиты при интенсивных нагрузках.'
    },
    specs: { dosage: '1000mg', caps: '90', servings: '90' },
    usage: {
      en: '1 capsule daily with a meal.',
      fr: '1 capsule par jour avec un repas.',
      ru: '1 капсула в день во время еды.'
    },
    reviews: [
      { user: 'Sarah', rating: 5, date: '11.04.2024', comment: { en: 'Essential for winter training. Great value.', fr: 'Essentiel pour l\'entraînement d\'hiver. Excellent rapport qualité-prix.', ru: 'Незаменим для тренировок в холодное время года. Хорошая цена.' } },
      { user: 'Alexey', rating: 5, date: '05.04.2024', comment: { en: 'Helps with recovery after heavy sessions.', fr: 'Aide à la récupération après des séances lourdes.', ru: 'Помогает восстановиться после тяжелых тренировок.' } },
      { user: 'Mathilde', rating: 4, date: '01.04.2024', comment: { en: 'Good dosage, easy to swallow caps.', fr: 'Bon dosage, capsules faciles à avaler.', ru: 'Хорошая дозировка, легко глотать.' } },
      { user: 'John', rating: 5, date: '25.03.2024', comment: { en: 'Basic but high quality.', fr: 'Basique mais de haute qualité.', ru: 'Базово, но качественно.' } },
      { user: 'Elena', rating: 5, date: '20.03.2024', comment: { en: 'Trusted immunity booster.', fr: 'Booster d\'immunité de confiance.', ru: 'Проверенный бустер иммунитета.' } },
      { user: 'Pierre', rating: 5, date: '15.03.2024', comment: { en: 'Best value for 1000mg dosage.', fr: 'Meilleure valeur pour un dosage de 1000 mg.', ru: 'Отличное соотношение цены и дозировки 1000мг.' } },
      { user: 'Svetlana', rating: 4, date: '10.03.2024', comment: { en: 'Does what it says. No issues.', fr: 'Fait ce qu\'il dit. Pas de problèmes.', ru: 'Работает как заявлено. Проблем нет.' } },
      { user: 'Tim', rating: 5, date: '05.03.2024', comment: { en: 'Essential for hard training phases.', fr: 'Essentiel pour les phases d\'entraînement intensif.', ru: 'Незаменим при тяжелых нагрузках.' } },
      { user: 'Sophie', rating: 5, date: '01.03.2024', comment: { en: 'High absorption formula.', fr: 'Formule à haute absorption.', ru: 'Формула с хорошим усвоением.' } },
      { user: 'Dmitry', rating: 5, date: '20.02.2024', comment: { en: 'My go-to Vit C.', fr: 'Ma vitamine C de référence.', ru: 'Мой основной выбор Витамина С.' } }
    ]
  },
  {
    id: 6,
    img: '/images/biotin.jpg',
    priceNum: 12.49,
    tag: { en: 'Beauty', fr: 'Beauté', ru: 'Красота и здоровье' },
    name: { en: 'Biotin 2500 µg', fr: 'Biotine 2500 µg', ru: 'Биотин 2500 мкг' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'Premium Biotin for healthy hair, skin, and nails. Supports energy metabolism.',
      fr: 'Biotine Premium pour la santé des cheveux, de la peau et des ongles. Soutient le métabolisme énergétique.',
      ru: 'Премиальный биотин для здоровья волос, кожи и ногтей. Поддерживает энергетический обмен.'
    },
    specs: { strength: '2500mcg', tabs: '60', type: 'Quali-Biotin' },
    usage: {
      en: '1 tablet daily. Swallow with water.',
      fr: '1 comprimé par jour. Avaler avec de l\'eau.',
      ru: '1 таблетка в день. Запивать водой.'
    },
    reviews: [
      { user: 'Elena', rating: 5, date: '09.04.2024', comment: { en: 'Noticeable difference in hair quality after 3 weeks.', fr: 'Différence notable dans la qualité des cheveux après 3 semaines.', ru: 'Заметила разницу в качестве волос через 3 недели.' } },
      { user: 'Alice', rating: 5, date: '01.04.2024', comment: { en: 'My nails are much stronger now.', fr: 'Mes ongles sont beaucoup plus forts maintenant.', ru: 'Ногти стали гораздо крепче.' } },
      { user: 'Jean', rating: 4, date: '25.03.2024', comment: { en: 'Good quality, small tablets.', fr: 'Bonne qualité, petits comprimés.', ru: 'Хорошее качество, маленькие таблетки.' } },
      { user: 'Marie', rating: 5, date: '20.03.2024', comment: { en: 'Visible results in skin texture.', fr: 'Résultats visibles sur la texture de la peau.', ru: 'Заметен результат на коже.' } },
      { user: 'Victoria', rating: 5, date: '15.03.2024', comment: { en: 'Best biotin I tried.', fr: 'Meilleure biotine que j\'aie essayée.', ru: 'Лучший биотин из тех, что пробовала.' } },
      { user: 'Olga', rating: 4, date: '10.03.2024', comment: { en: 'Trustworthy supplements.', fr: 'Suppléments dignes de confiance.', ru: 'Вызывает доверие.' } },
      { user: 'Chris', rating: 5, date: '05.03.2024', comment: { en: 'Good price for 2500mcg.', fr: 'Bon prix pour 2500 mcg.', ru: 'Хорошая цена для 2500 мкг.' } },
      { user: 'Svetlana', rating: 5, date: '01.03.2024', comment: { en: 'Healthy hair is real with this.', fr: 'Des cheveux sains sont une réalité avec ça.', ru: 'Здоровые волосы реально.' } },
      { user: 'Marc', rating: 5, date: '20.02.2024', comment: { en: 'Helps with energy levels too.', fr: 'Aide également aux niveaux d\'énergie.', ru: 'Помогает и с энергией тоже.' } },
      { user: 'Nina', rating: 5, date: '15.02.2024', comment: { en: 'Premium quality product.', fr: 'Produit de qualité premium.', ru: 'Продукт премиум качества.' } }
    ]
  },
  {
    id: 7,
    img: '/images/sport-stack.jpg',
    priceNum: 34.99,
    tag: { en: 'Elite', fr: 'Élite', ru: 'Элитная серия' },
    name: { en: 'Ultra Mega Sport Stack', fr: 'Ultra Mega Sport Stack', ru: 'Ultra Mega Sport Stack' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'Comprehensive multivitamin complex designed specifically for high-performance athletes.',
      fr: 'Complexe multivitaminé complet conçu spécifiquement pour les athlètes de haut niveau.',
      ru: 'Комплексный мультивитаминный стак, разработанный специально для профессиональных атлетов.'
    },
    specs: { vitamins: '24+', minerals: '10+', type: 'Capsules' },
    usage: {
      en: '2 capsules daily with breakfast.',
      fr: '2 capsules par jour au petit-déjeuner.',
      ru: '2 капсулы в день во время завтрака.'
    },
    reviews: [
      { user: 'Arthur', rating: 5, date: '10.04.2024', comment: { en: 'The most complete stack I have ever used. Energy levels are up.', fr: 'Le stack le plus complet que j\'aie jamais utilisé. Les niveaux d\'énergie augmentent.', ru: 'Самый полный комплекс из всех, что пробовал. Чувствую прилив сил.' } },
      { user: 'Maxime', rating: 5, date: '01.04.2024', comment: { en: 'Ideal for professional athletes.', fr: 'Idéal pour les athlètes professionnels.', ru: 'Идеально для профессионалов.' } },
      { user: 'Irina', rating: 4, date: '25.03.2024', comment: { en: 'Great variety of vitamins inside.', fr: 'Grande variété de vitamines à l\'intérieur.', ru: 'Огромный состав витаминов.' } },
      { user: 'Dmitry', rating: 5, date: '20.03.2024', comment: { en: 'Works better than standard multis.', fr: 'Fonctionne mieux que les multis standard.', ru: 'Работает лучше обычных витаминов.' } },
      { user: 'Julien', rating: 5, date: '15.03.2024', comment: { en: 'Elite series indeed. Premium feel.', fr: 'Série Élite en effet. Sensation premium.', ru: 'Реально элитная серия. Чувствуется уровень.' } },
      { user: 'Pauline', rating: 4, date: '10.03.2024', comment: { en: 'Complete package for daily needs.', fr: 'Forfait complet pour les besoins quotidiens.', ru: 'Полный набор для ежедневных нужд.' } },
      { user: 'Anton', rating: 5, date: '05.03.2024', comment: { en: 'Improved my focus and stamina.', fr: 'Amélioré ma concentration et mon endurance.', ru: 'Улучшил фокус и выносливость.' } },
      { user: 'Sarah', rating: 5, date: '01.03.2024', comment: { en: 'Best stack for peak performance.', fr: 'Meilleur stack pour des performances de pointe.', ru: 'Лучший стак для пиковых нагрузок.' } },
      { user: 'Lukas', rating: 5, date: '20.02.2024', comment: { en: 'Everything you need in one jar.', fr: 'Tout ce dont vous avez besoin dans un seul pot.', ru: 'Все что нужно в одной банке.' } },
      { user: 'Sophie', rating: 5, date: '15.02.2024', comment: { en: 'Premium quality minerals.', fr: 'Minéraux de qualité premium.', ru: 'Минералы премиального качества.' } }
    ]
  },
  {
    id: 8,
    img: '/images/vitamin-az.jpg',
    priceNum: 29.99,
    tag: { en: 'Big Pack', fr: 'Grand Pack', ru: 'Большая упаковка' },
    name: { en: 'Vitamin A-Z Master Complex', fr: 'Vitamin A-Z Master Complex', ru: 'Vitamin A-Z Master Complex' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'All-in-one vitamin and mineral solution. One jar equals a whole year of health (360 tabs).',
      fr: 'Solution vitaminée et minérale tout-en-un. Un pot est égal à une année entière de santé (360 tabs).',
      ru: 'Все-в-одном: полный набор витаминов и минералов. Одной банки хватит на целый год (360 таб).'
    },
    specs: { count: '360 tabs', servings: '360', duration: '1 Year' },
    usage: {
      en: '1 tablet daily with a main meal.',
      fr: '1 comprimé par jour au repas principal.',
      ru: '1 таблетка в день во время основного приема пищи.'
    },
    reviews: [
      { user: 'Igor', rating: 5, date: '05.04.2024', comment: { en: 'Incredible value. Set it and forget it for a year.', fr: 'Valeur incroyable. Prenez-le et oubliez-le pendant un an.', ru: 'Потрясающая выгода. Купил и забыл на год.' } },
      { user: 'Marc', rating: 5, date: '01.04.2024', comment: { en: 'Perfect for long term health support.', fr: 'Parfait pour un soutien de santé à long terme.', ru: 'Идеально для долгосрочной поддержки здоровья.' } },
      { user: 'Elena', rating: 4, date: '25.03.2024', comment: { en: 'Huge jar, great price.', fr: 'Énorme pot, super prix.', ru: 'Огромная банка, отличная цена.' } },
      { user: 'Svetlana', rating: 5, date: '20.03.2024', comment: { en: 'Classic multivitamin, well balanced.', fr: 'Multivitamine classique, bien équilibrée.', ru: 'Классические мультивитамины, хороший баланс.' } },
      { user: 'David', rating: 5, date: '15.03.2024', comment: { en: 'Best value on the website.', fr: 'Meilleure valeur sur le site web.', ru: 'Самая выгодная покупка на сайте.' } },
      { user: 'Julie', rating: 4, date: '10.03.2024', comment: { en: 'No more buying vitamins every month.', fr: 'Plus besoin d\'acheter des vitamines tous les mois.', ru: 'Больше не нужно покупать витамины каждый месяц.' } },
      { user: 'Anton', rating: 5, date: '05.03.2024', comment: { en: 'Practical and effective.', fr: 'Pratique et efficace.', ru: 'Практично и эффективно.' } },
      { user: 'Isabelle', rating: 5, date: '01.03.2024', comment: { en: 'High concentration of active ingredients.', fr: 'Haute concentration d\'ingrédients actifs.', ru: 'Высокая концентрация активных веществ.' } },
      { user: 'Pavel', rating: 5, date: '20.02.2024', comment: { en: 'Trusted master complex.', fr: 'Serré complex maître de confiance.', ru: 'Надежный мастер-комплекс.' } },
      { user: 'Anna', rating: 5, date: '15.02.2024', comment: { en: 'Covers all bases for 365 days.', fr: 'Couvre toutes les bases pendant 365 jours.', ru: 'Закрывает все потребности на 365 дней.' } }
    ]
  },
  {
    id: 9,
    img: '/images/nutritious-drink.jpg',
    priceNum: 39.99,
    tag: { en: 'Whole Food', fr: 'Alimentation Totale', ru: 'Цельные продукты' },
    name: { en: 'GainLab Nutritious Drink', fr: 'GainLab Nutritious Drink', ru: 'GainLab Nutritious Drink' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'Nutrient-dense green drink mix. Packed with superfoods, vitamins, and digestive enzymes.',
      fr: 'Mélange de boisson verte dense en nutriments. Riche en superaliments, vitamines et enzymes digestives.',
      ru: 'Питательный зеленый микс. Насыщен суперфудами, витаминами и пищеварительными ферментами.'
    },
    specs: { superfoods: '15+', enzyme_blend: 'Yes', organics: '100%' },
    usage: {
      en: 'Mix one scoop with 300ml of cold water or your favorite smoothie.',
      fr: 'Mélangez une mesure with 300 ml d\'eau froide ou votre smoothie préféré.',
      ru: 'Смешайте одну мерную ложку с 300 мл холодной воды или вашего любимого смузи.'
    },
    reviews: [
      { user: 'Svetlana', rating: 4, date: '08.04.2024', comment: { en: 'Taste is very "green", but energy levels are incredible.', fr: 'Le goût est très "vert", mais les niveaux d\'énergie sont incroyables.', ru: 'Вкус очень "зеленый", но самочувствие после него отличное.' } },
      { user: 'Thibault', rating: 5, date: '01.04.2024', comment: { en: 'Best superfood mix I had.', fr: 'Meilleur mix de superaliments que j\'aie eu.', ru: 'Лучший суперфуд-микс.' } },
      { user: 'Caroline', rating: 5, date: '25.03.2024', comment: { en: 'Digestive enzymes really work.', fr: 'Les enzymes digestives fonctionnent vraiment.', ru: 'Пищеварительные ферменты реально работают.' } },
      { user: 'Arthur', rating: 4, date: '20.03.2024', comment: { en: 'Healthy start of the day.', fr: 'Début de journée sain.', ru: 'Здоровое начало дня.' } },
      { user: 'Ivan', rating: 5, date: '15.03.2024', comment: { en: 'Feel much lighter and energized.', fr: 'Sentez-vous beaucoup plus léger et dynamisé.', ru: 'Чувствую себя легче и энергичнее.' } },
      { user: 'Marie', rating: 5, date: '10.03.2024', comment: { en: 'Organic ingredients are top quality.', fr: 'Les ingrédients biologiques sont de première qualité.', ru: 'Органические ингредиенты высшего качества.' } },
      { user: 'Lukas', rating: 5, date: '05.03.2024', comment: { en: 'Great for metabolic support.', fr: 'Idéal pour le soutien métabolique.', ru: 'Отлично для обмена веществ.' } },
      { user: 'Emma', rating: 4, date: '01.03.2024', comment: { en: 'Natural and clean.', fr: 'Naturel et propre.', ru: 'Натурально и чисто.' } },
      { user: 'Nicolas', rating: 5, date: '20.02.2024', comment: { en: 'Excellent nutrient density.', fr: 'Excellente densité nutritionnelle.', ru: 'Запредельная плотность нутриентов.' } },
      { user: 'Sophia', rating: 5, date: '15.02.2024', comment: { en: 'Highly recommend for daily health.', fr: 'Recommande fortement pour la santé quotidienne.', ru: 'Рекомендую для ежедневной поддержки здоровья.' } }
    ]
  },
  {
    id: 10,
    img: '/images/vitamins-minerals-100.jpg',
    priceNum: 19.99,
    tag: { en: 'Daily', fr: 'Quotidien', ru: 'На каждый день' },
    name: { en: 'Vitamins and Minerals 100%', fr: 'Vitamins and Minerals 100%', ru: 'Витамины и Минералы 100%' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'Balanced daily formula with Ginseng and natural Vitamin C. 20 active ingredients.',
      fr: 'Formule quotidienne équilibrée avec du ginseng et de la vitamine C naturelle. 20 ingrédients actifs.',
      ru: 'Сбалансированная дневная формула с женьшенем и натуральным витамином С. 20 активных компонентов.'
    },
    specs: { ingredients: '20', ginseng: 'Added', tabs: '120' },
    usage: {
      en: '1 tablet twice a day or 2 tablets in the morning.',
      fr: '1 comprimé deux fois par jour ou 2 comprimés le matin.',
      ru: '1 таблетка дважды в день или 2 таблетки утром.'
    },
    reviews: [
      { user: 'Jean', rating: 5, date: '11.04.2024', comment: { en: 'Perfect base for my morning routine.', fr: 'Base parfaite pour ma routine du matin.', ru: 'Идеальная база для утреннего ритуала.' } },
      { user: 'Ilya', rating: 5, date: '05.04.2024', comment: { en: 'Ginseng gives a nice subtle energy boost.', fr: 'Le ginseng donne un subtil coup de pouce énergétique.', ru: 'Женьшень дает приятную бодрость.' } },
      { user: 'Lucie', rating: 4, date: '01.04.2024', comment: { en: 'Good multivitamin for every day.', fr: 'Bonne multivitamine pour tous les jours.', ru: 'Хорошие витамины на каждый день.' } },
      { user: 'Andrew', rating: 5, date: '25.03.2024', comment: { en: 'Balanced formula, no issues.', fr: 'Formule équilibrée, pas de problèmes.', ru: 'Сбалансированная формула.' } },
      { user: 'Natalia', rating: 5, date: '20.03.2024', comment: { en: 'Feel much better throughout the day.', fr: 'Sentez-vous beaucoup mieux tout au long de la journée.', ru: 'Чувствую себя гораздо лучше днем.' } },
      { user: 'Clément', rating: 4, date: '15.03.2024', comment: { en: 'Very effective basic multis.', fr: 'Multis de base très efficaces.', ru: 'Эффективные базовые витамины.' } },
      { user: 'Sergey', rating: 5, date: '10.03.2024', comment: { en: 'High bioavailability.', fr: 'Haute biodisponibilité.', ru: 'Хорошая биодоступность.' } },
      { user: 'Mila', rating: 5, date: '05.03.2024', comment: { en: 'Essential daily health support.', fr: 'Soutien de santé quotidien essentiel.', ru: 'Важная поддержка здоровья.' } },
      { user: 'Pavel', rating: 5, date: '01.03.2024', comment: { en: 'Ginseng extra is a plus.', fr: 'Le ginseng extra est un plus.', ru: 'Женьшень в составе — большой плюс.' } },
      { user: 'Anna', rating: 5, date: '20.02.2024', comment: { en: 'Trust GainLab formulas.', fr: 'Faites confiance aux formules GainLab.', ru: 'Доверяю формулам GainLab.' } }
    ]
  },
  {
    id: 11,
    img: '/images/multi-hd-liquid.jpg',
    priceNum: 27.49,
    tag: { en: 'Rapid Absorb', fr: 'Absorption Rapide', ru: 'Быстрое усвоение' },
    name: { en: 'Multi-HD Liquid Caps', fr: 'Multi-HD Liquid Caps', ru: 'Multi-HD Liquid Caps' },
    category: 'vitamins',
    categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
    zoom: 1.8,
    offsetY: -3,
    fullDesc: {
      en: 'Premium hardcore series with Coenzyme Q10 in liquid capsules for maximum absorption and bio-availability.',
      fr: 'Série premium hardcore avec Coenzyme Q10 dans des capsules liquides pour une absorption maximale.',
      ru: 'Премиальная хардкор-серия с коэнзимом Q10 в жидких капсулах для максимального усвоения.'
    },
    specs: { coenzyme_q10: 'Added', form: 'Liquid Caps', weight: '60 caps' },
    usage: {
      en: '2 capsules daily. Best taken with healthy fats.',
      fr: '2 capsules par jour. À prendre de préférence avec des graisses saines.',
      ru: '2 капсулы в день. Лучше всего принимать с полезными жирами.'
    },
    reviews: [
      { user: 'Viktor', rating: 5, date: '10.04.2024', comment: { en: 'Liquid caps are the way to go. Feel the difference.', fr: 'Les capsules liquides sont la voie à suivre. Sentez la différence.', ru: 'Жидкие капсулы — это тема. Реально чувствуется разница.' } },
      { user: 'Julien', rating: 5, date: '01.04.2024', comment: { en: 'The Q10 makes a difference for recovery.', fr: 'Le Q10 fait une différence pour la récupération.', ru: 'Q10 реально помогает в восстановлении.' } },
      { user: 'Irina', rating: 5, date: '25.03.2024', comment: { en: 'Premium hardcore series is worth it.', fr: 'La série premium hardcore en vaut la peine.', ru: 'Хардкор серия стоит своих денег.' } },
      { user: 'Mark', rating: 4, date: '20.03.2024', comment: { en: 'High bioavailability liquid caps.', fr: 'Capsules liquides à haute biodisponibilité.', ru: 'Жидкие капсулы усваиваются лучше.' } },
      { user: 'Lukas', rating: 5, date: '15.03.2024', comment: { en: 'Best multivitamin for athletes.', fr: 'Meilleure multivitamine pour les athlètes.', ru: 'Лучшие витамины для атлетов.' } },
      { user: 'Marie', rating: 5, date: '10.03.2024', comment: { en: 'Feel more energized for workouts.', fr: 'Sentez-vous plus énergisé pour les entraînements.', ru: 'Чувствую больше энергии на тренировках.' } },
      { user: 'Anton', rating: 5, date: '05.03.2024', comment: { en: 'Trusted premium brand.', fr: 'Marque premium de confiance.', ru: 'Проверенный премиум бренд.' } },
      { user: 'Chloe', rating: 4, date: '01.03.2024', comment: { en: 'A bit pricey but quality is there.', fr: 'Un peu cher mais la qualité est là.', ru: 'Дороговато, но качество на высоте.' } },
      { user: 'Arthur', rating: 5, date: '20.02.2024', comment: { en: 'Noticeable stamina improvement.', fr: 'Amélioration notable de l\'endurance.', ru: 'Заметно прибавилось выносливости.' } },
      { user: 'Sophia', rating: 5, date: '15.02.2024', comment: { en: 'Highly effective multivitamin.', fr: 'Multivitamine très efficace.', ru: 'Эффективные мультивитамины.' } }
    ]
  },
  {
    id: 12,
    img: '/images/amino_1.png',
    priceNum: 32.99,
    tag: { en: 'Energy Kick', fr: 'Coup de Boost', ru: 'Заряд энергии' },
    name: { en: 'BCAA Energy', fr: 'BCAA Energy', ru: 'BCAA Energy' },
    category: 'amino',
    categoryNames: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
    flavors: { en: ['Rocket Pop', 'Blue Raz'], fr: ['Rocket Pop', 'Blue Raz'], ru: ['Rocket Pop', 'Blue Raz'] },
    fullDesc: {
      en: 'High-performance BCAA formula with natural caffeine for mental focus and recovery support.',
      fr: 'Formule BCAA haute performance avec caféine naturelle pour la concentration mentale et le soutien à la récupération.',
      ru: 'Высокоэффективная формула BCAA с натуральным кофеином для концентрации внимания и поддержки восстановления.'
    },
    specs: { bcaa: '5g', caffeine: '110mg', beta_alanine: '1.5g', servings: '30' },
    usage: {
      en: 'Mix one scoop with 250ml of water. Drink before or during workout.',
      fr: 'Mélangez une mesure avec 250 ml d\'eau. Boire avant ou pendant l\'entraînement.',
      ru: 'Смешайте одну мерную ложку с 250 мл воды. Пейте перед или во время тренировки.'
    },
    reviews: [
      { user: 'Alex', rating: 5, date: '12.04.2024', comment: { en: 'Rocket Pop flavor is childhood in a bottle. Great energy!', fr: 'Le goût Rocket Pop est un souvenir d\'enfance. Super énergie !', ru: 'Вкус Rocket Pop — это детство в бутылке. Отличная энергия!' } },
      { user: 'Dmitry', rating: 5, date: '05.04.2024', comment: { en: 'The energy kick is perfect for morning cardio.', fr: 'Le coup de pouce énergétique est parfait для кардио le matin.', ru: 'Заряд энергии идеален для утреннего кардио.' } },
      { user: 'Manon', rating: 4, date: '01.04.2024', comment: { en: 'Blue Raz tastes amazing, focus is great.', fr: 'Blue Raz a un goût incroyable, la concentration est excellente.', ru: 'Blue Raz очень вкусный, фокус отличный.' } },
      { user: 'Sergey', rating: 5, date: '25.03.2024', comment: { en: 'Best BCAA for afternoon slump.', fr: 'Meilleur BCAA pour le coup de barre de l\'après-midi.', ru: 'Лучшие BCAA от дневной усталости.' } },
      { user: 'Lukas', rating: 5, date: '20.03.2024', comment: { en: 'No jitters, just clean energy.', fr: 'Pas de tremblements, juste une énergie pure.', ru: 'Никакого мандража, только чистая энергия.' } },
      { user: 'Cathy', rating: 4, date: '15.03.2024', comment: { en: 'Very refreshing during intense workouts.', fr: 'Très rafraîchissant pendant les entraînements intenses.', ru: 'Очень освежает во время тренировки.' } },
      { user: 'Maxim', rating: 5, date: '10.03.2024', comment: { en: 'High performance indeed.', fr: 'Haute performance en effet.', ru: 'Реально высокая производительность.' } },
      { user: 'Emma', rating: 5, date: '05.03.2024', comment: { en: 'Mixes instantly, tastes great.', fr: 'Se mélange instantanément, a bon goût.', ru: 'Размешивается мгновенно, очень вкусно.' } },
      { user: 'Arthur', rating: 5, date: '01.03.2024', comment: { en: 'Great for muscle protection during cut.', fr: 'Idéal pour la protection musculaire pendant la sèche.', ru: 'Отлично защищает мышцы на сушке.' } },
      { user: 'Sophie', rating: 5, date: '20.02.2024', comment: { en: 'Favorite pre/intra workout drink.', fr: 'Boisson de prédilection avant/intra-entraînement.', ru: 'Любимый напиток во время тренировки.' } }
    ]
  },
  {
    id: 13,
    img: '/images/amino_2.png',
    priceNum: 24.99,
    tag: { en: 'Vegan', fr: 'Végan', ru: 'Веган' },
    name: { en: 'L-Glutamine (Vegan)', fr: 'L-Glutamine (Végan)', ru: 'L-Glutamine (Веган)' },
    category: 'amino',
    categoryNames: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
    fullDesc: {
      en: 'Pure fermented L-Glutamine for gut health and muscle repair. 100% plant-based formula.',
      fr: 'L-Glutamine fermentée pure pour la santé intestinale et la réparation musculaire. Formule 100% végétale.',
      ru: 'Чистый ферментированный L-глютамин для здоровья кишечника и восстановления мышц. 100% растительная формула.'
    },
    specs: { purity: '100%', source: 'Fermented', capsules: '120 Veggie' },
    usage: {
      en: 'Take 2 capsules twice a day with water.',
      fr: 'Prendre 2 capsules deux fois par jour avec de l\'eau.',
      ru: 'Принимайте по 2 капсулы два раза в день, запивая водой.'
    },
    reviews: [
      { user: 'Marie', rating: 5, date: '10.04.2024', comment: { en: 'Best glutamine for sensitive stomachs.', fr: 'Meilleure glutamine pour les estomacs sensibles.', ru: 'Лучший глютамин для чувствительного желудка.' } },
      { user: 'Oleg', rating: 5, date: '05.04.2024', comment: { en: 'Vegan formula is very clean.', fr: 'La formule végane est très propre.', ru: 'Веганская формула очень чистая.' } },
      { user: 'Julie', rating: 4, date: '01.04.2024', comment: { en: 'Helps with recovery after leg days.', fr: 'Aide à la récupération après les jours de jambes.', ru: 'Помогает восстановиться после дня ног.' } },
      { user: 'Anton', rating: 5, date: '25.03.2024', comment: { en: 'Noticed better digestion.', fr: 'Remarqué une meilleure digestion.', ru: 'Заметил улучшение пищеварения.' } },
      { user: 'Sarah', rating: 5, date: '20.03.2024', comment: { en: 'Pure and effective glutamine.', fr: 'Glutamine pure et efficace.', ru: 'Чистый и эффективный глютамин.' } },
      { user: 'Marc', rating: 5, date: '15.03.2024', comment: { en: 'Crucial for immunity too.', fr: 'Crucial pour l\'immunité aussi.', ru: 'Важно и для иммунитета тоже.' } },
      { user: 'Elena', rating: 5, date: '10.03.2024', comment: { en: 'Quality fermented source.', fr: 'Source fermentée de qualité.', ru: 'Качественный ферментированный источник.' } },
      { user: 'Thomas', rating: 4, date: '05.03.2024', comment: { en: 'Easy to take capsules.', fr: 'Capsules faciles à prendre.', ru: 'Удобные капсулы.' } },
      { user: 'Nina', rating: 5, date: '01.03.2024', comment: { en: 'Highly recommend for recovery.', fr: 'Je recommande vivement pour la récupération.', ru: 'Очень рекомендую для восстановления.' } },
      { user: 'Ivan', rating: 5, date: '20.02.2024', comment: { en: 'Best vegan L-glutamine I found.', fr: 'Meilleure L-glutamine végane que j\'aie trouvée.', ru: 'Лучший веганский глютамин.' } }
    ]
  },
  {
    id: 14,
    img: '/images/amino_3.png',
    priceNum: 39.99,
    tag: { en: 'Essential', fr: 'Essentiel', ru: 'База' },
    name: { en: 'EAA Essential Amino Acids', fr: 'EAA Acides Aminés Essentiels', ru: 'EAA Аминокислоты' },
    category: 'amino',
    categoryNames: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
    flavors: { en: ['Mango Madness', 'Sour Apple'], fr: ['Mango Madness', 'Pomme Acidulée'], ru: ['Манго', 'Кислое Яблоко'] },
    fullDesc: {
      en: 'Full spectrum of essential amino acids to prevent muscle breakdown and support protein synthesis.',
      fr: 'Spectre complet d\'acides aminés essentiels pour prévenir la dégradation musculaire et soutenir la synthèse des protéines.',
      ru: 'Полный спектр незаменимых аминокислот для предотвращения распада мышц и поддержки синтеза белка.'
    },
    specs: { eaa: '9g', electrolytes: 'Included', servings: '30' },
    usage: {
      en: 'Mix one scoop with 400ml of cold water. Sip during training.',
      fr: 'Mélangez une mesure avec 400 ml d\'eau froide. Boire par petites gorgées pendant l\'entraînement.',
      ru: 'Смешайте одну мерную ложку с 400 мл холодной воды. Пейте небольшими глотками во время тренировки.'
    },
    reviews: [
      { user: 'Dmitry', rating: 5, date: '11.04.2024', comment: { en: 'Mango flavor is refreshing. Recovery is much faster.', fr: 'Le goût mangue est rafraîchissant. La récupération est beaucoup plus rapide.', ru: 'Вкус манго очень освежает. Восстановление идет гораздо быстрее.' } },
      { user: 'Isabelle', rating: 5, date: '05.04.2024', comment: { en: 'Electrolytes included is a big plus!', fr: 'Les électrolytes inclus sont un gros plus !', ru: 'Электролиты в составе — жирный плюс.' } },
      { user: 'Max', rating: 5, date: '01.04.2024', comment: { en: 'Superior to BCAAs in my opinion.', fr: 'Supérieur aux BCAA à mon avis.', ru: 'На мой взгляд, гораздо круче обычных BCAA.' } },
      { user: 'Svetlana', rating: 4, date: '25.03.2024', comment: { en: 'Sour Apple is very tasty.', fr: 'La pomme acidulée est très savoureuse.', ru: 'Кислое яблоко очень вкусное.' } },
      { user: 'Arthur', rating: 5, date: '20.03.2024', comment: { en: 'Helps me train longer.', fr: 'M\'aide à m\'entraîner plus longtemps.', ru: 'Помогает тренироваться дольше.' } },
      { user: 'Chloe', rating: 5, date: '15.03.2024', comment: { en: 'Premium EAA formula.', fr: 'Formule EAA premium.', ru: 'Премиальная формула EAA.' } },
      { user: 'Pavel', rating: 5, date: '10.03.2024', comment: { en: 'Full spectrum aminos are essential.', fr: 'Les acides aminés à spectre complet sont essentiels.', ru: 'Полный спектр аминокислот необходим.' } },
      { user: 'Sophie', rating: 4, date: '05.03.2024', comment: { en: 'Good solubility, no clumps.', fr: 'Bonne solubilité, pas de grumeaux.', ru: 'Хорошая растворимость, без комков.' } },
      { user: 'Anton', rating: 5, date: '01.03.2024', comment: { en: 'Best intra-workout drink.', fr: 'Meilleure boisson intra-entraînement.', ru: 'Лучший напиток во время тренировки.' } },
      { user: 'Elena', rating: 5, date: '20.02.2024', comment: { en: 'High concentration, worth the price.', fr: 'Haute concentration, vaut le prix.', ru: 'Высокая концентрация, стоит своих денег.' } }
    ]
  },
  {
    id: 15,
    img: '/images/amino_4.png',
    priceNum: 29.99,
    tag: { en: 'Fat Burn', fr: 'Brûle-graisse', ru: 'Жиросжигание' },
    name: { en: 'L-Carnitine 3000', fr: 'L-Carnitine 3000', ru: 'L-Carnitine 3000' },
    category: 'amino',
    categoryNames: { en: 'Amino Acids', fr: 'Acides Aminés', ru: 'Аминокислоты' },
    fullDesc: {
      en: 'Potent L-Carnitine in vegan capsules to support fatty acid metabolism and endurance.',
      fr: 'L-Carnitine puissante en capsules véganes pour soutenir le métabolisme des acides gras et l\'endurance.',
      ru: 'Эффективный L-карнитин в веганских капсулах для поддержки метаболизма жирных кислот и выносливости.'
    },
    specs: { carnipure: '3000mg', weight: '180 capsules', type: 'Vegan' },
    usage: {
      en: 'Take 3 capsules 30 minutes before cardio or high-intensity training.',
      fr: 'Prendre 3 capsules 30 minutes avant le cardio ou l\'entraînement de haute intensité.',
      ru: 'Принимайте 3 капсулы за 30 минут до кардио или высокоинтенсивной тренировки.'
    },
    reviews: [
      { user: 'Elena', rating: 5, date: '08.04.2024', comment: { en: 'Clean energy without jitters. Perfect for morning runs.', fr: 'Énergie propre sans tremblements. Parfait pour les courses matinales.', ru: 'Чистая энергия без мандража. Идеально для утренних пробежек.' } },
      { user: 'Maxim', rating: 5, date: '01.04.2024', comment: { en: 'Helps with fat metabolism significantly.', fr: 'Aide considérablement au métabolisme des graisses.', ru: 'Заметно помогает в жиросжигании.' } },
      { user: 'Julie', rating: 4, date: '25.03.2024', comment: { en: 'Good endurance boost.', fr: 'Bon boost d\'endurance.', ru: 'Продлевает выносливость.' } },
      { user: 'Dmitry', rating: 5, date: '20.03.2024', comment: { en: 'Carnipure quality is the best.', fr: 'La qualité Carnipure est la meilleure.', ru: 'Качество Carnipure — лучшее.' } },
      { user: 'Arthur', rating: 5, date: '15.03.2024', comment: { en: 'Effective l-carnitine, feel the heat during cardio.', fr: 'L-carnitine efficace, sentez la chaleur pendant le cardio.', ru: 'Эффективный карнитин, чувствую как "жарит" на кардио.' } },
      { user: 'Manon', rating: 4, date: '10.03.2024', comment: { en: 'Vegan capsules are a plus.', fr: 'Les capsules véganes sont un plus.', ru: 'Веганские капсулы — это плюс.' } },
      { user: 'Ivan', rating: 5, date: '05.03.2024', comment: { en: 'Trustworthy fat burn support.', fr: 'Soutien au brûle-graisse digne de confiance.', ru: 'Надежная поддержка в похудении.' } },
      { user: 'Sarah', rating: 5, date: '01.03.2024', comment: { en: 'Best l-carnitine on the market.', fr: 'Meilleure l-carnitine du marché.', ru: 'Лучший карнитин на рынке.' } },
      { user: 'Pavel', rating: 5, date: '20.02.2024', comment: { en: 'Crucial for my shredded phase.', fr: 'Crucial pour ma phase de déchiquetage.', ru: 'Крайне важен для этапа рельефа.' } },
      { user: 'Clément', rating: 5, date: '15.02.2024', comment: { en: 'Good concentration per serving.', fr: 'Bonne concentration par portion.', ru: 'Хорошая концентрация на порцию.' } }
    ]
  },
  {
    id: 16,
    img: '/images/5969582290780230845_121.jpg',
    priceNum: 24.99,
    tag: { en: 'Endurance', fr: 'Endurance', ru: 'Выносливость' },
    name: { en: 'Creatine PRO', fr: 'Créatine PRO', ru: 'Creatine PRO' },
    category: 'creatine',
    categoryNames: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Advanced creatine formula for sustained performance.',
      fr: 'Formule de créatine avancée pour des performances durables.',
      ru: 'Продвинутая формула креатина для стабильных результатов.'
    },
    specs: { purity: '100%', servings: '50', type: 'Powder' },
    usage: {
      en: '5g daily, mixed with water or juice.',
      fr: '5g par jour, mélangé avec de l\'eau ou du jus.',
      ru: '5г в день, смешать с водой или соком.'
    },
    reviews: [
      { user: 'Jack', rating: 5, date: '10.04.2024', comment: { en: 'Solid creatine, great price.', fr: 'Créatine solide, super prix.', ru: 'Хороший креатин по отличной цене.' } },
      { user: 'Alex', rating: 5, date: '05.04.2024', comment: { en: 'Pure monohydrate, works perfect.', fr: 'Monohydrate pur, fonctionne parfaitement.', ru: 'Чистый моногидрат, работает на сто процентов.' } },
      { user: 'Sophie', rating: 4, date: '01.04.2024', comment: { en: 'Fine powder, easy to mix.', fr: 'Poudre fine, facile à mélanger.', ru: 'Мелкий порошок, легко мешается.' } },
      { user: 'Dmitry', rating: 5, date: '25.03.2024', comment: { en: 'Noticed strength gains in a week.', fr: 'Remarqué des gains de force en une semaine.', ru: 'Заметил прибавку в силе за неделю.' } },
      { user: 'Marie', rating: 5, date: '20.03.2024', comment: { en: 'Best value for performance.', fr: 'Meilleure valeur pour la performance.', ru: 'Лучший выбор для результатов.' } },
      { user: 'Anton', rating: 5, date: '15.03.2024', comment: { en: 'Trusted product, use it for years.', fr: 'Produit de confiance, utilisé depuis des années.', ru: 'Проверенный продукт, пью годами.' } },
      { user: 'Lukas', rating: 5, date: '10.03.2024', comment: { en: 'Basic, but high quality.', fr: 'Basique, mais de haute qualité.', ru: 'Базово, но качественно.' } },
      { user: 'Emma', rating: 5, date: '05.03.2024', comment: { en: 'Increases explosive power.', fr: 'Augmente la puissance explosive.', ru: 'Увеличивает взрывную силу.' } },
      { user: 'Chris', rating: 4, date: '01.03.2024', comment: { en: 'Simple and effective.', fr: 'Simple et efficace.', ru: 'Просто и эффективно.' } },
      { user: 'Nina', rating: 5, date: '20.02.2024', comment: { en: 'Best creatine on GainLab.', fr: 'Meilleure créatine sur GainLab.', ru: 'Лучший креатин на сайте.' } }
    ]
  },
  {
    id: 17,
    img: '/images/5969582290780230846_121.jpg',
    priceNum: 29.99,
    tag: { en: 'Capsules', fr: 'Capsules', ru: 'В капсулах' },
    name: { en: 'Creatine Mega Caps', fr: 'Creatine Mega Caps', ru: 'Creatine Mega Caps' },
    category: 'creatine',
    categoryNames: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Convenient highest quality creatine monohydrate in capsules.',
      fr: 'Créatine monohydrate de la plus haute qualité en capsules.',
      ru: 'Удобный креатин моногидрат высшего качества в капсулах.'
    },
    specs: { perCap: '1250mg', caps: '120', type: 'Mega Caps' },
    usage: {
      en: 'Take 4 capsules daily with water.',
      fr: 'Prendre 4 capsules par jour avec de l\'eau.',
      ru: 'Принимать по 4 капсулы в день, запивая водой.'
    },
    reviews: [
      { user: 'Pavel', rating: 5, date: '10.04.2024', comment: { en: 'Mega caps are so convenient for travel.', fr: 'Les méga capsules sont très pratiques pour voyager.', ru: 'Мега капсулы очень удобны в поездках.' } },
      { user: 'Thomas', rating: 5, date: '01.04.2024', comment: { en: 'High dosage per cap, love it.', fr: 'Dosage élevé par capsule, j\'adore.', ru: 'Высокая дозировка в капсуле, это круто.' } },
      { user: 'Arthur', rating: 4, date: '20.03.2024', comment: { en: 'Easy to swallow, great purity.', fr: 'Facile à avaler, grande pureté.', ru: 'Легко глотать, чистая добавка.' } },
      { user: 'Elena', rating: 5, date: '15.03.2024', comment: { en: 'Saves time compared to powder.', fr: 'Gagne du temps par rapport à la poudre.', ru: 'Экономит время по сравнению с порошком.' } },
      { user: 'Julien', rating: 5, date: '10.03.2024', comment: { en: 'Best capsules on the market.', fr: 'Meilleures capsules sur le marché.', ru: 'Лучшие капсулы на рынке.' } },
      { user: 'Sasha', rating: 5, date: '05.03.2024', comment: { en: 'Noticeable strength boost.', fr: 'Amélioration notable de la force.', ru: 'Заметный буст силы.' } },
      { user: 'Victor', rating: 4, date: '01.03.2024', comment: { en: 'Premium quality monohydrate.', fr: 'Monohydrate de qualité premium.', ru: 'Моногидрат премиум качества.' } },
      { user: 'Marie', rating: 5, date: '20.02.2024', comment: { en: 'Highly recommend for busy people.', fr: 'Recommande fortement pour les gens occupés.', ru: 'Очень рекомендую для тех, кто спешит.' } },
      { user: 'Ivan', rating: 5, date: '15.02.2024', comment: { en: 'Trusted brand as always.', fr: 'Marque de confiance comme toujours.', ru: 'Доверяю бренду как всегда.' } },
      { user: 'Nina', rating: 5, date: '10.02.2024', comment: { en: 'Great value for 120 caps.', fr: 'Excellente valeur pour 120 capsules.', ru: 'Отличная цена за 120 капсул.' } }
    ]
  },
  {
    id: 18,
    img: '/images/5969582290780230847_121.jpg',
    priceNum: 34.99,
    tag: { en: 'Complex', fr: 'Complexe', ru: 'Комплекс' },
    name: { en: 'Creatine + Matrix', fr: 'Creatine + Matrice', ru: 'Creatine + Matrix' },
    category: 'creatine',
    categoryNames: { en: 'Creatine', fr: 'Créatine', ru: 'Креатин' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Multi-stage creatine blend with transport matrix for better absorption.',
      fr: 'Mélange de créatine multi-étapes avec matrice de transport pour une meilleure absorption.',
      ru: 'Многокомпонентный креатин с транспортной матрицей для лучшего усвоения.'
    },
    specs: { blend: 'Tri-Creatine', servings: '40', transport: 'Added' },
    usage: {
      en: '1 scoop pre-workout.',
      fr: '1 mesure avant l\'entraînement.',
      ru: '1 мерная ложка перед тренировкой.'
    },
    reviews: [
      { user: 'Anton', rating: 5, date: '05.04.2024', comment: { en: 'The matrix really works, no water retention bloat.', fr: 'La matrice fonctionne vraiment, pas de ballonnement dû à la rétention d\'eau.', ru: 'Матрица работает, нет лишней залитости водой.' } },
      { user: 'David', rating: 5, date: '01.04.2024', comment: { en: 'Best complex creatine I tried.', fr: 'Meilleure créatine complexe que j\'aie essayée.', ru: 'Лучший комплексный креатин.' } },
      { user: 'Sophie', rating: 4, date: '25.03.2024', comment: { en: 'Tastes okay, focus is amazing.', fr: 'Un goût correct, une concentration incroyable.', ru: 'Вкус норм, концентрация супер.' } },
      { user: 'Arthur', rating: 5, date: '20.03.2024', comment: { en: 'Advanced formula for serious lifters.', fr: 'Formule avancée pour les athlètes sérieux.', ru: 'Продвинутая формула для серьезных атлетов.' } },
      { user: 'Lukas', rating: 5, date: '15.03.2024', comment: { en: 'Multi-stage release is key.', fr: 'La libération multi-étapes est la clé.', ru: 'Многоэтапное высвобождение — это ключ.' } },
      { user: 'Emma', rating: 5, date: '10.03.2024', comment: { en: 'Best absorption ever.', fr: 'Meilleure absorption jamais vue.', ru: 'Лучшее усвоение из всех.' } },
      { user: 'Nicolas', rating: 4, date: '05.03.2024', comment: { en: 'Premium feel and results.', fr: 'Sensation и résultats premium.', ru: 'Премиальные результаты.' } },
      { user: 'Chloe', rating: 5, date: '01.03.2024', comment: { en: 'Effective pre-workout addition.', fr: 'Ajout pré-entraînement efficace.', ru: 'Отличное дополнение к предтренику.' } },
      { user: 'Max', rating: 5, date: '25.02.2024', comment: { en: 'Worth every penny for peak performance.', fr: 'Vaut chaque centime pour des performances de pointe.', ru: 'Стоит каждого цента для пиковых результатов.' } },
      { user: 'Julia', rating: 5, date: '20.02.2024', comment: { en: 'Trust the matrix, it works.', fr: 'Faites confiance à la matrice, ça marche.', ru: 'Доверяйте матрице, она работает.' } }
    ]
  },
  {
    id: 19,
    img: '/images/5969582290780230855_121.jpg',
    priceNum: 39.99,
    tag: { en: 'Pre-Workout', fr: 'Pré-entraînement', ru: 'Предтреник' },
    name: { en: 'Energy Boom Pre-Workout', fr: 'Energy Boom Pré-entraînement', ru: 'Energy Boom Pre-Workout' },
    category: 'energy',
    categoryNames: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Explosive energy and focus for your hardest workouts.',
      fr: 'Énergie et concentration explosives pour vos entraînements les plus durs.',
      ru: 'Взрывная энергия и концентрация для самых тяжелых тренировок.'
    },
    specs: { caffeine: '300mg', betaAlanine: '3g', servings: '30' },
    usage: {
      en: 'Mix 1 scoop with 200ml water 20 mins before workout.',
      fr: 'Mélanger 1 mesure avec 200ml d\'eau 20 minutes avant l\'entraînement.',
      ru: 'Смешать 1 мерную ложку с 200 мл воды за 20 мин до тренировки.'
    },
    reviews: [
      { user: 'Maxim', rating: 5, date: '11.04.2024', comment: { en: 'This is the energy kick I was looking for. Focus is insane!', fr: 'C\'est le coup de boost énergétique que je cherchais. La concentration est folle !', ru: 'Это именно тот заряд энергии, который я искал. Концентрация бешеная!' } },
      { user: 'Alex', rating: 5, date: '05.04.2024', comment: { en: 'Beta-alanine tingles are real. Love it!', fr: 'Les picotements de la bêta-alanine sont réels. J\'adore !', ru: 'Покалывание бета-аланина чувствуется сразу. Обожаю!' } },
      { user: 'Manon', rating: 5, date: '01.04.2024', comment: { en: 'Best focus ever for leg days.', fr: 'Meilleure concentration jamais vue pour les jours de jambes.', ru: 'Лучший фокус для тренировок на ноги.' } },
      { user: 'Dmitry', rating: 4, date: '25.03.2024', comment: { en: 'Strong stuff, start with half scoop if beginner.', fr: 'Truc puissant, commencez par une demi-dose si vous êtes débutant.', ru: 'Мощная штука, новичкам советую начинать с половины черпака.' } },
      { user: 'Arthur', rating: 5, date: '20.03.2024', comment: { en: 'Explosive power indeed.', fr: 'Une puissance explosive en effet.', ru: 'Взрывная мощь, без преувеличений.' } },
      { user: 'Sophie', rating: 5, date: '15.03.2024', comment: { en: 'No crash after workout.', fr: 'Pas de fatigue après l\'entraînement.', ru: 'Нет "отката" после тренировки.' } },
      { user: 'Lukas', rating: 5, date: '10.03.2024', comment: { en: 'Best pre-workout on the market.', fr: 'Meilleur pré-entraînement du marché.', ru: 'Лучший предтреник на рынке.' } },
      { user: 'Emma', rating: 5, date: '05.03.2024', comment: { en: 'Intense energy and pump.', fr: 'Énergie и congestion intenses.', ru: 'Интенсивная бодрость и памп.' } },
      { user: 'Victor', rating: 4, date: '01.03.2024', comment: { en: 'Tastes great, works fast.', fr: 'A bon goût, fonctionne vite.', ru: 'Вкус ок, вставляет быстро.' } },
      { user: 'Nina', rating: 5, date: '25.02.2024', comment: { en: 'Must have for heavy training sessions.', fr: 'Indispensable pour les séances lourd.', ru: 'Мастхэв для тяжелых тренировок.' } }
    ]
  },
  {
    id: 20,
    img: '/images/5969582290780230856_121.jpg',
    priceNum: 14.99,
    tag: { en: 'Focus', fr: 'Concentration', ru: 'Фокус' },
    name: { en: 'Caffeine 200mg', fr: 'Caféine 200mg', ru: 'Caffeine 200mg' },
    category: 'energy',
    categoryNames: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Pure caffeine anhydrous in convenient capsules for a quick energy boost.',
      fr: 'Caféine anhydre pure en capsules pratiques pour un regain d\'énergie rapide.',
      ru: 'Чистый безводный кофеин в удобных капсулах для быстрого заряда бодрости.'
    },
    specs: { caffeine: '200mg', caps: '100', form: 'Capsules' },
    usage: {
      en: 'Take 1 capsule as needed. Do not exceed 2 capsules daily.',
      fr: 'Prendre 1 capsule au besoin. Ne pas dépasser 2 capsules par jour.',
      ru: 'Принимать по 1 капсуле по мере необходимости. Не более 2 капсул в день.'
    },
    reviews: [
      { user: 'John', rating: 5, date: '10.04.2024', comment: { en: 'Clean energy when I need it most.', fr: 'Énergie propre quand j\'en ai le plus besoin.', ru: 'Чистая энергия в нужный момент.' } },
      { user: 'Ilya', rating: 5, date: '05.04.2024', comment: { en: 'Better than coffee for focus.', fr: 'Mieux que le café pour la concentration.', ru: 'Лучше кофе для концентрации.' } },
      { user: 'Lucie', rating: 4, date: '01.04.2024', comment: { en: 'Inexpensive and effective.', fr: 'Peu coûteux et efficace.', ru: 'Дешево и эффективно.' } },
      { user: 'David', rating: 5, date: '25.03.2024', comment: { en: 'No jitters, just focus.', fr: 'Pas de tremblements, juste de la concentration.', ru: 'Никакой тряски, только фокус.' } },
      { user: 'Sarah', rating: 5, date: '20.03.2024', comment: { en: 'Practical for gym and work.', fr: 'Pratique pour la salle et le travail.', ru: 'Удобно и в зале, и на работе.' } },
      { user: 'Anton', rating: 4, date: '15.03.2024', comment: { en: 'Classic energy booster.', fr: 'Booster d\'énergie classique.', ru: 'Классический стимулятор.' } },
      { user: 'Emma', rating: 5, date: '10.03.2024', comment: { en: 'Works as advertised.', fr: 'Fonctionne comme annoncé.', ru: 'Работает как заявлено.' } },
      { user: 'Pavel', rating: 5, date: '05.03.2024', comment: { en: 'Essential for low energy days.', fr: 'Essentiel pour les jours de baisse d\'énergie.', ru: 'Незаменим в дни упадка сил.' } },
      { user: 'Anna', rating: 5, date: '01.03.2024', comment: { en: 'Good price for 100 caps.', fr: 'Bon prix pour 100 capsules.', ru: 'Хорошая цена за 100 капсул.' } },
      { user: 'Mark', rating: 5, date: '20.02.2024', comment: { en: 'My go-to caffeine source.', fr: 'Ma source de caféine préférée.', ru: 'Мой основной источник кофеина.' } }
    ]
  },
  {
    id: 21,
    img: '/images/5969582290780230857_121.jpg',
    priceNum: 24.99,
    tag: { en: 'Natural', fr: 'Naturel', ru: 'Натуральный' },
    name: { en: 'Guarana Extract', fr: 'Extrait de Guarana', ru: 'Guarana Extract' },
    category: 'energy',
    categoryNames: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Natural slow-release energy from Brazilian guarana seeds.',
      fr: 'Énergie naturelle à libération lente issue de graines de guarana brésilien.',
      ru: 'Натуральная энергия медленного высвобождения из семян бразильской гуараны.'
    },
    specs: { extract: '1000mg', source: 'Brazil', servings: '60' },
    usage: {
      en: 'Take 1-2 tablets in the morning.',
      fr: 'Prendre 1 à 2 comprimés le matin.',
      ru: 'Принимать 1-2 таблетки утром.'
    },
    reviews: [
      { user: 'Viktor', rating: 5, date: '10.04.2024', comment: { en: 'Natural and steady energy all day.', fr: 'Énergie naturelle и constante toute la journée.', ru: 'Натуральная и ровная бодрость на весь день.' } },
      { user: 'Julie', rating: 5, date: '01.04.2024', comment: { en: 'Best natural energy source.', fr: 'Meilleure source d\'énergie naturelle.', ru: 'Лучший природный энергетик.' } },
      { user: 'Arthur', rating: 4, date: '25.03.2024', comment: { en: 'Smooth focus, no jitters.', fr: 'Concentration fluide, pas de tremblements.', ru: 'Мягкий фокус без мандража.' } },
      { user: 'Svetlana', rating: 5, date: '20.03.2024', comment: { en: 'Great for focused work sessions.', fr: 'Idéal pour les sessions de travail concentrées.', ru: 'Отлично для долгой концентрации.' } },
      { user: 'Marie', rating: 5, date: '15.03.2024', comment: { en: 'Natural and clean feel.', fr: 'Sensation naturelle et propre.', ru: 'Чистое природное самочувствие.' } },
      { user: 'Igor', rating: 5, date: '10.03.2024', comment: { en: 'Love the sustained release.', fr: 'J\'adore la libération prolongée.', ru: 'Обожаю эффект медленного высвобождения.' } },
      { user: 'Nina', rating: 4, date: '05.03.2024', comment: { en: 'Good quality extract.', fr: 'Extrait de bonne qualité.', ru: 'Качественный экстракт.' } },
      { user: 'Anton', rating: 5, date: '01.03.2024', comment: { en: 'Trusted energy booster.', fr: 'Booster d\'énergie de confiance.', ru: 'Проверенный энергетик.' } },
      { user: 'Sophie', rating: 5, date: '25.02.2024', comment: { en: 'Best value for 60 tab pack.', fr: 'Meilleure valeur pour un paquet de 60 onglets.', ru: 'Лучшая цена за 60 таблеток.' } },
      { user: 'Lukas', rating: 5, date: '20.02.2024', comment: { en: 'Highly recommend for morning energy.', fr: 'Recommande fortement pour l\'énergie du matin.', ru: 'Советую для утреннего заряда.' } }
    ]
  },
  {
    id: 22,
    img: '/images/5969582290780230858_121.jpg',
    priceNum: 29.99,
    tag: { en: 'Pump', fr: 'Congestion', ru: 'Памп' },
    name: { en: 'Nitric Oxide Booster', fr: 'Booster d\'Oxyde Nitrique', ru: 'Nitric Oxide Booster' },
    category: 'energy',
    categoryNames: { en: 'Energy', fr: 'Énergie', ru: 'Энергетика' },
    zoom: 1.2,
    offsetY: 0,
    fullDesc: {
      en: 'Non-stimulant pre-workout pump formula for extreme vascularity.',
      fr: 'Formule de congestion sans stimulant pour une vascularisation extrême.',
      ru: 'Предтренировочный комплекс без стимуляторов для максимального пампа.'
    },
    specs: { citrulline: '6g', arginine: '3g', caffeine: '0mg' },
    usage: {
      en: '1 scoop 30 mins before workout.',
      fr: '1 mesure 30 minutes avant l\'entraînement.',
      ru: '1 мерная ложка за 30 мин до тренировки.'
    },
    reviews: [
      { user: 'Dmitry', rating: 5, date: '10.04.2024', comment: { en: 'Crazy pump and vascularity. Best stim-free pre.', fr: 'Congestion et vascularisation folles. Meilleur pré sans stimulant.', ru: 'Бешеный памп и венозность. Лучший предтреник без стимуляторов.' } },
      { user: 'Manon', rating: 5, date: '01.04.2024', comment: { en: 'The Citrulline dosage is top tier.', fr: 'Le dosage en Citrulline est de premier ordre.', ru: 'Дозировка цитруллина просто топовая.' } },
      { user: 'Arthur', rating: 4, date: '25.03.2024', comment: { en: 'Great pump even without caffeine.', fr: 'Superbe congestion même sans caféine.', ru: 'Отличный памп даже без кофеина.' } },
      { user: 'Sarah', rating: 5, date: '20.03.2024', comment: { en: 'Extreme vascularity after first scoop.', fr: 'Vascularisation extrême après la première mesure.', ru: 'Дикая венозность уже с первого черпака.' } },
      { user: 'Max', rating: 5, date: '15.03.2024', comment: { en: 'Non-stimulant so I can train late.', fr: 'Sans stimulant pour que je puisse m\'entraîner tard.', ru: 'Без стимуляторов, можно тренироваться поздно.' } },
      { user: 'Chloe', rating: 5, date: '10.03.2024', comment: { en: 'Best pump supplement I used.', fr: 'Meilleur supplément de congestion que j\'ai utilisé.', ru: 'Лучшая добавка для пампа.' } },
      { user: 'Victor', rating: 4, date: '05.03.2024', comment: { en: 'Fine powder, good taste.', fr: 'Poudre fine, bon goût.', ru: 'Отличный помол и вкус.' } },
      { user: 'Anton', rating: 5, date: '01.03.2024', comment: { en: 'Highly effective formula.', fr: 'Formule très efficace.', ru: 'Очень эффективная формула.' } },
      { user: 'Sophie', rating: 5, date: '25.02.2024', comment: { en: 'Must have for arm days.', fr: 'Indispensable pour les jours de bras.', ru: 'Мастхэв для тренировки рук.' } },
      { user: 'Lukas', rating: 5, date: '20.02.2024', comment: { en: 'GainLab nailed the pump formula.', fr: 'GainLab a réussi la formule de congestion.', ru: 'GainLab создали идеальную формулу пампа.' } }
    ]
  },
  {
    id: 23,
    img: '/images/product_1_branded.png',
    priceNum: 59.99,
    tag: { en: 'Exclusive', fr: 'Exclusif', ru: 'Эксклюзив' },
    name: { en: 'GainLab Isolate (Branded)', fr: 'Isolat GainLab (Marqué)', ru: 'GainLab Isolate (Branded)' },
    category: 'protein',
    categoryNames: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
    flavors: { en: ['Strawberry', 'Cookies'], fr: ['Fraise', 'Cookies'], ru: ['Клубника', 'Печенье'] },
    fullDesc: {
      en: 'Special branded edition of our premium whey isolate. Fast-absorbing and ultra pure.',
      fr: 'Édition spéciale marquée de notre isolat de lactosérum premium. Absorption rapide et ultra pure.',
      ru: 'Специальная брендированная версия нашего премиального изолята. Быстрое усвоение и идеальная чистота.'
    },
    specs: { protein: '27g', carbs: '0.5g', fat: '0g' },
    usage: {
      en: '1 scoop post-workout.',
      fr: '1 mesure après l\'entraînement.',
      ru: '1 мерная ложка после тренировки.'
    },
    reviews: [
      { user: 'Marie', rating: 5, date: '10.04.2024', comment: { en: 'Exclusive indeed. The cookies flavor is heavenly.', fr: 'Exclusif en effet. Le goût cookies est divin.', ru: 'Реально эксклюзив. Вкус печенья просто божественный.' } },
      { user: 'Oleg', rating: 5, date: '05.04.2024', comment: { en: 'Fast absorbing, perfect for after gym.', fr: 'Absorption rapide, parfait pour l\'après-salle.', ru: 'Быстро усваивается, идеально после зала.' } },
      { user: 'Julie', rating: 5, date: '01.04.2024', comment: { en: 'Premium feel and packaging.', fr: 'Sensation и emballage premium.', ru: 'Премиальное ощущение и упаковка.' } },
      { user: 'Anton', rating: 4, date: '25.03.2024', comment: { en: 'Ultra pure isolate, 10/10.', fr: 'Isolat ultra pur, 10/10.', ru: 'Ультра чистый изолят, 10 из 10.' } },
      { user: 'Sasha', rating: 5, date: '20.03.2024', comment: { en: 'The branded edition is beautiful.', fr: 'L\'édition marquée est magnifique.', ru: 'Брендированное издание выглядит круто.' } },
      { user: 'Marc', rating: 5, date: '15.03.2024', comment: { en: 'Best protein GainLab has.', fr: 'Meilleure protéine de GainLab.', ru: 'Лучший протеин у GainLab.' } },
      { user: 'Elena', rating: 5, date: '10.03.2024', comment: { en: 'Clean and effective.', fr: 'Propre et efficace.', ru: 'Чисто и эффективно.' } },
      { user: 'Thomas', rating: 4, date: '05.03.2024', comment: { en: 'Cookies are delicious.', fr: 'Les cookies sont délicieux.', ru: 'Печенье очень вкусное.' } },
      { user: 'Nina', rating: 5, date: '01.03.2024', comment: { en: 'Fast recovery, zero carbs.', fr: 'Récupération rapide, zéro glucide.', ru: 'Быстрое восстановление, ноль углей.' } },
      { user: 'Ivan', rating: 5, date: '20.02.2024', comment: { en: 'Worth the exclusive price.', fr: 'Vaut le prix exclusif.', ru: 'Стоит своей эксклюзивной цены.' } }
    ]
  }
];
