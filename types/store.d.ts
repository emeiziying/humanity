import { RootState } from '@/store/store';
import { EntityState } from '@reduxjs/toolkit';
import { FilterKeysOfType } from '.';

export type SectionItem = { id: string; name: string };

export type SectionKey = FilterKeysOfType<RootState, EntityState<any, string>>;
