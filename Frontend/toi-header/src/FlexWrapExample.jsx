import React, { useEffect, useRef, useState } from 'react';

const FlexWrapExample = () => {
  const containerRef = useRef(null);
  const wrapItemRef = useRef(null);
  const [isWrapped, setIsWrapped] = useState(false);

  const checkWrap = () => {
    if (containerRef.current && wrapItemRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = wrapItemRef.current.getBoundingClientRect();

      // Check if the item's top position is greater than the container's top position
      setIsWrapped(itemRect.top > containerRect.top);
    }
  };

  useEffect(() => {
    // Run the check on component mount and window resize
    checkWrap();
    window.addEventListener('resize', checkWrap);

    return () => {
      window.removeEventListener('resize', checkWrap);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        background: 'lightgray',
        padding: '10px',
      }}
    >
      <div style={{ background: 'lightblue', padding: '20px', border: '1px solid darkblue' }}>
        Item 1
      </div>
      <div style={{ background: 'lightblue', padding: '20px', border: '1px solid darkblue' }}>
        Item 2
      </div>
      <div
        ref={wrapItemRef}
        style={{
          background: 'lightblue',
          padding: '20px',
          border: '1px solid darkblue',
          display: isWrapped ? 'none' : 'block',
        }}
      >
        Item 3
      </div>
    </div>
  );
};

export default FlexWrapExample;
