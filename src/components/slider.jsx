import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const PriceSlider = () => {
  const MIN = 100;
  const MAX = 100_000;
  const STEP = 100;

  const [values, setValues] = useState([0.3 * MAX, 0.6*MAX]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="price-slider flex items-center gap-3 h-12">
      <h3 className="flex-shrink-0 w-[20%]">Price Range</h3>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', 'var(--primary-color)', '#ccc'],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50px',
              backgroundColor: 'var(--primary-color)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-36px',
                color: '#fff',
                padding: '4px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-color)'
              }}
            >
              ¢{values[index].toFixed(0)}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PriceSlider;
