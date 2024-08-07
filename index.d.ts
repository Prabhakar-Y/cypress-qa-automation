/// <reference types="cypress" />


declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(username:string,password:string): Chainable<any>;
    loginWithSession(username:string,password:string):Chainable<any>;
    allure():Allure;
    setEnvironmentDetails(details: Record<string, string>): Chainable<void>;
  }

  interface Allure {
    addEnvironmentInfo(key: string, value: any): void;
    startStep(name: string): void;
    endStep(): void;
    feature(name: string): void;
    story(name: string): void;
    label(name: string, value: string): void;
  }
}