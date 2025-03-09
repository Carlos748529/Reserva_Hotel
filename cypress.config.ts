import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
  },
  projectId: "TU_PROJECT_ID", // Reemplaza con el ID obtenido de Cypress Cloud
});
