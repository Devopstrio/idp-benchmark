export enum IdPProvider {
  ENTRA_ID = "ENTRA_ID",
  OKTA = "OKTA",
  PING = "PING",
  AUTH0 = "AUTH0",
  KEYCLOAK = "KEYCLOAK",
  AWS_IAM = "AWS_IAM",
  GOOGLE = "GOOGLE",
  FORGEROCK = "FORGEROCK"
}

export enum BenchmarkMetric {
  LATENCY = "LATENCY",
  THROUGHPUT = "THROUGHPUT",
  ERROR_RATE = "ERROR_RATE",
  AVAILABILITY = "AVAILABILITY",
  COST_PER_USER = "COST_PER_USER",
  MATURITY_SCORE = "MATURITY_SCORE"
}

export interface IdPBenchmarkResult {
  provider: IdPProvider;
  timestamp: string;
  metrics: {
    authLatencyMs: number;
    tokenIssuanceMs: number;
    mfaChallengeMs: number;
    successRate: number;
    costEfficiency: number;
  };
  scores: {
    security: number;
    performance: number;
    zeroTrust: number;
    compliance: number;
  };
}

export interface ComparisonReport {
  id: string;
  title: string;
  providers: IdPProvider[];
  summary: string;
  recommendation: IdPProvider;
  createdAt: string;
}
