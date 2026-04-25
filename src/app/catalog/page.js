'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { mockProducts } from '../data/products';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
  const { lang, t, formatPrice } = useTranslation();
  const { user } = useAuth();
  const [localProducts, setLocalProducts] = useState(mockProducts);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [addedIds, setAddedIds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const { addToCart } = useCart();

  // Review form state
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const categoryOptions = useMemo(() => [
    { key: 'all', label: t('catalog.categories.all') },
    { key: 'protein', label: t('catalog.categories.protein') },
    { key: 'creatine', label: t('catalog.categories.creatine') },
    { key: 'amino', label: t('catalog.categories.amino') },
    { key: 'energy', label: t('catalog.categories.energy') },
    { key: 'vitamins', label: t('catalog.categories.vitamins') },
  ], [t]);

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all' 
      ? [...localProducts] 
      : localProducts.filter(p => p.category === activeCategory);

    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.priceNum - a.priceNum);
    }

    return result;
  }, [activeCategory, sortOrder, localProducts]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setSelectedFlavor(product.flavors ? product.flavors[lang][0] : null);
    setNewComment('');
    setNewRating(5);
    setShowSuccess(false);
  };

  const handleAddToCart = (e, product, flavor = null) => {
    if (e) e.stopPropagation();
    addToCart(product, flavor);
    const feedbackId = flavor ? `${product.id}-${flavor}` : product.id;
    setAddedIds(prev => [...prev, feedbackId]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== feedbackId)), 2000);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      const newReview = {
        user: user.name || user.email.split('@')[0],
        rating: newRating,
        date: new Date().toLocaleDateString('ru-RU'),
        comment: {
          en: newComment,
          fr: newComment,
          ru: newComment
        }
      };

      const updatedProducts = localProducts.map(p => {
        if (p.id === selectedProduct.id) {
          return {
            ...p,
            reviews: [newReview, ...p.reviews]
          };
        }
        return p;
      });

      setLocalProducts(updatedProducts);

      // Update selected product locally
      setSelectedProduct(prev => ({
        ...prev,
        reviews: [newReview, ...prev.reviews]
      }));

      setNewComment('');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 600);
  };

  return (
    <div className="container page-wrapper">
      <div className="page-header fade-in-up">
        <h1>{t('catalog.title')} <span className="text-accent">{t('catalog.titleAccent')}</span></h1>
        <p className="text-secondary">{t('catalog.subtitle')}</p>
      </div>
      
      <div className="catalog-controls fade-in-up delay-1">
        <div className="filter-tabs">
          {categoryOptions.map(cat => (
            <button 
              key={cat.key} 
              onClick={() => setActiveCategory(cat.key)}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="sort-box">
          <label htmlFor="price-sort">{t('catalog.sortLabel')}:</label>
          <select 
            id="price-sort"
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">{t('catalog.sortDefault')}</option>
            <option value="price-asc">{t('catalog.sortPriceAsc')}</option>
            <option value="price-desc">{t('catalog.sortPriceDesc')}</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid fade-in-up delay-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              isAdded={addedIds.includes(product.id)}
              onCardClick={() => handleOpenModal(product)}
              onActionClick={() => {
                if (product.flavors) {
                  handleOpenModal(product);
                } else {
                  handleAddToCart(null, product);
                }
              }}
              actionText={addedIds.includes(product.id) ? t('catalog.btnAdded') : (product.flavors ? t('catalog.btnSelectFlavor') : t('catalog.btnAddToCart'))}
              actionClass={product.flavors ? 'btn-secondary' : 'btn-primary'}
              formatPrice={formatPrice}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>{t('catalog.empty')}</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            
            <div className="modal-body">
              <div className="modal-image-wrap" style={{ overflow: 'hidden', background: 'var(--card-bg)', borderRadius: '12px' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px', overflow: 'hidden' }}>
                  <Image 
                    src={selectedProduct.img} 
                    alt={selectedProduct.name[lang]}
                    fill
                    style={{ 
                      objectFit: 'contain', 
                      borderRadius: '12px',
                      transform: selectedProduct.zoom ? `scale(${selectedProduct.zoom}) translateY(${selectedProduct.offsetY || 0}%)` : 'none'
                    }}
                    unoptimized
                  />
                </div>
              </div>
              
              <div className="modal-info-wrap">
                <span className="product-category">{selectedProduct.categoryNames[lang]}</span>
                <h2>{selectedProduct.name[lang]}</h2>
                <p className="price-large">{formatPrice(selectedProduct.priceNum)}</p>

                {selectedProduct.flavors && (
                  <div className="modal-section">
                    <h4>{t('catalog.modal.flavor')}</h4>
                    <div className="flavor-chips">
                      {selectedProduct.flavors[lang].map((flavor) => (
                        <button 
                          key={flavor}
                          className={`flavor-chip ${selectedFlavor === flavor ? 'active' : ''}`}
                          onClick={() => setSelectedFlavor(flavor)}
                        >
                          {flavor}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="modal-section">
                  <h4>{t('catalog.modal.about')}</h4>
                  <p>{selectedProduct.fullDesc[lang]}</p>
                </div>

                <div className="modal-section">
                  <h4>{t('catalog.modal.specs')}</h4>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key.toUpperCase()}</span>
                        <span className="spec-value">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>{t('catalog.modal.usage')}</h4>
                  <p>{selectedProduct.usage[lang]}</p>
                </div>

                <button
                  className={`btn btn-lg ${addedIds.includes(`${selectedProduct.id}-${selectedFlavor}`) || addedIds.includes(selectedProduct.id) ? 'btn-added' : 'btn-primary'}`}
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={(e) => handleAddToCart(e, selectedProduct, selectedFlavor)}
                >
                  {(addedIds.includes(`${selectedProduct.id}-${selectedFlavor}`) || addedIds.includes(selectedProduct.id)) 
                    ? t('catalog.btnAdded') 
                    : `${t('catalog.btnAddToCart')}${selectedFlavor ? ` (${selectedFlavor})` : ''} →`}
                </button>
              </div>
            </div>

            <div className="modal-reviews-section">
              <div className="reviews-header-wrap" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1rem'
              }}>
                <h3 style={{ margin: 0 }}>{t('catalog.modal.reviews')} ({selectedProduct.reviews.length})</h3>
              </div>

              {/* Review Submission Form */}
              <div className="add-review-box">
                {user ? (
                  <form onSubmit={handleSubmitReview} className="review-form">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t('catalog.modal.starsLabel')}:</span>
                      <div className="rating-selector">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button 
                            key={star} 
                            type="button"
                            className={`star-btn ${newRating >= star ? 'active' : ''}`}
                            onClick={() => setNewRating(star)}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="textarea-wrap">
                      <textarea 
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder={t('catalog.modal.placeholderReview')}
                        required
                      />
                      <button type="submit" className="btn btn-primary btn-submit-review" disabled={isSubmitting}>
                        {isSubmitting ? '...' : t('catalog.modal.btnSubmitReview')}
                      </button>
                    </div>
                    {showSuccess && <p className="success-msg">{t('catalog.modal.successReview')}</p>}
                  </form>
                ) : (
                  <div className="auth-prompt-box">
                    <p className="auth-prompt-text">
                      {t('catalog.modal.loginToReview')
                        .split(/\{|\}/)
                        .map((part, i) => {
                          if (part === 'login') return <Link key={i} href="/login" className="auth-link">{t('catalog.modal.loginLink')}</Link>;
                          if (part === 'register') return <Link key={i} href="/register" className="auth-link">{t('catalog.modal.registerLink')}</Link>;
                          return part;
                        })
                      }
                    </p>
                  </div>
                )}
              </div>

              <div className="reviews-list">
                {selectedProduct.reviews.map((rev, idx) => (
                  <div key={idx} className="review-card">
                    <div className="review-header">
                      <span className="review-user">{rev.user}</span>
                      <div className="review-stars">
                        {'★'.repeat(rev.rating)}{'☆'.repeat(5-rev.rating)}
                      </div>
                      <span className="review-date">{rev.date}</span>
                    </div>
                    <p className="review-comment">{rev.comment[lang] || rev.comment.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
