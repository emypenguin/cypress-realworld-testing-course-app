describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it.only("allows users to subscribe to the email list", () => { 

        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("Success: tom@aol.com has been successfully subscribed")

    })


    it.only("should give an error when invalid email address is entered", () => { 

        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")

    })


    it.only("should give an error when cubscribing with email address that is already registered", () => { 

        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")
        cy.getByData("success-message").should("not.exist")

    })


    


})
