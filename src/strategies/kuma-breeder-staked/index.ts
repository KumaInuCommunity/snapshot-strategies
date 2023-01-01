import { strategy as masterChefPoolBalanceStrategy } from '../masterchef-pool-balance';

export const author = 'TheKdev9';
export const version = '0.1.0';

const KUMA_BREEDER_ADDRESS = '0xa206D322829e04fb5acD36F289eD5367AC3E73e4';

interface strategyOptions {
  pid: number;
  uniPair?: {
    uniPairAddress: string;
    tokenIndex?: number;
  };
  decimals: number;
}

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options: strategyOptions,
  snapshot
): Promise<Record<string, number>> {
  const tokenBalance = await masterChefPoolBalanceStrategy(
    space,
    network,
    provider,
    addresses,
    {
      chefAddress: KUMA_BREEDER_ADDRESS,
      uniPairAddress: options.uniPair?.uniPairAddress,
      pid: options.pid,
      tokenIndex: options.uniPair?.tokenIndex ?? 0
    },
    snapshot
  );

  return tokenBalance;
}
