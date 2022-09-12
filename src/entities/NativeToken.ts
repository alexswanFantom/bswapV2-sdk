import { BaseCurrency } from "./baseCurrency";
import { Token } from "./tokens";

export class ETHER extends BaseCurrency<"WDOGE"> {
    public readonly isNativeToken: true = true;
    public readonly isToken: false = false;

    /**
     * The only instance of the base class `Currency`.
     */
    public static readonly Instance: ETHER = new ETHER(18, "WDOGE", "Wrapped Dogecoin");
}

export type WrappedNativeToken = Token<"WWDOGE">;
