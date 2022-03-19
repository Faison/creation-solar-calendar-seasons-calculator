# Creation Solar Calendar Seasons Calculator

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
The winter solstice seems like the easiest day to compare on both calendars, since there is some contention over if we should be using the equinoxes or equiluxes to determine spring and fall.

To see how the Creation Solar Calendar places the solstices, I looked at a calendar starting at the first of the year according to the previously linked video, and counted out weeks.
So I started at March 23, 2022 and counted 13 weeks (91 days) to find the start of Summer would be June 22. 
I then counted 13 more weeks to find the start of Fall would be September 21.
And finally, I counted 13 more weeks to find that the start of Winter would be December 21.

I wrote out these days for a total of five years of dates and saw right away that the dates began to shift earlier into the year.
So instead of continuing with a calendar, I decided to automate this process with this program.
