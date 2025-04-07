describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete a full quiz and display the score', () => {
    // Start the quiz
    cy.contains('Start Quiz').click();

    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary', { timeout: 10000 }).should('have.length.at.least', 1);
      cy.get('.btn.btn-primary').first().click();

      // Wait for the DOM to update
      cy.wait(300); 
    }

    // Wait and confirm the quiz completed screen is shown
    cy.contains('Quiz Completed', { timeout: 10000 }).should('be.visible');
    cy.contains('Your score:', { timeout: 5000 }).should('be.visible');

    // Restart the quiz
    cy.contains('Take New Quiz').click();

    // Confirm the quiz has restarted
    cy.contains('Start Quiz', { timeout: 5000 }).should('be.visible');
  });
});
