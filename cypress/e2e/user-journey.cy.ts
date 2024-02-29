describe("User Journey", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("a user can find a course on the home page and complete the courses lessons", () => {

        cy.getByData("course-1").find("a").contains("Get started").click();
        cy.location("pathname").should("equal", "/testing-foundations");
        cy.getByData("next-lesson-button").click();
        cy.location("pathname").should("equal", "/testing-foundations/testing-is-a-mindset");
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").click();
        cy.location("pathname").should("equal","/testing-foundations/knowing-what-to-test")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").click();
        cy.location("pathname").should("equal","/testing-foundations/manual-vs-automated-testing")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").should("have.text", "Complete Course").click();
        cy.location("pathname").should("equal","/")

    })
})
