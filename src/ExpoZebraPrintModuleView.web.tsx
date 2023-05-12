import * as React from 'react';

import { ExpoZebraPrintModuleViewProps } from './ExpoZebraPrintModule.types';

export default function ExpoZebraPrintModuleView(props: ExpoZebraPrintModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
