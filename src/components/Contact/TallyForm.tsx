import { useEffect } from 'react';

interface TallyFormProps {
  isEnabled: boolean;
}

export default function TallyForm({ isEnabled }: TallyFormProps) {
  useEffect(() => {
    // Initialize Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore - Tally is loaded globally
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
      <iframe
        data-tally-src="https://tally.so/embed/w4P5gk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="200"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Registration form"
      />
    </div>
  );
}