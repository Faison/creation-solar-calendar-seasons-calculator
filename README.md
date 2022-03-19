# Creation Solar Calendar Seasons Calculator

## TODO

* Refactor code to group functions into separate themed files
* Fill in jsdocs so they're more useful than telling you types

## How to use

```bash
node . [number of years] [start of spring] [--output=default|csv]
```

This program assumes that you provided a date that is the start of spring. If you pass in a bad initial date, you will get bad dates as a result.

### Basic useage

With Node.js installed, open this directory in a terminal and enter the following:

```bash
node . 2 03/23/2022
```

Then you will see the following output:

```bash
|      |   Spring   |   Summer   |    Fall    |   Winter   |
|    1 | 03/23/2022 | 06/22/2022 | 09/21/2022 | 12/21/2022 |
|    2 | 03/22/2023 | 06/21/2023 | 09/20/2023 | 12/20/2023 |
```

### Create CSV

If you want to open the season start dates in an excel spreadsheet, you can generate a CSV like so:

```bash
node . 2 03/23/2022 --output=csv > dates.csv
```

The resulting `dates.csv` file can be opened in Excel or an Open Source equivalent.

## How this works

I pass in how many years to calculate and a starting spring solstice date.
For the examples mentioned below, I chose 50 years and March 23, 2022.

I then calculate the start of spring for all the requested years, while assuming a year is 364 days.
With each of those dates, I then calculate the start of summer, fall and winter while assuming that the start of each season is 13 weeks after the start of the previous season.

Finally, I format the dates to display in a terminal or to put in a CSV.

## About the Creation Solar Calendar

On March 8th, 2022, Ken Heidebrecht of Hanging On His Words put out a video describing a biblical calendar that he calls the "Creation Solar Calendar".
This calendar follows descriptions found in 1 Enoch and The Book of Jubilees in that:

* Years starts in spring
* A year has 364 days
* Each month has 30 days
* An intercalary day exists at the end of each season, making each season 91 days long
* The start of each Season falls on the fourth day of the week (Wednesday)

[See the video about the Creation Solar Calendar](https://www.youtube.com/watch?v=UrP2P0N2iP8)

## Reason for this calculator

The Gregorian calendar claims that a year is 365.2425 days long.
So if the year is 364 days long the winter solstice on the Gregorian calendar would shift a day or two every year.

The winter solstice seems like the easiest day to compare on both calendars, since there is some contention over if we should be using the equinoxes or equiluxes to determine spring and fall. And the world seems very set on accurately pegging down the Gregorian date of the solstices, even down the the minute.

To see how the Creation Solar Calendar places the solstices, I looked at a calendar starting at the first of the year according to the previously linked video, and counted out weeks.
So I started at March 23, 2022 and counted 13 weeks (91 days) to find the start of Summer would be June 22. 
I then counted 13 more weeks to find the start of Fall would be September 21.
And finally, I counted 13 more weeks to find that the start of Winter would be December 21.

I wrote out these days for a total of five years of dates and saw right away that the dates began to shift earlier into the year.
So instead of continuing with a calendar, I decided to automate this process with this program.

## My Findings

I decided to generate 50 years worth of season start dates.
I chose 50 since that's considered a Shmita in scripture, or seven jubilees plus a year.
[You can see the dates in this csv](./examples/one-shmita.csv).

The winter solstice for 2022 starts fine on 12/21.
But when we reach 2071, the winter solstice ends up two months earlier on the Gregorian calendar on 10/21.
Each year would shift the winter solstice one day early, with leap years shifting an additional day.

### Further Questions

Why does a year, as described in 1 Enoch and The Book of Jubilees, not match up with how we observe a year now?
If a Solar, 364 day calendar was observed since the start of creation, then when did a year become longer by a little more than a day?
Is a year actually longer?

We know that in the time when Joshuah lead the Isrealites into the land of Caanan, God stopped the sun and moon for nearly a whole day (see Joshua 10:1-15).

Additionally, in the days of Hezekiah, God caused the shadow on the sundial to go ten degrees backwards (See 2 Kings 20:1-11).

Could these events be responsible for why the winter solstice is no longer spaced 364 days apart?
Or am I missing something else that explains a year in this age being 364 instead of 365.2425?

And if it now takes the sun 365.2425 days to go from solstice to solstice, would it not be easy enough to add an additional intercalary day before spring?
It would probably have to follow the same leap year rules, but would stop the solstices from shifting throughout the years.
But I'm just spitballing here.

### A Second Intercalary Day Between Winter and Spring

To give it a try, I briefly updated the code to make a Year 365 days to simulate adding a second intercalary day between winter and spring, while ignoring leap years.
[You can see the dates with a second intercalary day in winter in this csv](./examples/one-shmita-with-extra-intercalary-day.csv).

As I suspected, the date of the winter solstice shifts a day earlier every leap year.
Additionally, this would mean that the start of each season no longer falls on the fourth day of the week.
And perhaps that is how things are to be until God renews the heavens.
But again, this is where we reach a point where I have less to offer in this discussion.
