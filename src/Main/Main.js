import React from 'react';

export default () => {
  return (
    <main className="container">
      <article className="product">
        <section className="product__card">
          <h1 className="product__title">Long Cotton Gabardine Car Coat</h1>
          
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <section className="product__gallery">
                <img className="product__image" src="img/preview-1@3x.jpg" srcset="img/preview-1@2x.jpg 2x, img/preview-1@3x.jpg 3x" alt="Photo 1" />
                <img className="product__image" src="img/preview-2@3x.jpg" srcset="img/preview-2@2x.jpg 2x, img/preview-2@3x.jpg 3x" alt="Photo 2" />
                <img className="product__image" src="img/preview-3@3x.jpg" srcset="img/preview-3@2x.jpg 2x, img/preview-3@3x.jpg 3x" alt="Photo 3" />
                <img className="product__image" src="img/preview-4@3x.jpg" srcset="img/preview-4@2x.jpg 2x, img/preview-4@3x.jpg 3x" alt="Photo 4" />
              </section>
            </div>

            <div className="col-xs-12 col-md-5">
              <section className="product__info">
                <div className="product__info-wrapper">
                  <h2 className="product__price">110 000 руб.</h2>
                  <p className="product__id">Item 39428531</p>
                </div>
                
                <p className="product__colour">Colour: Honey</p>

                <div className="product__colour-btns">
                  <button className="colour-btn colour-btn_black" type="button">Change colour to black</button>
                  <button className="colour-btn colour-btn_brown colour-btn_active" type="button">Change colour to brown</button>
                </div>

              </section>

              <section className="product__actions">
                <div className="product__action-btns">
                  <button className="action-btn action-btn_black" type="button">SELECT A SIZE</button>
                  <button className="action-btn action-btn_white" type="button">FIND IN STORE</button>
                </div>
            
                <button className="product__help-btn" type="button">NEED SIZE HELP?</button>
              </section>  
            </div>
          </div>
        </section>

        <section className="product__descr">
          <button className="product__btn-expand product__btn-expand_open" type="button">
            <h2 className="product__btn-expand-name">DESCRIPTION</h2>
          </button>

          <article className="product__descr-text">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p><br />
            <ul>
              <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </article>
        </section>

        <section className="product__shipping">
          <button className="product__btn-expand product__btn-expand_closed" type="button">
            <h2 className="product__btn-expand-name">SHIPPING & RETURNS</h2>
          </button>
        </section>

        <section className="product__delivery">
          <div className="row">
            <div className="col-md-7">
              <img className="product__delivery-image" src="img/delivery_pack@3x.jpg" srcset="img/delivery_pack@2x.jpg 2x, img/delivery_pack@3x.jpg 3x" alt="delivery image" />
            </div>

            <div className="col-md-5">
              <h2 className="product__delivery-header">DELIVERY</h2>

              <h3 className="product__delivery-subheader">Free Next Day Delivery</h3>
              <p className="product__delivery-text">Order before 7pm Monday to Thursday for delivery the next day</p>
              <h3 className="product__delivery-subheader">Collect-in-Store</h3>
              <p className="product__delivery-text">Order online today and pick up your items in store as early as tomorrow</p>
              <h3 className="product__delivery-subheader">Free Returns</h3>
              <p className="product__delivery-text">Enjoy free returns on your order</p>
              <h3 className="product__delivery-subheader">Free Gift Packaging</h3>
              <p className="product__delivery-text">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
              
            </div>
          </div>

        </section>
      </article>

      <section className="recommendations">
        <h2 className="recommendations__header">WE RECOMMEND</h2>

        <section className="recommendations__items">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a className="recommendations__card" href="#">
                <img className="recommendations__card-image" src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195" alt="Emroided Hooded" />
                <h3 className="recommendations__card-title">Emroided Hooded Content For Three Lines</h3>
                <h5 className="recommendations__card-price">27 000 руб.</h5>
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a className="recommendations__card" href="#">
                <img className="recommendations__card-image" src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195" alt="Relaxed Fit Stretch Jeans" />
                <h3 className="recommendations__card-title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                <h5 className="recommendations__card-price">22 500 руб.</h5>
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a className="recommendations__card" href="#">
                <img className="recommendations__card-image" src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195" alt="Leather and House Check" />
                <h3 className="recommendations__card-title">Leather and House Check Content For Three Lines</h3>
                <h5 className="recommendations__card-price">120 000 руб.</h5>
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a className="recommendations__card" href="#">
                <img className="recommendations__card-image" src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195" alt="Leather Wingtip Check" />
                <h3 className="recommendations__card-title">Leather Wingtip Check Content For Three Lines</h3>
                <h5 className="recommendations__card-price">46 000 руб.</h5>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="similar-offers">
        <h2 className="similar-offers__header">MORE FOR YOU</h2>

        <a className="similar-offers__link" href="#">Men’s Black Trench Coats</a>
        <a className="similar-offers__link" href="#">Men’s Short Trench Coats</a>
        <a className="similar-offers__link" href="#">Men’s Long Trench Coats</a>
      </section>
    </main>
  );
};
