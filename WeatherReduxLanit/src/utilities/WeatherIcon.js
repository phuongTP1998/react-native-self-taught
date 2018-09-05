const getIconName = id => {
    if (id >= 200 && id <= 299) {
      return 'thunderstorm';
    }
    if (id >= 300 && id <= 399) {
      return 'rainy';
    }
    if (id >= 500 && id <= 599) {
      return 'rainy';
    }
    if (id >= 600 && id <= 699) {
      return 'snow';
    }
    if (id >= 700 && id <= 799) {
      return 'cloud';
    }
    if (id === 800) {
      return 'sunny';
    }
    if (id >= 800 && id <= 809) {
      return 'cloud';
    }
    return 'clound';
  };
  
  export { getIconName };
  