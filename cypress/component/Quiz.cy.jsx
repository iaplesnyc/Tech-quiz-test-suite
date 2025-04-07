import React from 'react';
import { mount } from '@cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the first question after starting the quiz', () => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');

    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Check that a question appears in an h2
    cy.get('h2').should('exist');
  });
});
