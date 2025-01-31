## Week 1 Assignment: Flixster

Submitted by: **Ayslin Walker**

Estimated time spent: **8** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<a href="https://www.loom.com/share/649b6406629042e5b17d52ed3fb83398">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/649b6406629042e5b17d52ed3fb83398-with-play.gif">
  </a>

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes the topics we discussed did help however I was still very confused when it came to working with the api so I had to ask for help from other people.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

With more time, I would probably have tried to make the site more responsive, I forgot that pixels are absolute and unfortunately most of my styling used pixels so I tried to change as much as I could to percentages and more responsive units but I couldn't get everything. I would also try to figure out how to create a pop-up window with extra information pertaining to the movies.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

  Most of everything in the demo went well, I only really have an issue with what happens when I press the clear search button because it prompts the required field error message to come up, and I was unsure how to make that not happen. I tried removing the "required" keyword so that it wouldn't matter but that altered my code negatively so I just left it in instead.

### Open-source libraries used

stackoverflow.com
developer.mozilla.org

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
I want to shout out Sophia, Wissam, and Alejandro for helping me when I needed it
