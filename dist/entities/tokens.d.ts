import { ChainId } from '../constants';
import { Currency } from './currency';
import { BaseCurrency } from "./baseCurrency";
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token<T extends string = string> extends BaseCurrency<T> {
    readonly chainId: ChainId;
    readonly address: string;
    readonly isNativeToken: false;
    readonly isToken: true;
    constructor(chainId: ChainId, address: string, decimals: number, symbol: T, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WETH: {
    2000: Token<"WWDOGE">;
    97: Token<"WBNB">;
};
