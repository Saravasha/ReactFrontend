import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), react()],
  "process.env": {
    DOTNET_ASSET_API_URL:
      process.env.VITE_DOTNET_ASSET_API_URL ||
      "https://admin.saravasha.com.com/api/react/asset",
    DOTNET_ASSET_API_URL_STAGE:
      process.env.VITE_DOTNET_ASSET_API_URL ||
      "https://admin-staging.saravasha.com.com/api/react/asset",
    DOTNET_ASSET_API_URL_DEV:
      process.env.VITE_DOTNET_ASSET_API_URL ||
      "http://localhost:5000/api/react/asset",
    DOTNET_PAGE_API_URL:
      process.env.VITE_DOTNET_PAGE_API_URL ||
      "https://admin.saravasha.com.com/api/react/page",
    DOTNET_PAGE_API_URL_STAGE:
      process.env.VITE_DOTNET_PAGE_API_URL ||
      "https://admin-staging.saravasha.com.com/api/react/page",
    DOTNET_PAGE_API_URL_DEV:
      process.env.VITE_DOTNET_PAGE_API_URL ||
      "http://localhost:5000/api/react/page",
    DOTNET_COLOR_API_URL:
      process.env.VITE_DOTNET_COLOR_API_URL ||
      "https://admin.saravasha.com.com/api/react/color",
    DOTNET_COLOR_API_URL_STAGE:
      process.env.VITE_DOTNET_COLOR_API_URL ||
      "https://admin-staging.saravasha.com.com/api/react/color",
    DOTNET_COLOR_API_URL_DEV:
      process.env.VITE_DOTNET_COLOR_API_URL ||
      "http://localhost:5000/api/react/color",
    DOTNET_API_URL:
      process.env.VITE_DOTNET_API_TARGET || "https://admin.saravasha.com.com/",
    DOTNET_API_URL_STAGE:
      process.env.VITE_DOTNET_API_TARGET ||
      "https://admin-staging.saravasha.com.com/",
    DOTNET_API_URL_DEV:
      process.env.VITE_DOTNET_API_TARGET || "http://localhost:5000/",
  },
});
