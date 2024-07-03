import type { MaybeRefOrGetter, Ref } from 'vue';
import { type MaybeElement, useElementSize, useWindowSize } from '@vueuse/core';

export function useHeight<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  const size = useElementSize(element, { height: 0, width: 0 }, { box: 'border-box' });
  return size.height as Readonly<Ref<number>>;
}

export function useWindowHeight() {
  return useWindowSize().height as Readonly<Ref<number>>;
}
