import { useEffect } from 'react';

const MathJax = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
    script.async = true;

    const config = document.createElement('script');
    config.innerHTML = `
      MathJax = {
        loader: { load: ['input/asciimath', 'output/chtml', '[tex]/html'] },
        tex: {
          packages: { '[+]': ['ams', 'html'] },
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
        },
      };
    `;

    const mathjax = document.createElement('script');
    mathjax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.0/es5/tex-chtml.js';
    mathjax.async = true;

    document.head.appendChild(script);
    document.head.appendChild(config);
    document.head.appendChild(mathjax);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(config);
      document.head.removeChild(mathjax);
    };
  }, []);

  return null;
};

export default MathJax;
