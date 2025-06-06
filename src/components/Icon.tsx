import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface IconProps extends IconBaseProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, ...props }) => {
  const IconElement = IconComponent as React.ComponentType<IconBaseProps>;
  return <IconElement {...props} />;
};

export default Icon; 