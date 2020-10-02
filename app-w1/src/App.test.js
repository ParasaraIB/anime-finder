import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

describe("Dashboard Page", () => {

  test("There is YourAnimeList.Net as navbar brand", () => {
    const { getByTestId } = render(<App />);
    const navbarBrand = getByTestId("navbar-brand");
    expect(navbarBrand).toBeInTheDocument();
    expect(navbarBrand).toHaveTextContent(/youranimelist.net/i);
  });

  test("There is YourAnimeList.Net as app title", () => {
    const { getByTestId } = render(<App />);
    const appTitle = getByTestId("app-title");
    expect(appTitle).toBeInTheDocument();
    expect(appTitle).toHaveTextContent(/YourAnimeList.Net/i);
  });

  test("There exists Recommendation heading when the user first enter the page before even doing a single action", () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const animesContainer = getByTestId("animes-container");
    const recommendationHeading = getByTestId("recommendation-heading");
    const resultsHeading = queryByTestId("results-heading");

    expect(animesContainer).toBeInTheDocument();
    expect(animesContainer).toContainElement(recommendationHeading);
    expect(recommendationHeading).toHaveTextContent(/recommendations/i);
    expect(animesContainer).not.toContainElement(resultsHeading);
  });

});

describe("Event test", () => {

  test("When search feature is used", () => {
    const {
      getByPlaceholderText,
      getByTestId,
      debug,
    } = render(<App />);

    const searchInput = getByPlaceholderText("Search");
    const searchButton = getByTestId("search-button");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    const searchText = "naruto";
    fireEvent.change(searchInput, { target: { value: searchText } });
    expect(searchInput).toHaveValue(searchText);

  });

});

describe("Populate data from API call", () => {

  test("There are set of cards element in the page", async(done) => {
    const { debug, container } = render(<App />);
    waitForElement(() => {
      const card = container.querySelectorAll(".card")
      expect(card).toHaveLength(50);
      done();
    }), {
      timeout: 5000
    };
  });

});