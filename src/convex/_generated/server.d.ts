import { GenericActionCtx, GenericMutationCtx, GenericQueryCtx } from "convex/server";

export const query: any;
export const mutation: any;
export const action: any;
export const internalQuery: any;
export const internalMutation: any;
export const internalAction: any;

export type QueryCtx = GenericQueryCtx<any>;
export type MutationCtx = GenericMutationCtx<any>;
export type ActionCtx = GenericActionCtx<any>;

export * from "convex/server";
