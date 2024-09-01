import React from 'react'

function Intro({ startTest, style }) {

  const info = [
    {
      id: 1,
      description: "Test 10 sorudan oluşmaktadır",
    },
    {
      id: 2,
      description: "Başlat butonuna tıkladıktan sonra test başlayacaktır.",
    },
    {
      id: 3,
      description:
        "Soruların ekran kalma süresi 30 saniyedir.",
    },
    {
      id: 4,
      description: "Sorular ekrana geldikten sonraki ilk 4 saniye şıklar gözükmez",
    },
    {
      id: 5,
      description:
        "Sıradaki soruya bir şıkkı işaretlediğinizde veya süre dolduğunda geçiceksiniz.",
    },
    {
      id: 6,
      description: "Geçmiş sorulara dönemezsiniz!",
    },
  ];

  return (
    <div className="introduction" style={style}>
      <ul className="info">
        {info.map((item, index) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <p>Bol Şans</p>
      <button id="start" onClick={startTest}>Başlat</button>
    </div>
  )
}

export default Intro