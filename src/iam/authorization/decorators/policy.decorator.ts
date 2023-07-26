import { SetMetadata } from '@nestjs/common';
import { Policy } from '../policies/interfaces/policy.interface';

export const POLICY_KEYS = 'policies';
export const Policies = (...policies: Policy[]) =>
  SetMetadata(POLICY_KEYS, policies);
