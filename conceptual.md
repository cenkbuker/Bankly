### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token is a way to transmitting data securly

- What is the signature portion of the JWT?  What does it do?
  Signature part is used to verify the sender of the JWT is who says it and to ensure that the message wasn't changed along the way

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, a JWT is easily decoded by using the JWT decode() method.
  
- How can you implement authentication with a JWT?  Describe how it works at a high level.
  On a high level, JWT authentication works by signing a token for a user that often has a few relevant details about the user (like username and admin status) in the payload. The token is signed with a secret key known only to the server and transmitted upon an initial registration or login. Then, with every subsequent request to the application, that JWT may be required to be sent along with the request in some fashion (whether it be in the request body, header, query string, etc.) in order to access a particular resource. The JWT is then verified, confirming the signature actually works with the server's secret key, then the user can proceed. 

- Compare and contrast unit, integration and end-to-end tests.
  Unit test is used to test a particular piece of a code, integration test is used for to ensure several units work together correctly. End to end test is used for test the complete user intereactions.
  
- What is a mock? What are some things you would mock?
  Mocking is a way to replace a dependency in a unit under test with a stand-in for that dependency. The stand-in allows the unit under test to be tested without invoking the real dependency. 

- What is continuous integration?
  On continuous integration, engineers merge their code continuously 
- What is an environment variable and what are they used for?
  Continuous integration is a DevOps software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run. Continuous integration most often refers to the build or integration stage of the software release process and entails both an automation component (e.g. a CI or build service) and a cultural component (e.g. learning to integrate frequently). The key goals of continuous integration are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.
  
- What is TDD? What are some benefits and drawbacks?
  TDD is stands for test driven development, it means before righting actual code, you first right the test that tests the data and write the code afterwards. Benefitd of the TDD are modular design, an easier code to maintain, high test coverage, less debugging on the other hand, drawbacks of TDD is having slow process when developing, test need to maintain well when requirements are changed. 

- What is the value of using JSONSchema for validation?
  Schema Validation allows you to check if incoming traffic complies with a previously supplied API schema. When you provide an API schema, API Shield creates rules for incoming traffic from the schema definitions. These rules define which traffic is allowed and which traffic gets logged or blocked.

- What are some ways to decide which code to test?
  Prioritization and risk management is the best way to choose which code to write test.

- What does `RETURNING` do in SQL? When would you use it?
  Use of `RETURNING` avoids performing an extra database query to collect the data, and is especially valuable when it would otherwise be difficult to identify the modified rows reliably.

- What are some differences between Web Sockets and HTTP?
  HTTPs and Websockets are the communication protocols that have a defined set of rules with which communication works. The major difference is the data transmission mode. An HTTP starts sending data as responses when a request is received, whereas Websockets send and receives data based on data availability.

- Did you prefer using Flask over Express? Why or why not?
  I like Flask more than the Express it is easier to use and the database connection a way easier but since it uses server side rendering, it is not that useful in many applications. Also, Express has wider range of use in companies.