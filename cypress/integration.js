describe('Hotel Reservation App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Cambia esto a la URL de tu aplicación
    });

    it('should display the correct title', () => {
        cy.title().should('include', 'TRAVELER RESERVATIONS');
    });

    it('should navigate to Reservaciones section', () => {
        cy.contains('Reservaciones').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Mostrando la sección de reservaciones');
        });
    });

    it('should navigate to Cancelar Pedido section', () => {
        cy.contains('Cancelar Pedido').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('El pedido ha sido cancelado.');
        });
    });

    it('should navigate to Configuraciones section', () => {
        cy.contains('Configuraciones').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Accediendo a las configuraciones.');
        });
    });

    it('should navigate to Ofertas Auto Generadas section', () => {
        cy.contains('Ofertas Auto Generadas').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Mostrando ofertas auto generadas.');
        });
    });

    it('should open and close the modal', () => {
        cy.contains('Ver detalles').click();
        cy.get('#reservationModal').should('be.visible');
        cy.contains('Cerrar').click();
        cy.get('#reservationModal').should('not.be.visible');
    });

    it('should search for hotels', () => {
        cy.get('#destination').type('NYC');
        cy.get('#checkinDate').type('2025-04-01');
        cy.get('#maxPrice').type('500');
        cy.contains('Buscar').click();
        cy.get('#hotelResults').should('not.be.empty');
    });

    it('should validate the reservation form', () => {
        cy.get('#reservationForm').within(() => {
            cy.get('#userName').type('John Doe');
            cy.get('#userEmail').type('john.doe@example.com');
            cy.contains('Reservar').click();
        });
    });
});