# Architecture & Simulation Diagrams

## 11. Authentication Flow Benchmarking (Detailed)
*How the simulation engine measures every step of the OIDC handshake.*

```mermaid
graph TD
    Start[Start Benchmark] --> Req[OIDC Auth Request]
    Req --> Redirect[IdP Login Redirect]
    Redirect --> MFA[MFA Challenge]
    MFA --> Code[Auth Code Issuance]
    Code --> Exchange[Token Exchange]
    Exchange --> Final[Token Received]
    Final --> Measure[Calculate Latency T1-T0]
```

## 13. Conditional Access Test Matrix
```mermaid
graph LR
    User[User Context] --> Rule1[Location: Known]
    User --> Rule2[Device: Managed]
    User --> Rule3[Risk: Low]
    Rule1 & Rule2 & Rule3 --> Result[Pass: No MFA]
```

## 20. Benchmark Lifecycle
```mermaid
stateDiagram-v2
    Draft --> Scheduled: Set Schedule
    Scheduled --> Running: Executing Load
    Running --> Analysis: Calculating Scores
    Analysis --> Completed: Report Ready
```
