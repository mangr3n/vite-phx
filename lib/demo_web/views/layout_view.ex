defmodule DemoWeb.LayoutView do
  use DemoWeb, :view

  def env() do
    Application.get_env(:demo, :environment, :dev)
  end

  def is_prod(), do: env() == :prod
  # Phoenix LiveDashboard is available only in development by default,
  # so we instruct Elixir to not warn if the dashboard route is missing.
  @compile {:no_warn_undefined, {Routes, :live_dashboard_path, 2}}
end
