

const images = [
  'images/dragon_1.jpg',
  'images/dragon_2.jpg',
  'images/dragon_3.jpg',
  'images/dragon_4.jpg',
  'images/dragon_5.jpg',
  'images/dragon_6.jpg',
  'images/dragon_7.jpg',
  'images/dragon_8.jpg',
  'images/dragon_9.jpg',
  'images/dragon_10.jpg',
];

const Slider = () => {
  return (
    <div className="relative w-52 h-64 mx-auto mt-20 perspective-1000 animate-autoRun">
      <div
        className="absolute inset-0 preserve-3d"
        style={{
          '--quantity': images.length,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              transform: `
                rotateY(calc((${index} * (360 / var(--quantity))) * 1deg))
                translateZ(220px)
              `,
            }}
          >
            <img
              src={src}
              alt={`Dragon ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
