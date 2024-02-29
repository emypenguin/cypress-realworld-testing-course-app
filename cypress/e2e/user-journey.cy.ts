const { _ } = Cypress // importing lodash
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
        cy.location("pathname").should("equal", "/testing-foundations/knowing-what-to-test")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").click();
        cy.location("pathname").should("equal", "/testing-foundations/manual-vs-automated-testing")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").should("have.text", "Complete Course").click();
        cy.location("pathname").should("equal", "/")

    })

    it("Emily can learn about return vs yield https://learn.cypress.io/cypress-fundamentals/understanding-the-asynchronous-nature-of-cypress ", () => {

        cy.getByData("course-1").find("a").contains("Get started").then(($btn) => {

            cy.wrap($btn).click();

        })
        cy.location("pathname").should("equal", "/testing-foundations");
    })

    it("Emily can learn about aliases ", () => {

        cy.getByData("course-1").find("a").contains("Get started").as("button")
        cy.get("@button").click();
        cy.location("pathname").should("equal", "/testing-foundations");
    })


    it("Emily can learn about waits ", () => {
        //Even though Cypress is incredibly smart in handling automatic waiting, there are times when you explicitly want to wait for something. For example, you may want to wait on a specific network request to finish before moving forward. The best way to handle these waits is to wait on aliases. Anything that can be aliased can be waited upon, like elements, intercepts, requests, etc.

        cy.getByData("course-1").find("a").contains("Get started").as("button")
        cy.wait(200);
        cy.get("@button").click();
        cy.location("pathname").should("equal", "/testing-foundations");
    })


    it("Emily can learn about screenshots and logging", () => {
        //Even though Cypress is incredibly smart in handling automatic waiting, there are times when you explicitly want to wait for something. For example, you may want to wait on a specific network request to finish before moving forward. The best way to handle these waits is to wait on aliases. Anything that can be aliased can be waited upon, like elements, intercepts, requests, etc.

        cy.getByData("course-1").find("a").contains("Get started").as("button")
        cy.get("@button").click();
        cy.log("Emily is logging something useful")
        cy.screenshot();
        cy.location("pathname").should("equal", "/testing-foundations");
    })






    it.only("emily tests a looping example", () => {
        cy.getByData("course-1").find("a").contains("Get started").click();
        cy.location("pathname").should("equal", "/testing-foundations");


        const lessons = ["/testing-foundations/testing-is-a-mindset", "/testing-foundations/knowing-what-to-test", "/testing-foundations/manual-vs-automated-testing"];

        lessons.forEach(myFunction)

        function myFunction(item) {
            cy.getByData("next-lesson-button").click();
            cy.location("pathname").should("equal", item);
            cy.getByData("challenge-answer-0").click();
        }

        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").find("a").should("exist").should("have.text", "Complete Course").click();
        cy.location("pathname").should("equal", "/")


    })


})
