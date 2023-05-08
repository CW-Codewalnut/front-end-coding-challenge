# CodeWalnut's Coding Challenge

## Overview

The goal of this challenge is to build a React application that displays a list of Pokémon cards with relevant information fetched from the PokeAPI (https://pokeapi.co/). The application should be built using clean, maintainable code and adhere to best practices for React development. Applicants can use either JavaScript or TypeScript and are free to use any styling system they want. This challenge is designed for developers of all levels, from entry-level/juniors to seniors.

We would like you to spend no more than 4 hours on this task. If you can't complete all the requirements, that's perfectly fine. Our primary interest lies in understanding your problem-solving approach, the quality of your code, and your insights on potential improvements with additional time, rather than seeing a fully completed solution.

## API Options

You have the option to use one of the following APIs to fetch Pokémon data:

1. RESTful API: https://pokeapi.co/api/v2/{endpoint} (documentation: https://pokeapi.co/docs/v2)
2. GraphQL API: https://beta.pokeapi.co/graphql/v1beta (documentation: https://pokeapi.co/docs/graphql)

Feel free to use whichever API you prefer. If you want to implement multi-language support, you should fetch from the Pokémon species data endpoint, as this is the only endpoint that contains different languages. Again you're free to choose either the RESTful API's Pokémon species endpoint (https://pokeapi.co/docs/v2#pokemon-species) or the GraphQL API. You can explore the GraphQL API using the console at https://beta.pokeapi.co/graphql/console/.

## Requirements

1. Display a list of Pokémon cards with relevant details fetched from the PokeAPI.
2. Implement pagination to navigate through the list of Pokémon (expected mid-level and above).
3. Add a search bar to filter Pokémon by name (expected mid-level and above).
4. Implement a language dropdown to change the language of the Pokémon details, e.g., from English (en) to French (fr) (senior level).

## Instructions

1. Clone this repository, which contains a basic setup for the application. You're also welcome to use your own project or modify this one as you wish.
2. Install any necessary dependencies you need, and feel free to remove any that are not needed for your solution.
3. Develop the application according to the requirements listed above, considering your skill level and the given time.
4. Ensure that your code is clean, maintainable, and follows best practices for React development.
5. Write unit tests, integration tests, or end-to-end tests that cover the components you build, as appropriate.

## Documentation

Once you have finished the development, spend 10-15 minutes updating the README with any assumptions made, your design decisions, and what you would do if given more time.

## Submission

1. Run `npm run zip` to create a ZIP archive of your project. The zip file will appear in the root of the project.
2. Email the `zipfile.zip` file to us for review.

## Evaluation Criteria

Your submission will be evaluated based on the following criteria:

1. Functionality: The application should meet the requirements outlined above according to your skill level and the given time.
2. Code quality: Your code should be clean, maintainable, and adhere to best practices for React development.
3. Testing: Comprehensive tests should be written for your components and application logic. Writing tests should be an integral part of your development process.
4. Documentation: Your work should be well-documented, including any assumptions made or design decisions.

## Bonus Points

While not required, the following are additional features or improvements that will be considered as bonus points:

1. Implementing a responsive design to ensure the application works well on different devices and screen sizes.
2. Using modern design patterns (e.g., hooks) in your React application.
3. Adding button states, smooth transitions, and animations to enhance the overall user experience.

Lastly, remember to have fun! Clean code and great testing are our top priorities. It's not about completing all the requirements, but rather producing code you're proud to share with us.
