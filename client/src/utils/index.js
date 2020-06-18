
export const scrollIntoCenterView = (id) => {
  // If safari, fall back
  const element = document.getElementById(id);
  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const center = absoluteElementTop - window.innerHeight / 2;
  window.scrollTo(0, center);
};

export const scrollIntoTopView = (id) => {
  // If safari, fall back
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const top = absoluteElementTop - 50;
    if (isSafari || isIE) {
      // IE and Safari don't support this :(
      window.scrollTo(0, top);
    } else {
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }
};


export const priceFormat = (data) => {
  if (data) {
    const dataFormat = data.toString();
    if (dataFormat.trim() && dataFormat.trim() !== '') {
      const price = dataFormat.replace('$', '').trim();
      return `$${parseFloat(price).toFixed(2)}`;
    }
    return '$0.00';
  }
  return '$0.00';
};


export const allowOnlyNumbers = (value) => {
  if (!value) {
    return value;
  }
  // Reject other than numbers
  return value.replace(/[^\d]/g, '');
};



export const allowOnlyNumbersForZip = (value) => {
  if (!value) {
    return value;
  }
  // Reject other than numbers
  const retval = value.replace(/[^\d]/g, '');
  if (retval.length > 5) {
    return retval.substring(0, 5);
  }
  return retval;
};



export const allowOnlyLetters = (value) => {
  if (!value) {
    return value;
  }
  //  Reject other than letters
  return value.replace(/[^A-Za-z\s]/g, '');
};

export const allowOnlyAlphaNumerics = (value) => {
  if (!value) {
    return value;
  }
  //  Reject other than AlphaNumerics
  return value.replace(/[^A-Za-z\d]/g, '');
};

export const normalizeZipCode = (value) => {
  if (!value) {
    return value;
  }
  // Reject other than numbers
  return value.replace(/[^\d]/g, '');
};
