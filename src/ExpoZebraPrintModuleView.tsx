import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoZebraPrintModuleViewProps } from './ExpoZebraPrintModule.types';

const NativeView: React.ComponentType<ExpoZebraPrintModuleViewProps> =
  requireNativeViewManager('ExpoZebraPrintModule');

export default function ExpoZebraPrintModuleView(props: ExpoZebraPrintModuleViewProps) {
  return <NativeView {...props} />;
}
