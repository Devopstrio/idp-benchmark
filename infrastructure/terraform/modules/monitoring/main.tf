resource "grafana_dashboard" "idp_performance" {
  config_json = jsonencode({
    title = "IdP Global Performance Benchmarking"
    panels = [
      {
        title = "Auth Latency by Provider (ms)"
        type  = "timeseries"
        targets = [{ expr = "avg by (provider) (idp_auth_latency_ms)" }]
      },
      {
        title = "Simulation Success Rate"
        type  = "gauge"
        targets = [{ expr = "avg by (provider) (idp_simulation_success_rate)" }]
      }
    ]
  })
}
