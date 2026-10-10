import React from 'react'
import './VenueSection.css'

export default function VenueSection({ venueImg }) {
  const inv = ""
  return (
    <section className="vs-section">
      <p className={`sec-label-v ${inv}`}>Mərasim Yeri</p>
      <div className="vs-img-wrap">
        <img src={venueImg} alt="Ay işığı Şadlıq Sarayı 2" className={`vs-img ${inv}`} />
        <div className={`vs-fade ${inv}`} />
      </div>
      <div className={`vs-info ${inv}`}>
        <p className={`vs-name ${inv}`}>Ay işığı Şadlıq Sarayı 2</p>
        <p className={`vs-addr ${inv}`}>✿ Ay işığı Şadlıq Sarayı 2, Bakı şəhəri</p>
        <div className="vs-btns">
          <a href="https://maps.app.goo.gl/G8TYErU5aHimSzDy6?g_st=aw" target="_blank" rel="noopener noreferrer" className={`vbtn primary ${inv}`}>🗺 Google Maps</a>
          <a href="https://waze.com/ul?q=Ay%20i%C5%9F%C4%B1%C4%9F%C4%B1%20%C5%9Fadl%C4%B1q%20saray%C4%B1%202%20Bak%C4%B1&navigate=yes" target="_blank" rel="noopener noreferrer" className={`vbtn outline ${inv}`}>🧭 Waze</a>
        </div>
      </div>
    </section>
  )
}