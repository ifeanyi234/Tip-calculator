# Tip Calculator

A fast, mobile-friendly tip calculator that splits bills fairly
between any number of people.

## Live Demo

[Link here once deployed]

## Screenshot

![Tip Calculator](./screenshots/screenshot.png)

## Features

- Preset tip buttons (5%, 10%, 15%, 20%)
- Calculates tip amount, total bill, and per-person share
- Handles decimal bill amounts (e.g. ₦1500.50)
- Validates empty inputs and zero/negative values
- Resets form after each calculation

## Tech Stack

HTML, CSS, JavaScript (no frameworks)

## What I Learned

- Radio button pattern using classList for mutually exclusive selection
- Returning multiple calculated values from a single function using an object
- parseFloat vs parseInt and when each is appropriate
- Resetting form state cleanly after submission

## Known Limitations

- No custom tip percentage input beyond the presets
- Currency formatting doesn't add thousand separators (e.g. ₦10,000)

## What I'd Improve With More Time

- Add a custom tip % input field
- Format currency with commas (Intl.NumberFormat)
- Add a reset button so user can start over without submitting
