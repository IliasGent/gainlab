import Image from 'next/image';

export default function ProductCard({
  product,
  lang,
  isAdded,
  onCardClick,
  onActionClick,
  actionText,
  actionClass = 'btn-primary',
  actionDisabled = false,
  formatPrice,
  customClass = '',
  imageHeight = '250px',
  imageObjectFit = 'contain',
}) {
  const productName = product.name?.[lang] || (typeof product.name === 'string' ? product.name : '');
  const productCategory = product.categoryNames?.[lang] || product.category?.[lang] || '';
  const tag = product.tag?.[lang] || null;

  return (
    <div 
      className={`product-card ${onCardClick ? 'cursor-pointer' : ''} ${customClass}`.trim()}
      onClick={onCardClick}
    >
      <div className="product-image-container" style={{ background: 'var(--card-bg)', overflow: 'hidden' }}>
        {tag && <span className="product-tag">{tag}</span>}
        <div style={{ position: 'relative', width: '100%', height: imageHeight, overflow: 'hidden' }}>
          <Image 
            src={product.img} 
            alt={productName}
            fill
            style={{ 
              objectFit: imageObjectFit, 
              borderRadius: '8px', 
              transform: product.zoom ? `scale(${product.zoom}) translateY(${product.offsetY || 0}%)` : 'none' 
            }}
            unoptimized
          />
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{productCategory}</span>
        <h3>{productName}</h3>
        {product.desc && <p className="result-product-desc">{product.desc[lang]}</p>}
        <div className="product-footer">
          <p className="price" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {product.oldPriceNum && (
              <span className="old-price" style={{ textDecoration: 'line-through', color: 'var(--old-price-color)', fontSize: '0.85em' }}>
                {formatPrice(product.oldPriceNum)}
              </span>
            )}
            <span style={{ color: product.oldPriceNum ? 'var(--success-color)' : 'inherit', fontWeight: product.oldPriceNum ? '700' : 'normal' }}>
              {formatPrice(product.priceNum)}
            </span>
          </p>
          <button
            className={`btn btn-sm ${isAdded ? 'btn-added' : actionClass}`}
            onClick={(e) => {
              e.stopPropagation();
              onActionClick?.(product);
            }}
            disabled={actionDisabled}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}
