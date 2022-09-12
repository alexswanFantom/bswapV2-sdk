import { BaseCurrency } from "./baseCurrency";
import { Token } from "./tokens";
export declare class ETHER extends BaseCurrency<"WDOGE"> {
    readonly isNativeToken: true;
    readonly isToken: false;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly Instance: ETHER;
}
export declare type WrappedNativeToken = Token<"WWDOGE">;
