describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.wait(2000);
        cy.get('input[type="email"]').type('USER_LOGIN ');
        cy.get('input[type="password"]').type('USER_PASSWORD');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(2000);
        cy.get('.available > button').first().click();
        cy.wait(2000);
        cy.get('.credit').type('4620869113632996');
        cy.get('.k_input_ccv').type('125');
        cy.get('.k_input_date').type('1225');
        cy.get('.k_input_name').type('NAME');
        cy.get('.pay-btn').click();
        cy.wait(2000);
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.wait(2000);
        cy.contains('Покупка прошла успешно').should('be.visible');
    });
});