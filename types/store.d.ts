import type { RootState } from '@/store/store';
import type { EntityState } from '@reduxjs/toolkit';
import type { FilterKeysOfType } from './utils';

export type SectionItem = { id: string; name: string };

export type SectionKey = FilterKeysOfType<RootState, EntityState<any, string>>;
