type Rate = number | null;
type Error = string | null;
export interface CurrencyState {
  currencies: Record<string, string>;
  from: string;
  to: string;
  rate: Rate;
  updated: string;
  loading: boolean;
  error: Error;
}
