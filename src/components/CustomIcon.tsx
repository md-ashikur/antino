import React from 'react';
import Image from 'next/image';


interface CustomIconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, size = 16, style }) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      style={{ display: 'inline-block', ...style }}
    />
  );
};

export default CustomIcon;
