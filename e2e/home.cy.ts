describe("Página de inicio", () => {
    it("Carga correctamente", () => {
      cy.visit("/");
      cy.contains("Vite + React").should("exist");
    });
  });
  