import { InjectionToken } from '@angular/core';

export const DYN_LOAD = new InjectionToken<{ [key: string]: string }>('LAZY_WIDGETS');
