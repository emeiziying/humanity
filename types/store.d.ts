import { RootState } from '@/store/store';
import { EntityState } from '@reduxjs/toolkit';
import { FilterKeysOfType } from '.';

export type SectionKey = FilterKeysOfType<RootState, EntityState<any, string>>;
