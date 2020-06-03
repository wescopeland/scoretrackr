import { StoreDefaults } from 'state/shared-models';

/**
 * Creates a performance-friendly state object prepopulated with loading and error values.
 *
 * @template T The shape of your state
 * @param {(Partial<StoreDefaults> & T)} initialState The initial values of T
 * @example
 *
 * ```
 * interface UserState {
 *     firstName: string | null;
 *     lastName: string | null;
 * }
 *
 * const initialState = createInitialState<UserState>({
 *     firstName: null;
 *     lastName: null
 * })
 * ```
 *
 * This returns an object as:
 *
 * ```
 * {
 *     firstName: null,
 *     lastName: null,
 *     isLoading: true,
 *     error: undefined
 * }
 * ```
 *
 * isLoading initializes to true by default.
 */
export function createInitialState<T>(
  initialState: Partial<StoreDefaults> & T
): StoreDefaults & T {
  const isLoading = initialState?.isLoading ?? true;

  return {
    ...initialState,
    isLoading
  };
}
